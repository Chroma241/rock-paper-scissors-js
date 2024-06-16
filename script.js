let rockBtn = document.getElementById("rock")
let paperBtn = document.getElementById("paper")
let scissorsBtn = document.getElementById("scissors")
let resetBtn = document.getElementById("reset")
let gameBtn = document.querySelector(".game-btn");

//0 = rock
//1 = paper
//2 = scissors

let score = {
    player1: 0,
    player2: 0,
    draw: 0,
    round:0
}

let game = ["rock", "paper", "scissors"];

function versus(p1) {
    console.log("ON")
    let p2 = Math.floor(Math.random() * 3);
    console.log(p2 = game[p2]);

    if (p1 === p2){
        alert(`You picked ${p1} and computer picked ${p2}. It's a draw, \n Wins: ${score.player1}, Losses: ${score.player2}, Draws: ${score.draw+1}`);
        score.draw += 1;
    }
        if(p1 == "rock" && p2 == "paper"){
            alert(`You picked ${p1} and computer picked ${p2}. You lose. \n Wins: ${score.player1}, Losses: ${score.player2+1}, Draws: ${score.draw}`);
            score.player2 += 1;
        }else if(p1 == "rock" && p2 == "scissors"){
            alert(`You picked ${p1} and computer picked ${p2}. You win. \n Wins: ${score.player1+1}, Losses: ${score.player2}, Draws: ${score.draw}`);
            score.player1 += 1;
        }else if(p1 == "paper" && p2 == "rock"){
            alert(`You picked ${p1} and computer picked ${p2}. You win. \n Wins: ${score.player1+1}, Losses: ${score.player2}, Draws: ${score.draw}`);
            score.player1 += 1;
        }else if(p1 == "paper" && p2 == "scissors"){
            alert(`You picked ${p1} and computer picked ${p2}. You lose. \n Wins: ${score.player1}, Losses: ${score.player2+1}, Draws: ${score.draw}`);
            score.player2 += 1;
        }else if(p1 == "scissors" && p2 == "rock"){
            alert(`You picked ${p1} and computer picked ${p2}. You lose. \n Wins: ${score.player1}, Losses: ${score.player2+1}, Draws: ${score.draw}`);
            score.player2 += 1;
        }else if(p1 == "scissors" && p2 == "paper"){
            alert(`You picked ${p1} and computer picked ${p2}. You win. \n Wins: ${score.player1+1}, Losses: ${score.player2}, Draws: ${score.draw}`);
            score.player1 += 1;
        }
    score.round += 1;
}


rockBtn.addEventListener("click", function(){
    versus("rock");
});
paperBtn.addEventListener("click", function(){
    versus("paper");
});
scissorsBtn.addEventListener("click", function(){
    versus("scissors");
});



