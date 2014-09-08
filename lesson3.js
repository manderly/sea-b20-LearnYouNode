var fs = require('fs');

var lineCount = fs.readFileSync(process.argv[2]).toString().split('\n').length;

console.log(lineCount - 1);
