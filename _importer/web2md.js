//var fs = require('fs-extra');
var fs = require('fs');

var cheerio = require('cheerio');
var pdc = require('pdc');
var conf = require('./config/convict');
var slug = require('slug');
var path = require('path');
var nd = require('node-dir');
var regEscaper = require('escape-string-regexp');

var mapping = [];

function web2md(filename, data) {
  var title, content, new_filename, baseFile;

  if (filename.match(/\.htm[l]$/)) {

    $ = cheerio.load(data);
    if ($('meta[name=\"dcterms\.title\"]').length) {
      title = slug($('meta[name=\"dcterms\.title\"]')[0].attribs.content, '_').toLowerCase();
    }
    if ($('#skip-content').length) {
      $('#skip-content').remove();
    }
    if ($('div.main-content').html()) {
      content = $('div.main-content').html();
      permalink = title + '.html';
      baseFile = path.parse(filename).base;
      new_filename = path.join(path.dirname(filename), title + '.md');
      new_filebase  = path.parse(new_filename).base;

      //add frontmatter
      var frontmatter = '---\ntitle: ' + title + '\npermalink: ' + permalink + '\nlayout: default\n---\n';


      pdc(content, 'html', 'markdown_github', function(err, result) {
        if (err) {
          console.log(err);
          throw err;
        }
        //console.log('Converted... ' + baseFile);
        result = frontmatter + result;

        fs.writeFile(new_filename, result, function(err) {
          if (err) {
            console.log(frontmatter);
            console.log(filename);
            console.log(err);
            throw err;
          }
        });

        if (typeof(baseFile) !== "undefined" && typeof(title) !== "undefined") {
          //console.log('Adding mapping');
          fs.appendFile('mapping.csv', baseFile + ',' + new_filebase + '\n'); //fails/suceeds silently

        } else {
          console.log('!!!!! INVALID base file (' + baseFile + ') or title' + new_filebase);
        } //can I assume that the same filename wont be reused in another directory that I care about?
      });
    } else {
      console.log('!!!!! - INVALID FILE - ' + filename);
      return;
    }
  }

}

fs.truncateSync('mapping.csv');
//cycle thorugh the directory and process the files
nd.files(path.join(__dirname, conf.get('path')), function(err, files) {
  if (err) {
    throw err;
  }
  //For each file process it to convert and save as markdown
  files.forEach(function(filename) {
    web2md(filename, fs.readFileSync(filename));
  });

});
