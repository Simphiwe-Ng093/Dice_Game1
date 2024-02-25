let play1Var = `./images/dice${Math.floor(Math.random() * 6) + 1}.png`;
let play2Var = `./images/dice${Math.floor(Math.random() * 6) + 1}.png`;
let score1 = 1;
let score2 = 2;
if(play1Var > play2Var)
    document.querySelector("h1").innerHTML = "Player 1 wins";
else if(play1Var < play2Var)
    document.querySelector("h1").innerHTML = "Player 2 wins";
else
   document.querySelector("h1").innerHTML = "It's a draw";
document.querySelector(".img1").setAttribute("src",play1Var);
document.querySelector(".img2").setAttribute("src",play2Var);
document.querySelector(".score1").innerHTML = "Score " + score1;
document.querySelector(".score2").innerHTML = "Score " + score2;
