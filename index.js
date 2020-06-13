var player1 = "Player1";
var player2 = "Player2";

function namaPlayer(){
player1 = prompt("Enter Player 1 Name");
player2 = prompt("Enter Player 2 Name");
document.querySelector("p.player1").innerHTML = player1;
document.querySelector("p.player2").innerHTML = player2;
}

function start(){
var player1Start = player1;
var player2Start = player2;
var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);
var str1 = "images/dice"
document.querySelector("img.img1").setAttribute("src", str1.concat(randomNumber1, ".png"));
document.querySelector("img.img2").setAttribute("src", str1.concat(randomNumber2, ".png"));
if(randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = player1Start.concat(" Wins");
}
else if(randomNumber2 > randomNumber1){
	document.querySelector("h1").innerHTML = player2Start.concat(" Wins");
}
else{
	document.querySelector("h1").innerHTML = "Draw";
}
}

