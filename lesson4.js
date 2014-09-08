var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) throw err;
  var lineCount = (data).toString().split('\n').length;
  console.log(lineCount - 1);
});

//on this spot, on august 11th 2014
//mandi achieved
//DONE IN ONE!!!

