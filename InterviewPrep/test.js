const filterlist = (arr) => {
  return arr.filter((item) => item % 2 === 0);
};

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterlist(list));

const numbers = [65, 44, 12, 4];
const newArr = numbers.map((numbers) => numbers * 10);
console.log(newArr);

console.log(
  numbers.forEach((numbers) => {
    numbers * 10;
  })
);
