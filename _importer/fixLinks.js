//var fs = require('fs-extra');
var fs = require('fs');

var cheerio = require('cheerio');
var pdc = require('pdc');
var conf = require('./config/convict');
var slug = require('slug');
var path = require('path');
var nd = require('node-dir');
var regEscaper = require('escape-string-regexp');


//TODO: check all mappings that have the same target filename

function replaceall(replaceThis, withThis, inThis) {
  withThis = withThis.replace(/\$/gim, "$$$$");
  return inThis.replace(new RegExp(replaceThis.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&])/gim, "\\$&"), "gim"), withThis);
}


function fixLinks(filename, old_to_new_filenames, data) {
  if (path.parse(filename).ext == '.md') {
    var new_data = data;
    for (var i = 0; i < old_to_new_filenames.length; i++) {
      //      old_to_new_filenames.forEach(function(old_to_new_filenames[i]) {
      console.log('Replacing: ' + old_to_new_filenames[i].old + ' with ' + old_to_new_filenames[i].new);
      //var regex = new RegExp(regEscaper(filename), 'gim');
      new_data = replaceall(old_to_new_filenames[i].old, old_to_new_filenames[i].new, new_data);
      fs.writeFileSync(filename, new_data);
    }
      console.log(filename + ' Data Length: ' + new_data.length);
      //console.log(new_data);
  }
}

var columns = ["old", "new"];
require("csv-to-array")({
  file: "mapping.csv",
  columns: columns
}, function(err, mapping) {
  if (!err) {
    mapping = mapping.filter(function(item) {
      if (typeof item.old !== 'undefined' || typeof item.new !== 'undefined') {
        return true;
      }
    });

    console.log(mapping);

//Now that the files have been renamed need to fix the links in each file.
nd.files(path.join(__dirname, conf.get('path')), function(err, files) {
      //console.log(old_to_new);
      files.map(function(filename) {
        fixLinks(filename, mapping, fs.readFileSync(filename).toString());
      });
    });
}
});
