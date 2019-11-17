// Given a string expression, write a program to examine whether the pairs and the orders of “{ “, ” } ”, ”(“, ”) ”, ”[“, ”]” are correct in the expression.

const validateBrackets = (expression) => {
  let stack = []
  for (let i = 0; i < expression.length; i++) {
    switch (expression[i]) {
      case '(':
      case '{':
      case '[':
        stack.push(expression[i])
        break;
      case ')':
        if (stack[stack.length - 1] !== '(') {
          return false
        }
        stack.pop()
        break;
      case '}':
        if (stack[stack.length - 1] !== '{') {
          return false
        }
        stack.pop()
        break;
      case ']':
        if (stack[stack.length - 1] !== '[') {
          return false
        }
        stack.pop()
        break;
      default:
        break;
    }
  }

  return !stack.length
}
