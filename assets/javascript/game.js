$(document).ready(function() {
var crys1;
var crys2;
var crys3;
var crys4;
var randomNum;
var currentNum;

function initializeGame() {



var randomNum = Math.floor((Math.random() * (100 - 10) + 1));
console.log(randomNum); // << for checking if function works
var currentNum = 0;
var crys1 = Math.floor((Math.random() * (10 - 1) + 1));
var crys2 = Math.floor((Math.random() * (10 - 1) + 1));
var crys3 = Math.floor((Math.random() * (10 - 1) + 1));
var crys4 = Math.floor((Math.random() * (10 - 1) + 1));
console.log(crys1, crys2, crys3, crys4); // << for checking if function works

alert("The number you must get to is " + randomNum + "! Good luck");

$(".primary").on("click", function() {
  currentNum = currentNum + crys1;
  console.log(currentNum);
});




};
initializeGame();
})
