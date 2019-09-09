export default function balancedBrackets(s) {
  const bracketMap = new Map();
  bracketMap.set('{','}');
  bracketMap.set('[',']');
  bracketMap.set('(',')');

  const stack = [];
  let i = 0;

  const openingBracket = (value) => (value === '{' || value === '[' || value === '(');

  while(i < s.length) {
    if(openingBracket(s[i])) {
      stack.push(s[i]);
    } else {
      // we found a closing bracket
      // look back at the last item added to the stack
      const topOfStack = stack[stack.length - 1];
      // if it's a closing bracket, return YES, else NO
      const closeFound = bracketMap.get(topOfStack) === s[i];
      if(closeFound) {
        return "YES";
      } else {
        return "NO";
      }
    }
    i++;
  }
}

// Problem
// https://www.hackerrank.com/challenges/balanced-brackets/problem
//  It must return a string: YES if the sequence is balanced or NO if it is not.
//function has the following parameter(s):
//s: a string of brackets
