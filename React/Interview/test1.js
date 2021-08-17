//i=1
//ii=2
//iv=4
//v=5
//x=10
//ix=9
//l=50
//49=xlix
//99 xcix
///100 c

const ConvertToRomanAbs = (num, one, five, ten) => {
  if (num < 4) {
    return one.repeat(num);
  }
  if (num === 4) {
    return one + five;
  }
  if (num === 5) {
    return five;
  }
  if (num > 5 && num <= 8) {
    return five + one.repeat(num - 5);
  }
  if (num === 9) {
    return one + ten;
  }
  if (num === 10) {
    return ten;
  }
  return '';
};

const ConvertToRoman = (num) => {
  //return ConvertToRomanTens(num / 10) + ConvertToRomanUnits(num % 10);
  return (
    ConvertToRomanAbs(Math.floor(num / 100), 'c', 'd', 'm') +
    ConvertToRomanAbs(Math.floor((num % 100) / 10), 'x', 'l', 'c') +
    ConvertToRomanAbs(num % 10, 'i', 'v', 'x')
  );
};

const ConvertToRomanTens = (num) => {
  let val = '';
  if (num < 4) {
    return 'x'.repeat(num);
  }
  if (num === 4) {
    return 'xl';
  }
  if (num === 5) {
    return 'l';
  }
  if (num > 5 && num <= 8) {
    return 'l' + 'x'.repeat(num - 5);
  }
  if (num === 9) {
    return 'xc';
  }
  if (num === 10) {
    return 'c';
  }
  return val;
};

const ConvertToRomanUnits = (num) => {
  let val = '';
  if (num < 4) {
    return 'i'.repeat(num);
  }
  if (num === 4) {
    return 'iv';
  }
  if (num === 5) {
    return 'v';
  }
  if (num > 5 && num <= 8) {
    return 'v' + 'i'.repeat(num - 5);
  }
  if (num === 9) {
    return 'ix';
  }
  if (num === 10) {
    return 'x';
  }
  return val;
};

for (let i = 1; i <= 1000; i++) {
  console.log(i + ' R: ' + ConvertToRoman(i));
}
