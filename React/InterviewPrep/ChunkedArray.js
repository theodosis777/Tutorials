const ChunkedArray = (arr, n) => {
  let ReturnArray = [];
};

const chunks = ((arr, n) => {
  const chunked = [];

  for (let elem of arr) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === n) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunked;
})([1, 4, 12, 3, 2, 6, -9, 0], 3);

console.log({ chunks });
