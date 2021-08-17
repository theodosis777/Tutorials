'use strict';
const fizzbuzz = (num) => {
  if (isNaN(num)) {
    console.log('NOT A NUMBER');
  }
  ///loop through the numbers
  for (let i = 1; i <= num; i++) {
    let answer = '';
    if (i % 3 === 0) {
      answer = 'fizz';
    }
    if (i % 5 === 0) {
      answer += 'buzz';
    }
    console.log(!answer ? i : answer);
  }
};

fizzbuzz(-20);
fizzbuzz('basdad');
