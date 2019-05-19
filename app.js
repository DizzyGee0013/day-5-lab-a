'use strict';

// Problem 1: (this is your demo that we'll solve in class)


// Gabriel - Code Below:

function sum(a, b) { //eslint-disable-line
  var result = []; // Gabriel - This Variable returns an empty array 
  result[0] = a + b; 
  result[1] = `The sum of ${a} and ${b} is ${result[0]}.`; // Gabriel - golden nugget :)
  return result;
}

testSum(4, 7);



// Problem 2:

// Write code here

function multiply(a, b) { //eslint-disable-line
  var answerMultiply = [];
  answerMultiply[0] = a * b;
  answerMultiply[1] = `Thre product of ${a} and ${b} is ${answerMultiply}.`;
  return resultMultiply
}

testMultiply(5,9);


// Problem 3:

// Write code here  

function sumAndMultiply(a, b, c) { //eslint-disable-line
  var answerSumAndMultiply = []/
  var addIt = sum(a, b)[0];
  var timesIt = multiply(a, b)[0];
  answerSumAndMultiply[0] = sum(addIt, c)[0];
  answerSumAndMultiply[1] = multiply(timesIt, c)[0];
  answerSumAndMultiply[2] = `${a} and ${b} and ${c} and ${answerSumAndMultiply[0]}.`;
  answerSumAndMultiply[3] = `The product of ${a} and ${b} and ${c} is ${answerSumAndMultiply[1]}.`;
  return resultSumAndMultiply
}

testSumAndMultiply(4,7,5);

// Problem 4:

// Write your code here

var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
  var answerSumArray = [];
  answerSumArray[0] = sum(sum(sumArr)[0], sumArr[1])[0], sumArr[2])[0];
  answerSumArray[1] = `${sumArr[0]}, ${sumArr[1]}, ${sumArr[2]} was passed in as an array of numbers, and ${answerSumArray[0]} in their sum.`;
  return answerSumArray;
}

testSumArray(testArray);



// Problem 5:

// Write your code here

function multiplyArray(multArr) { //eslint-disable-line
  var answerMultiplyArray = [];
  answerMultiplyArray[0] = multiply(multiply(multArr[0], mutlArr[1])[0], multArr[2])[0];
  answerMultiplyArray[1] = `the numbers ${multArr[0]}, ${multArr[1]}, ${multArr[2]} have a product of ${answerMultiplyArray}.`;
  return answerMultiplyArray;
}

testMultiplyArray(testArray);

// STRETCH GOAL - I did not reach for the stretch goal, I feel I will go back to this though and try later on :) 
