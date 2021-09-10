function longestUniqueSubsttr(str) {
  var n = str.length;

  // Result
  var res = 0;

  for (var i = 0; i < n; i++) {
    // Note : Default values in visited are false
    var visited = [];

    for (var j = i; j < n; j++) {
      // If current character is visited
      // Break the loop
      if (visited[str.charAt(j)] == true) break;
      // Else update the result if
      // this window is larger, and mark
      // current character as visited.
      else {
        res = Math.max(res, j - i + 1);
        visited[str.charAt(j)] = true;
      }
    }

    // Remove the first character of previous
    // window
    visited[str.charAt(i)] = false;
  }
  return res;
}

// Driver code
var str = 'geeksforgeeks';
console.log('The input string is ' + str);

var len = longestUniqueSubsttr(str);
console.log(
  'The length of the longest ' +
    'non-repeating character ' +
    'substring is ' +
    len
);
