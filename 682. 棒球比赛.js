/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let stack = [],
    idx = 0;
  let fnMap = {
    '+': function (stack, idx) {
      stack.push(stack[idx - 2] + stack[idx - 1]);
    },
    'D': function (stack, idx) {
      stack.push(stack[idx - 1] * 2);
    },
    'C': function (stack) {
      stack.pop();
    },
  }
  for (const str of ops) {
    if (fnMap[str]) {
      fnMap[str](stack, idx)
    } else {
      stack.push(+str)
    }
    idx = stack.length;
  }
  return stack.reduce((a, b) => a + b)
};