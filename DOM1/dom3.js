

var header1=document.querySelector('#one')
var header2=document.querySelector('#two')
var header3=document.querySelector('#three')


header1.addEventListener('mouseover',function(){
  header1.textContent="Mouse Currenctly over";
  header1.style.color='red';
})

header1.addEventListener('mouseout',function(){
  header1.textContent="Hover Over Me!";
  header1.style.color='black';
})


header2.addEventListener('click',function(){
  header2.textContent="Mouse was clicked";
  header2.style.color='blue';
})

header3.addEventListener('dblclick',function(){
  header3.textContent="Mouse was double clicked";
  header3.style.color='green';
})
