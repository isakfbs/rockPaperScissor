"use restrict"

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
    const computerChoice = getComputerChoice();
    console.log(computerChoice);

//Create a function that plays a single round of Rock Paper Scissors.
//it should take two parameters - the playerSelection and computerSelection and return
// a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

    function playSingleRound(computerSelection){
        const playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
        if(playerSelection == "rock" && computerSelection == "paper"){
            return "You Lose! Paper beats Rock";
        }else if(playerSelection == "paper" && computerSelection == "scissors"){
            return "You Lose! Scissors beats Paper";
        }else if(playerSelection == "scissors" && computerSelection == "rock"){
            return "You Lose! Rock beats Scissors";
        }else if(playerSelection == computerSelection){
            return "It was a tie game";
        }else {
            return "You won!";
        }
    }
    console.log(playSingleRound(computerChoice));