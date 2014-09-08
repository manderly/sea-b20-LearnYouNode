//console.log(process.argv);

var sum = 0;
function processArgs(args) {
	for (i = 2; i < args.length; i ++ ) {
		sum += Number(args[i]);
		//console.log("i = " + args[i] + " sum = " + sum);
	}
	console.log(sum);
}

processArgs(process.argv);