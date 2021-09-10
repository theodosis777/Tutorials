///Method 1
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

console.log(dec2bin(100));

///Method 2
console.log((100).toString(2));

///METHOD 3
function convertToBinary(number, bin) {
  if (number > 0) {
    return convertToBinary(parseInt(number / 2)) + (number % 2);
  }
  return '';
}

console.log(convertToBinary(100));
console.log(convertToBinary(8));

///CONVERT BINARY TO DECIMAL
var binary = '1100100';
var digit = parseInt(binary, 2);
console.log(digit);

///METHOD 2
function binaryToDecimal(string) {
  let decimal = +0;
  let bits = +1;
  for (let i = 0; i < string.length; i++) {
    let currNum = +string[string.length - i - 1];
    if (currNum === 1) {
      decimal += bits;
    }
    bits *= 2;
  }
  console.log(decimal);
}
console.log(binaryToDecimal('1100100'));
