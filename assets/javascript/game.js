$(document).ready(function() {


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

  $("#goal_number").text(randomNum);
  $("#current_number").text(currentNum);

  $(".btn-outline-primary").on("click", function() {
    currentNum = currentNum + crys1;
    console.log(currentNum);
    check();
  });

  $(".btn-outline-secondary").on("click", function() {
    currentNum = currentNum + crys2;
    console.log(currentNum);
    check();
  });

  $(".btn-outline-success").on("click", function() {
    currentNum = currentNum + crys3;
    console.log(currentNum);
    check();
  });

  $(".btn-outline-danger").on("click", function() {
    currentNum = currentNum + crys4;
    console.log(currentNum);
    check();
  });

  function check() {
    $("#current_number").text(currentNum);
    if (currentNum > randomNum) {
      alert("You went over the number, you lose!");
      var playagain = prompt("Would you like to try again?");
      if (playagain) {
        reset();
      };
    }
    else if (currentNum == randomNum) {
      alert("Nice! You got the exact number, you win!");
      var playagain1 = prompt("Would you like to play again?");
      if (playagain1) {
        reset();
      };
    };
  };

  function reset() {
    currentNum = 0;
    $("#current_number").text(currentNum);
  };

};
initializeGame();


})
