//Lesson 6: 
//Same as Lesson 5, except it uses modules.
//Print a list of files (one per line) in a given directory, filtered by extension.
//First argument: dir name, Second argument: extension filter. 
//Must use async i/o
//Write a module file to do most of the work. This file must export a single function that takes these arguments:
//dir name, extension as a string, callback function. Callback function must use (err,data)
//Do not print to console from second file

var module = require('./lesson6_module.js');

//process.argv[2] = file path
//process.argv[3] = extension to filter by

module(process.argv[2],process.argv[3], function(err, callbackData) {
  for (var i = 0; i < callbackData.length; i ++) {
    console.log(callbackData[i]);
  }
});
