var name =prompt("Hello and Welcome.Please enter your first name")
var lastname =prompt("Please enter your last lastname ?")
var age =prompt("how old are you?")
var height =prompt("How tall are you in centimeters ?")
var pet =prompt("what is the name of your pet ?")

alert("THANK YOU FOR PROVIDING YOUR INFORMATION")


if (name[0]===lastname[0] && age>20 && age<30 && height>=1.70 && pet[pet.length-1]==="y" ){
  console.log("SECRET MESSAGE")
}
else{
  console.log("NOTHING TO SEE HERE")
}
