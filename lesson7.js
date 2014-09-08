//http core module
//perform http get to a url provided as the fist parameter
//write the string contents of each data event from the response to a new line on the console (stdout)

var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8'); //emit strings instead of Buffer objects

  response.on("data", function(data) {
    console.log(data);
  });

  response.on("error", function(err) {
    console.log(err);
  });
});
