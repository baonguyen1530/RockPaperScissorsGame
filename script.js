const choices = ["rock", "paper", "scissors"];
const player_display = document.getElementById("player_display");
const computer_display = document.getElementById("computer_display");
const result_display = document.getElementById("result_display");

function playGame(player_choice){
    const computer_choice = choices[Math.floor(Math.random() * 3)];

    if(player_choice === computer_choice){
        player_display.textContent = `PLAYER: ${player_choice.toUpperCase()}`;
        computer_display.textContent = `COMPUTER: ${computer_choice.toUpperCase()}`;
        result_display.textContent = "It's a tie";
    }

    //these are the cases that the player loses
    else if((player_choice === "rock" && computer_choice === "paper") || 
    (player_choice === "paper" && computer_choice === "scissors") || 
    (player_choice === "scissors" && computer_choice === "rock")){
        player_display.textContent = `PLAYER: ${player_choice.toUpperCase()}`;
        computer_display.textContent = `COMPUTER: ${computer_choice.toUpperCase()}`;
        result_display.textContent = "You lost";
    }

    //these are the cases that the player wins
    else if((player_choice === "paper" && computer_choice === "rock") || 
    (player_choice === "scissors" && computer_choice === "paper") || 
    (player_choice === "rock" && computer_choice === "scissors")){
        player_display.textContent = `PLAYER: ${player_choice.toUpperCase()}`;
        computer_display.textContent = `COMPUTER: ${computer_choice.toUpperCase()}`;
        result_display.textContent = "You won";
    }
}