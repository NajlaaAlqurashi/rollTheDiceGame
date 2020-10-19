var player1 = prompt("Enter first player's name:", "");
var player2 = prompt("Enter secon player's name:", "");
window.onload = function() {


  document.querySelector("p.Player1").textContent = player1;
  document.querySelector("p.Player2").textContent = player2;
}


// Function to change the player name
function editNames() {
  player1 = prompt("Change Player1 name");
  player2 = prompt("Change player2 name");

  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;
}

// Function to roll the dice
function rollTheDice() {
  setTimeout(function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src",
      "dice" + randomNumber1 + ".png");

    document.querySelector(".img2").setAttribute("src",
      "dice" + randomNumber2 + ".png");

    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = (player2 + " WINS!");
      var audio = new Audio('applause8.mp3');
       audio.play();
    } else {
      document.querySelector("h1").innerHTML = (player1 + " WINS!");
      var audio = new Audio('applause8.mp3');
       audio.play();
    }
  }, 2500);

}

//document.querySelector('.butn').addEventListener("click", function() {
//  var audio = new Audio('applause8.mp3');
//  audio.play();
//});
