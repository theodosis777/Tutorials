const CheckSudoku = (grid) => {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var c = grid[i][j];
      if (c !== '.') {
        // check row
        for (var z = 0; z < 9; z++) {
          if (j !== z && grid[i][z] === c) return false;
        }
        // check column
        for (var z = 0; z < 9; z++) {
          if (i !== z && grid[z][j] === c) return false;
        }
        // check square
        var a = i - (i % 3),
          b = j - (j % 3);
        for (var x = a; x < a + 3; x++) {
          for (var y = b; y < b + 3; y++) {
            if (x !== i && y !== j && grid[x][y] === c) return false;
          }
        }
      }
    }
  }
  return true;
};

grid1 = [
  ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
  ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
  ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
  ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
  ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '7', '.'],
];
grid2 = [
  ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
  ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
  ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
  ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
  ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
  ['.', '2', '.', '.', '3', '.', '.', '.', '.'],
];
console.log(CheckSudoku(grid1));
console.log(CheckSudoku(grid2));
