var countries=["USA","GERMANY","CHINA"];

console.log(countries[0])

countries[2]="FRANCE";
console.log(countries[2])



////add to arrays
countries.push("Spain");

////loop in arrays
countries.forEach((item, i) => {
  console.log(item,i)
});

////remove last element
countries.pop();
////loop in arrays
countries.forEach((item, i) => {
  console.log(item,i)
});
