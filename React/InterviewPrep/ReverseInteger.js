const Rinteger = (num) => {
  let str = String(num).split('').reverse().join('');

  let newnum = Number(str);
  console.log(newnum);
};

Rinteger(005);
