const fizzBuzz = (num) => {
  if (isNaN(num)) {
    console.log('NOT A NUMBER');
    return;
  }
  for (let i = 1; i <= num; i++) {
    let answ = '';
    if (i % 3 === 0) {
      answ = 'fizz';
    }
    if (i % 5 === 0) {
      answ += 'buzz';
    }

    console.log(!answ ? i : answ);
  }
};

fizzBuzz('dsa');
