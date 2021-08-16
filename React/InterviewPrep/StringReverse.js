///WITH ARRAY
const reverseString = (str) => {
  let strArr = str.split('').reverse();
  let NewStr = strArr.join('');

  console.log(NewStr);
};
///WITH STRING REPLACE
const reverseString2 = (str) => {
  let NewStr = '';

  for (i = str.length - 1; i >= 0; i--) {
    NewStr = NewStr + str[i];
  }

  console.log(NewStr);
};

///WITH STRING REVERSSE
const reverseString3 = (str) => {
  let NewStr = '';
  NewStr = reverseString(str);
  console.log(NewStr);
};

reverseString('apple');
reverseString2('apple');
reverseString3('apple');
