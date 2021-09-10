const removeDupl = (list) => {
  return [...new Set(list)];
};

let arr = [0, 0, 1, 2, 3, 4, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7];

console.log(removeDupl(arr));
