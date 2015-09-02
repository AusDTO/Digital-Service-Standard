var convict = require('convict');


module.exports = convict({
  path: {
    doc: "The directory strucutre being procesed",
    format: String,
    default: null,
    arg: 'path'
  }
});
