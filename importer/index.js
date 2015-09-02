//var fs = require('fs-extra');
var fs = require('fs');

var cheerio = require('cheerio');
var pdc = require('pdc');
var conf = require('./config/convict');
var slug = require('slug');
var path = require('path');
var nd = require('node-dir');
var regEscaper = require('escape-string-regexp');


/*
deb https://deb.nodesource.com/node_0.12 vivid main' > /etc/apt/sources.list.d/nodesource.list

*/
function web2md(filename, data) {
  var title, content, new_filename, baseFile;

  if (filename.match(/htm[l]$/)) { //only html

    //    if (!path.dirname(filename).match(/comment?$/) || !path.dirname(filename).match(/blog?$/)) { //ignore blogs and comments
    $ = cheerio.load(data);
    if ($('meta[name=\"dcterms\.title\"]').length) {
      title = slug($('meta[name=\"dcterms\.title\"]')[0].attribs.content, '_').toLowerCase();
    }
    if ($('#skip-content').length) {
      $('#skip-content').remove();
    }
    if ($('div.main-content').html()) {
      content = $('div.main-content').html();
      title += '.md';
      new_filename = path.join(path.dirname(filename), title);
      baseFile = path.parse(filename).base;
      pdc(content, 'html', 'markdown_github', function(err, result) {
        // if (err) {
        //   throw err;
        // }
        console.log('converted');


        fs.writeFile(new_filename, result, function(err) {
          if (err) {
            throw err;
          }
        });

        if (typeof(baseFile) !== "undefined" && typeof(title) !== "undefined") {
          console.log('Adding base to title');
          return {
            old: baseFile,
            new: title
          };

        } else {
          console.log('!!!!! INVALID base file (' + baseFile + ') or title' + title);
        } //can I assume that the same filename wont be reused in another directory that I care about?
      });
    } else {
      console.log('!!!!! - INVALID FILE - ' + filename);
      return;
    }
    //    }
  }
}

//Why are these ones zero length???
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1001.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1006.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1011.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1016.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1021.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1026.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1031.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1036.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1041.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1046.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1051.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1056.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1061.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1066.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1071.md Data Length: 0
// /home/nokout/projects/Digital-Service-Standard/importer/www.dto.gov.au/node/1076.md Data Length: 0


//TODO: Feedback links


function replaceall(replaceThis, withThis, inThis) {
  withThis = withThis.replace(/\$/g, "$$$$");
  return inThis.replace(new RegExp(replaceThis.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&])/g, "\\$&"), "gm"), withThis);
}


function fixLinks(filename, old_to_new_filenames, data) {
  if (path.parse(filename).ext == '.md') {
    var new_data = data;
    for (var i = 0; i < old_to_new_filenames.length; i++) {

      //      old_to_new_filenames.forEach(function(old_to_new_filenames[i]) {
      console.log('Replacing: ' + old_to_new_filenames[i].old + ' with ' + old_to_new_filenames[i].new);
      //var regex = new RegExp(regEscaper(filename), 'gim');
      new_data = replaceall(old_to_new_filenames[i].old, old_to_new_filenames[i].new, new_data);

    }
    console.log(filename + ' Data Length: ' + new_data.length);
    console.log(new_data);
    fs.writeFileSync(filename, new_data);

  }


  //replace old with new in data
  //write out new File
}


// // // // //
// MAIN
// // // // //
var old_to_new = [];
//cycle thorugh the directory and process the files
nd.files(path.join(__dirname, conf.get('path')), function(err, files) {
    if (err) {
      throw err;
    }
    //For each file process it to convert and save as markdown
    old_to_new = files.map(function(filename) {
      return web2md(filename, fs.readFileSync(filename));
    });

    //fs.writeFile('mapping.json', JSON.stringify(old_to_new_filenames, null, 2));
    console.log("Now fixing links...");
    //Now that the files have been renamed need to the links in each file.
  },

  function(old_to_new) {
    nd.files(path.join(__dirname, conf.get('path')), function(err, files) {
      console.log(old_to_new);
      var clean_old_to_new = old_to_new.filter(function(item) {
        if (item) {
          return true;
        }
      });
      console.log(clean_old_to_new);


      files.map(function(filename) {
        fixLinks(filename, clean_old_to_new, fs.readFileSync(filename).toString());
      });
    });
  }
);

//TODO: The above is async so this is running before it finished.
