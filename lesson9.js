//http.get();
//retrieving 3 URLs as command line arguments
//collect the complete content provided by each of the URLs and print it to the console
//don't need to print length, just data as a string
//one string per URLs
//must print in the same order they were provided
//catch: don't print in the order you get them, it wont work
//must queue the results and keep track of how many urls have returned their entire contents
//only once you have ALL the urls' contents, then you can print
//counting callbacks
//third party libraries exist but try to do on your own

var http = require('http');
var results = [];

/*
function printResults (err, results) {
  if (err) return err;
  results.forEach(function (result) {
    console.log(result);
  });
}

//for each entry in process.argv
for (var i = 2; i < process.argv.length; i ++ ) {
  //get the contents in chunks
  http.get(process.argv[i], function (res) {
    console.log(process.argv[i]);
    res.on('data', function (chunk) { //and write to result
      results[i] += chunk;
    });

    res.on('error', function (e) {
      console.log("error" + e.message);
    });
  });
}
*/

//counting callback is kind of an antipattern 
//solution hints:

//use a queue or array, push and pop 
//process.nextTick - run async but immediately

var myFunc = function(input, timeout) {
  setTimeout(function() 
    {
      console.log(input);
      callback();
      }, timeout);
};

var queue = [];

var myCallback = function() {
  if (queue.length) { //if length is 0 it evals to false
    queue.shift()();
  }
};

//this is a common async pattern 
queue.push(function() {myFunc('one', 1000, myCallback)});
queue.push(function() {myFunc('two', 500, myCallback)});
queue.push(function() {myFunc('three', 250, myCallback)});

queue.shift()(); 
//double set of parens - 
//first shift something off the queue, then call whatever comes off the queue

//without the queue, it would run "three two one"
//queue.shift moves it off the queue and executes the next one
//functions as objects! so powerful!


var callAsync = function(input, timeout, callback) {
  setTimeout(function() 
    {
      checkDone(input, callback);
      }, timeout);
};

var count = 0;
var queue = [];

function myCallback(input) {
  console.log(input);
};

function checkDone(input, callback) {
  queue.push({input: input, callback: callback});
  count ++;
  if (count === 3) {
    while (queue.length > 0) {
      var obj = queue.shift();
      obj.callback(obj.input);    
    }
    return false;
  }
};

//this is a common async pattern 
callAsync('one', 1000, myCallback);
callAsync('two', 500, myCallback);
callAsync('three', 250, myCallback);
