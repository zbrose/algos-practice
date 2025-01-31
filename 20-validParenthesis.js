/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //define a stack to hold elements
  let stack = [];

  //loop through elements
  for (let i = 0; i < s.length; i++) {
    // define the last character in the stack
    let char = stack[stack.length - 1];

    // if there are any opening parentheses, push them in to the stack
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else if (
      // if there are closing parentheses
      // match the last element in the stack with the closing parentheses
      (char == "(" && s[i] == ")") ||
      (char == "[" && s[i] == "]") ||
      (char == "{" && s[i] == "}")
    ) {
      stack.pop(); //if theres a match, get rid of the opening parentheses you pushed into the stack
    } else return false; // if not a match, parenthesis are not valid
  }

  return stack.length ? false : true; // if stack is empty here, all parenthesis are valid, test passes
};

console.log(isValid("()"));
console.log(isValid("(){}[]"));
console.log(isValid("(]"));
console.log(isValid("({})"));
