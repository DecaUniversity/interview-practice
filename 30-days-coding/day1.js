"use strict";

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

process.stdin.on('data', function (data) {
	input_stdin += data;
});

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split("\n");
	main();
});

// Reads complete line from STDIN
function readLine() {
	return input_stdin_array[input_currentline++];
}

function main() {
	let i = 4;
	let d = 4.0;
	let s = "HackerRank ";
	
	let int;
	let double;
	let string;
	
	int = parseInt(readLine());
	double = parseFloat(readLine());
	string = readLine();
	
	let doubleSum = d + double;
	
	console.log(i + int);
	console.log(doubleSum.toFixed(1));
	console.log(`${s}${string}`);
	
}