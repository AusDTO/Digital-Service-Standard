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

  if (filename.match(/htm[l]$/)) {

    $ = cheerio.load(data);
    if ($('meta[name=\"dcterms\.title\"]').length) {
      title = slug($('meta[name=\"dcterms\.title\"]')[0].attribs.content, '_').toLowerCase();
    }
    if ($('#skip-content').length) {
      $('#skip-content').remove();
    }
    if ($('div.main-content').html()) {
      content = $('div.main-content').html();
      full_title = title + '.html';
      new_filename = path.join(path.dirname(filename), title);
      baseFile = path.parse(filename).base;

      //add frontmatter


      pdc(content, 'html', 'markdown_github', function(err, result) {
        if (err) {
          console.log(err);
          throw err;
        }
        //console.log('Converted... ' + baseFile);
        result = '---\ntitle: ' + title + '\npermalink: ' + full_title + 'layout: default\n---\n' + result;

        fs.writeFile(new_filename, result, function(err) {
          if (err) {
            throw err;
          }
        });

        if (typeof(baseFile) !== "undefined" && typeof(title) !== "undefined") {
          //console.log('Adding mapping');
          fs.appendFile('mapping.csv', baseFile + ',' + full_title + '\n'); //fails/suceeds silently

        } else {
          console.log('!!!!! INVALID base file (' + baseFile + ') or title' + full_title);
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
