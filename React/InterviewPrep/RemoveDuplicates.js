///METHOD 1 BRUTE FORCE
const RemoveDuplicates1 = (arr) => {
  let TempArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (TempArr.includes(arr[i]) === false) {
      TempArr.push(arr[i]);
    }
  }
  return TempArr;
};

///METHOD2
const RemoveDuplicates2 = (arr) => {
  let temparr = [];
  arr.sort();
  let tempnum = '';

  for (let i = 0; i < arr.length; i++) {
    if (tempnum != arr[i]) {
      tempnum = arr[i];
      temparr.push(arr[i]);
    }
  }
  return temparr;
};

///WITH OBJECT
const RemoveDuplicates3 = (arr) => {
  obj = {};

  for (let i of arr) {
    obj[i] = true;
  }
  return Object.keys(obj);
};

///DECONSTRUCTIOn

const RemoveDuplicates4 = (arr) => {
  return [...new Set(arr)];
};

let arr = [1, 2, 5, 2, 1, 8];
console.log(RemoveDuplicates1([1, 2, 5, 2, 1, 8]));
console.log(RemoveDuplicates2([1, 2, 5, 2, 1, 8]));
console.log(RemoveDuplicates3([1, 2, 5, 2, 1, 8]));
console.log(RemoveDuplicates4([1, 2, 5, 2, 1, 8]));
