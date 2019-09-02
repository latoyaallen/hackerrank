export default function countingValleys(n, s) {
  let numValleys = 0; // we want to calculate the number of valleys in his walk. A valley starts when he goes down, or "D".
  let altitude = 0; // he is at sea level when the altitude is 0.
  for (var x = 0; x < s.length; x++) { // for each item in the string
    if(s[x] =="D") { // if he walks down
      altitude--; // the altitude decreases
    } else { // else he's walking up, so...
      // First, we want to see where he is.
      if(altitude === -1) { // if he are below sea level, but we are going up.  He has completed walking a valley.
        numValleys++; // we've found a valley, so increase the number of valleys by one
      }
      altitude++; // increase the altitude because we are going up. We need to do this AFTER checking if he has walked a valley.
    }
  }
  return numValleys;


}
