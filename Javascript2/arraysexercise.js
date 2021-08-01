var roster =[];

function addstudent(){
  var studenttoenter=prompt("Enter the name of the student to add ");
  roster.push(studenttoenter);
}

function removestudent(){
  var studenttoremove=prompt("Enter the name of the student to remove ");
  var index = roster.indexOf(studenttoremove);
  roster.splice(index,1)
}

function displayroster(){

    console.log(roster)

}

var startapp=prompt("DO YOU WANT TO USE THE APP y/n ?");

if (startapp==='y') {
  exit=false;
  while (exit===false) {
      var action=prompt("Do you want to add/remove/display or quit ?");

      if (action==='add'){
        addstudent();

      }
      else if (action==='remove'){
        removestudent();
      }
      else if (action==='display'){
        displayroster();
      }
      else if (action==='quit'){
        exit=false;
        break;
      }


  }
}
