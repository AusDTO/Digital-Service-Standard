var convict = require('convict');


module.exports = convict({
  path: {
    doc: "The file being procesed",
    format: String,
    default: null,
    arg: 'path'
  }
});
