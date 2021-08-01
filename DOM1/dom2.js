var p=document.querySelector('p');

p.textContent="text that changed with dom command";
p.innerHTML="<strong>text that changed with dom command</strong>"

var special=document.querySelector("#special")
///TO GET THE LINK
var specialA=special.querySelector("a");
specialA.getAttribute("href");
specialA.setAttribute("href","https://www.google.com");

////E
