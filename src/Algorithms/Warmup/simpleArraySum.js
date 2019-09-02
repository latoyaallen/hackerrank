export default function simpleArraySum(ar) {
  const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
  return ar.reduce(sumReducer);
}

// Problem
// https://www.hackerrank.com/challenges/simple-array-sum/problem
// given an array, return the sum of it's elements.
// each element is an integer.
//
// Solution: use a reducer
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


