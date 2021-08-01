function hello(){
  console.log("HELLO WORLD")
}

function helloyou(name){
  console.log("Hello you "+name)
}
function addnum(num1,num2){
  console.log(num1+num2)
}
function formal(name="Sam",title="sir"){
  return title+ " "+name
}
function timesfive(numinput){
  var result=numinput*5;
  return result;
}

hello()
helloyou("Theo")
addnum(1,2)


////GLOBAL SCOPE
var v="Global V"
var stuff= "Global stuff"

function fun(stuff){
  console.log(v)
  stuff="Reassing stuff inside function"
  console.log(stuff)
}

fun()
console.log(stuff)
