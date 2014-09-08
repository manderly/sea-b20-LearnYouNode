//Lesson 5: 
//Console logs all of the files in a directoy, filtered by the extension passed in by learnyounode verify

var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
  if (err) throw err;

  for (var i = 0; i < list.length; i ++ ) {
    if (path.extname(list[i]) === "." + process.argv[3]) {
      console.log(list[i]);
    }
  }
});