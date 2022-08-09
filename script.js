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
    console.log(getComputerChoice());

//Create a function that plays a single round of Rock Paper Scissors.
//it should take two parameters - the playerSelection and computerSelection and return
// a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

    function playSingleRound(computerSelection){
        const playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
        if(playerSelection == "rock" && computerSelection == "paper"){
            return "You Lose! Paper beats Rock";
        }
        return playerSelection;
    }
    console.log(playSingleRound(getComputerChoice()));