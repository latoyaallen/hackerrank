const badCloudFound = (arr, index) => arr[index+2] == 1 ;

export default function jumpingOnClouds(n, arr) {
  let numJumps = 0;
  let index = 0;

  while(index < arr.length - 1) {
    if(badCloudFound(arr, index)){
      index++;
      numJumps++;
    } else {
      index = index + 2;
      numJumps++;
    }
  }
  return numJumps;
}

// Problem
// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// Solution
// WHILE the index we are on is less than the last index of the array, arr.length - 1,
// IF there is a 1 in that spot, only jump by 1.
// INCREASE the index by 1 because we want to check the next cloud.
// INCREASE num of jumps by one b/c we made a jump.
// } else {
// INCREASE the index by two because we jump forward by two indices because it's a safe cloud
// INCREASE num of jumps by one.

// Refactor
//Although using const to define functions seems like a hack, but it comes with some great advantages that make it superior (in my opinion)
//It makes the function immutable, so you don't have to worry about that function being changed by some other piece of code.
//You can use fat arrow syntax, which is shorter & cleaner.
//Using arrow functions takes care of this binding for you.
//Source: https://stackoverflow.com/questions/33040703/proper-use-of-const-for-defining-functions-in-javascript

