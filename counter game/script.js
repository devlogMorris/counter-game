"use strict"


/// THE ELEMENTS
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");
const display1 = document.querySelector(".overall-display");
/// THE VARIABLES
let count = 0;

/// THE FUNCTIONS
const counter = function(){
   if(count < 66) {
       count += 1;
   }
   display1.innerHTML = count;

   if (count === 6 || count === 66) {
     document.body.style.backgroundColor = "#ed1c23";
     display1.innerHTML = count + "66";
   } else {
    document.body.style.backgroundColor = "";
}
}

const counter2 = function() {
   if(count > -66) {
   count -= 1;
}
   
 display1.innerHTML = count;
if (count === -6 || count === -66) {
  document.body.style.backgroundColor = "#ed1c23";
  display1.innerHTML = count + "66";
} else {
  document.body.style.backgroundColor = "";
}
 
}

const resetBtn = function() {
    count = 0;
    display1.innerHTML = "0";
}

/// THE ADDEVENTLISTERNERS
plus.addEventListener("click", counter);
minus.addEventListener("click", counter2);
reset.addEventListener("click", resetBtn);