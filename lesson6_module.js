//Lesson 6 module: 
//Console logs all of the files in a directoy, filtered by the extension passed in by learnyounode verify

module.exports = function(dir, ext, callback) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(dir, function(err, data) {
      if (err) return callback(err);
      var returnArray = [];

      for (var i = 0; i < data.length; i ++ ) {
        if (path.extname(data[i]) === "." + ext) {
          returnArray.push(data[i]);
        }
      }
      //console.log("returnArray length is: " + returnArray.length);
      return callback(null, returnArray);
    });
}