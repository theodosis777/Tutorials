const checkBracket = (str) => {
  let opening = ['[', '{', '('];
  let closing = [']', '}', ')'];
  let stack = [];

  const dict = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  for (i = 0; i < str.length; i++) {
    let char = str[i];

    if (opening.includes(char)) {
      stack.push(char);
    } else if (closing.includes(char)) {
      if (stack.length === 0) {
        return false;
      } else if (dict[stack.pop()] != char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(checkBracket('()'));
console.log(checkBracket('(){}'));
console.log(checkBracket('(){}[]'));
console.log(checkBracket('([()])'));
console.log(checkBracket('([)](()'));
