const removeEven = (arr) => {
  return arr.filter((item) => item % 2 === 0);
};

const arrToString = (arr) => {
  return arr.toString();
};

const arrJoin = (arr2) => {
  return arr2.join(' * ');
};

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = arr1;

console.log(removeEven(arr1));
console.log(arrJoin(arr2));
console.log(arrToString(arr2));

arr2.splice(2, 0, 10);
console.log(arr2);
arr2.splice(3, 1);
console.log(arr2);

let arr3 = [11, 12, 13, 14];
let arr4 = arr2.concat(arr3);
console.log(arr4);

let arr5 = arr4.sort(function (a, b) {
  return a - b;
});
console.log(arr5);

const d = new Date();
console.log(d);
