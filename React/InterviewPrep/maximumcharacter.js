const maxchar = (str) => {
  let obj = {};
  let maxchar = '';
  let maxcount = 0;
  for (let char of str) {
    /*  if (typeof obj[char] == 'undefined') {
      obj[char] = 1;
    } else {
      obj[char] = ++obj[char];
    }
    */
    !obj[char] ? (obj[char] = 1) : obj[char]++;
  }
  for (let key in obj) {
    if (obj[key] > maxcount) {
      maxcount = obj[key];
      maxchar = key;
    }
  }
  console.log('Most used character: ' + maxchar + ' .Times found: ' + maxcount);
};

maxchar('aaabbcccc');
