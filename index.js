randomNumber1 = Math.floor(Math.random() * 6 + 1);

randomDice = "dice" + randomNumber1 + ".png";

randomDiceImage = "./" + "images/" + randomDice;

document.querySelector(".img1").setAttribute("src", randomDiceImage);




randomNumber2 = Math.floor(Math.random() * 6 + 1);

randomDice2 = "dice" + randomNumber2 + ".png";

randomDiceImage2 = "./" + "images/" + randomDice2;

document.querySelector(".img2").setAttribute("src", randomDiceImage2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}