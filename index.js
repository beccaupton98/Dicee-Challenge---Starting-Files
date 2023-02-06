var rollResultPlayer1 = Math.floor(Math.random() * 6) + 1;
var diceImage1 = "images/dice" + rollResultPlayer1 + ".png";
var player1Dice = document.querySelector(".img1");

player1Dice.setAttribute('src', diceImage1);

var rollResultPlayer2 = Math.floor(Math.random() * 6) + 1;

var diceImage2 = "images/dice" + rollResultPlayer2 + ".png";

var player2Dice = document.querySelector(".img2");

player2Dice.setAttribute('src', diceImage2);

if (rollResultPlayer1 > rollResultPlayer2)
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
else if (rollResultPlayer1 < rollResultPlayer2)
    document.querySelector("h1").innerHTML = 'Player 2 Wins!';
else document.querySelector("h1").innerHTML = 'Draw';

