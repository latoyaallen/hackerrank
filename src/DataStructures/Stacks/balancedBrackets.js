export default function balancedBrackets(s) {
  const bracketMap = new Map();
  bracketMap.set('{','}');
  bracketMap.set('[',']');
  bracketMap.set('(',')');

  const stack = [];
  let i = 0;

  while(i < s.length) {
    if(s[i] === '{' || s[i] === '[' || s[i] === '(') {
      stack.push(s[i]);
    };
    if(bracketMap.get(s[i])) { // we found a matching closing bracket
      stack.pop;
      i++;
      return "YES";
    }
  }
}

// Problem
// https://www.hackerrank.com/challenges/balanced-brackets/problem
//  It must return a string: YES if the sequence is balanced or NO if it is not.
//function has the following parameter(s):
//s: a string of brackets

// Solution
// LOOP through the string
// If the current chr is an opening brace (note: there are three different opening braces in this problem)
// PUSH that current chr onto the stack
// ELSE we're going to see a closing brace, so we need to CHECK the top of the stack
// IF it doesn't have the corresponding opening brace (This could mean it has the wrong brace OR no brace at all)
// RETURN No


// Notes
// I found this solution easier to find when given a smaller test case, and building up from that
// In HackerRank, you can upload a custom test case in two lines (notice there are no string quotes,
// and our function doesn't require a number of inputs)
// 1
//{[()]}
//is the equivalent of
//const s = "{[()]}"
// expect(balancedBrackets(s)).toEqual("whatever you are returning");
//
