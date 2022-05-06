randomNumber1 = Math.floor(Math.random() * 6 + 1);
randomNumber2 = Math.floor(Math.random() * 6 + 1);

let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImage1);
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.getElementById("Title").innerHTML = "Player One Wins!";
  console.log(randomNumber1);
  console.log(randomNumber2);
} else if (randomNumber2 > randomNumber1) {
  document.getElementById("Title").innerHTML = "Player two Wins!";
  console.log(randomNumber1);
  console.log(randomNumber2);
} else {
  document.getElementById("Title").innerHTML = "It's a Draw! Amazing";
  console.log(randomNumber1);
  console.log(randomNumber2);
}
