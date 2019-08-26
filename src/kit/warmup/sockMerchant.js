// each num in the array is a sock
// each matching pair of numbers in the arr is a pair of socks
// so [10,20,20] has 1 lone sock and 1 pair of matching socks.

export default function sockMerchant(n, arr) {
  const set = new Set(); // a set cannot have duplicate values, so it's good to use for this sort of problem.
  let count = 0; // let is block scoped. var is defined throughout the program, so we don't want to use var.

  arr.forEach(function(sock) { //iterate through each item in the array, arr
    if(set.has(sock)) { // if the sock is already in the set
      count ++; // increase count by one because we've found a pair
      set.delete(sock); // remove the sock from the set as a set cannot have duplicate values.
    } else {
      set.add(sock); // add the sock to the set
    }
  });
  return count;
}
