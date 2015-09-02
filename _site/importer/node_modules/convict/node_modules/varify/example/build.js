'use strict';
var browserify = require('browserify');

browserify()
  .transform(require('..'))
  .add(__dirname + '/sample.js')
  .bundle()
  .pipe(process.stdout);
