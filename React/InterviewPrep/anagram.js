const CheckAnagram = (str1, str2) => {
  let arr = str2.split('').reverse().join('');

  return str1 === arr;
};

console.log(CheckAnagram('anana', 'ananab'));
