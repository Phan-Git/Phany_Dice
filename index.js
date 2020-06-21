var img_array = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var img_1 = document.querySelector(".img1");
var img_2 = document.querySelector(".img2");
var heading_1 = document.querySelector("h1");


var rand_n1 = Math.floor(Math.random() * 6);
img_1.src = img_array[rand_n1];
console.log("img_1 = " + img_array[rand_n1]);

var rand_n2 = Math.floor(Math.random() * 6);
img_2.src = img_array[rand_n2];
console.log("img_2 = " + img_array[rand_n2]);

if (rand_n1 > rand_n2) { heading_1.innerHTML = "Congrats ! Player 1 wins. "}
else if (rand_n2 > rand_n1) { heading_1.innerHTML = "Congrats ! Player 2 wins. "}
else { heading_1.innerHTML = "Draw !"}




