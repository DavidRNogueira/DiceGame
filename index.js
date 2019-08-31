
var array = [0,1,2,3,4,5];
var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

if (randomNumber1 > randomNumber2)
[document.querySelector("h1").innerHTML = ("Player 1 Wins!")]

else if(randomNumber1 < randomNumber2)
[document.querySelector("h1").innerHTML = ("Player 2 Wins!")]

if (randomNumber1 === randomNumber2)
[document.querySelector("h1").innerHTML = ("Draw!")];

array[0] = "images/dice1.png";
array[1] = "images/dice2.png";
array[2] = "images/dice3.png";
array[3] = "images/dice4.png";
array[4] = "images/dice5.png";
array[5] = "images/dice6.png";

var dieImage1 = array[randomNumber1];
var dieImage2 = array [randomNumber2];

document.querySelector(".img1").setAttribute('src', dieImage1);
document.querySelector(".img2").setAttribute('src', dieImage2);
