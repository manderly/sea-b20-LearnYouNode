//perform http get on a url provided as first argument
//collect all data from the server (not just first data event)
//stdout two lines: 
//first line - integer representing number of characters received from server
//complete string of characters sent by server
var http = require('http');

http.get(process.argv[2], function (res) {
  res.setEncoding('utf8');
  var result = '';

  res.on('data', function (chunk) {
    result += chunk;
  });

  res.on('end', function () {
    console.log(result.length);
    console.log(result.toString());
    //return result;
  });

  res.on('error', function (e) {
    console.log("error" + e.message);
  });
});

