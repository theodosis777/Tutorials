var carinfo={make:"Toyota",year:1990,model:"camry"};

console.log(carinfo["make"])

for (key in carinfo){
  console.log(key);
  console.log(carinfo[key])
}



/////
var simple={
  prop:"HELLO",
  myMethod:function(){
    console.log("My method was called")
  }
}

console.log(simple.myMethod())


var myObj={
  name:"Theo",
  greet:function(){
    console.log("Hello "+this.name);
  }
}

console.log(myObj.greet())
