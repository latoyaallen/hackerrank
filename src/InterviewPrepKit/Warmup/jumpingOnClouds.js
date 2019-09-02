// each num in the array is a cloud
// 0 is a cloud we can jumo on
// 1 is a clound we cannot jump on
// we can jump forward from 0 to 0 as long as the cloud we are jumping on has an index of 1 or 2 more than our current index
// so [0,1,0] two clouds we can jump on.  We can jump from index 0 to index 2.

//[0 0 1 0 0 1 0] should return 4
export default function jumpingOnClouds(n, arr) {
  let numJumps = 0;
  let index = 0; // starting index
  while(index < arr.length - 1) { // while the index we are on is less than the last index of the array, arr.length - 1,
    if(arr[index+2] == 1){ // We can jump up to two spots ahead.  But if there is a 1 in that spot, only jump by 1.
      index++; // we only jump by 1 because if we jumped by two we'd land on a bad cloud; so increase the index by 1;
      numJumps++;// we've made a jump, so increase num of jumps by one
    } else {
      index = index + 2;// jump forward by two indices because it's a safe cloud
      numJumps++; // we've made a single jump, so increase num of jumps by one
    }
  }
  return numJumps;

}
