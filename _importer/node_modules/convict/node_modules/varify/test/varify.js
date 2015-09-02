'use strict'
/*jshint asi:true*/

var test = require('tap').test
var through = require('through')
var browserify = require('browserify')

test('replaces all consts that are declare identifiers, but leaves others intact', function (t) {
  t.plan(1) 

  browserify()
    .transform(require('..'))
    .add(__dirname + '/../example/sample.js')
    .bundle()
    .pipe(through(ondata, onend));

  var data = ''
  function ondata(d) { data += d }
  function onend() {
    var lines = data.split('\n')
    var startline = lines.indexOf('// sample start') + 1
      , endline = lines.indexOf('// sample end');

    t.deepEqual(
        lines.slice(startline, endline)
      , [ "// this should be changed", 
          "var a = 1;", 
          "", 
          "// below two shouldn't", 
          "var keep = { const: 1 };", 
          "keep.const = 2;", 
          "", 
          "// only function assignment should be changed", 
          "var foo = function () {", 
          "  console.log('cannot change me');", 
          "  console.log('some const s should be left unchanged');", 
          "};" ]
    )
  }

})
