"use restrict"

const buttons = document.querySelectorAll('[data]');
const display = document.querySelector('.display');
const scoreDisplay = document.querySelector('.score');
let playerScore = 0;
let machineScore = 0;


// console.log(display);

//Create a function called getComputerChoice, that should randomly return either
//Rock, Paper or Scissors

    function getComputerChoice(){
        const randomNumber = Math.floor(Math.random() * 3);
        switch(randomNumber){
            case 0:
                return "rock";
                break;
            case 1:
                return "paper";
                break;
            case 2:
                return "scissors";
                break;            
        }
    }
    // const computerChoice = getComputerChoice();
    // console.log(computerChoice);

//Create a function that plays a single round of Rock Paper Scissors.
//it should take two parameters - the playerSelection and computerSelection and return
// a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection){
        if(playerScore < 5 && machineScore < 5){
            if(playerSelection == "rock" && computerSelection == "paper"){
                machineScore++;
                return "You Lose! Paper beats Rock";
            }else if(playerSelection == "paper" && computerSelection == "scissors"){
                machineScore++;
                return "You Lose! Scissors beats Paper";
            }else if(playerSelection == "scissors" && computerSelection == "rock"){
                machineScore++;
                return "You Lose! Rock beats Scissors";
            }else if(playerSelection == computerSelection){
                return "It was a tie game";
            }else {
                playerScore++;
                return "You won!";
            }
        }else{
            return "END GAME!";
        }
    }
    // console.log(playSingleRound(computerChoice));

// Write a NEW function called game(). Call the playRound function inside 
// of this one to play a 5 round game that keeps score and reports a winner 
// or loser at the end.

    function game(playerChoice){
        const playerSelection = playerChoice.toLowerCase();
        const computerChoice = getComputerChoice();
        display.textContent = playRound(playerSelection, computerChoice);
    }

    // Create three buttons, one for each selection. 
    // Add an event listener to the buttons that call your 
    // playRound function with the correct playerSelection every time a button is clicked.
    // (you can keep the console.logs for this step)


    buttons.forEach(button => button.addEventListener('click', function(){
        game(this.textContent);
        scoreDisplay.textContent = `Player: ${playerScore}, Machine: ${machineScore}`;
    }));
