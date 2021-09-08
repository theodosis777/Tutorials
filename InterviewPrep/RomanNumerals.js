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

const convertNumberToRoman = (num, one, five, ten) => {
  if (num < 4) {
    return one.repeat(num);
  }
  if (num === 4) {
    return one + five;
  }
  if (num === 5) {
    return five;
  }
  if (num < 9) {
    return five + one.repeat(num - 5);
  }
  if (num === 9) {
    return one + ten;
  }
  if (num === 10) {
    return ten;
  }
};

const convertToRoman = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(
      convertNumberToRoman(Math.floor(i / 100), 'c', 'd', 'm') +
        convertNumberToRoman(Math.floor((i % 100) / 10), 'x', 'l', 'c') +
        convertNumberToRoman(i % 10, 'i', 'v', 'x')
    );
  }
};

convertToRoman(1000);
