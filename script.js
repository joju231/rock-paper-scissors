alert("Click OK and then click Cancel, then open de webpage console and refresh the website")

function getComputerChoice() {
    const random = Math.random()

    if (random >= 0 && random < 0.33) {
        return "scissors"
    } else if (random >= 0.33 && random < 0.66) { 
        return "paper"
    } else if (random >= 0.66) {
        return "rock"
    }
}

function getHumanChoice() {
    let humanPlay = prompt("What will you play? : ").toLowerCase()

    if (humanPlay === "scissors" || humanPlay === "paper" || humanPlay === "rock") {
        return humanPlay
    } else {
        return "Invalid choice, refresh the page to try again"
    }
     
}



function playGame() {
    
    let computerScore = 0
    let humanScore = 0

    

    function scores () {
        console.log("Your score: " + humanScore)
        console.log("Computer score: " + computerScore)
    }


    function playRound(humanChoice, computerChoice) {
        let roundResult;
    
        if (humanChoice === computerChoice) {
            roundResult = ("It's a tie, refresh to play again") 
        } else if (
            humanChoice === "paper" && computerChoice === "scissors" ||
            humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "scissors" && computerChoice === "rock") {
                roundResult = ("You lost! " + computerChoice + " beats " + humanChoice); 
                computerScore++;
        } else if (humanChoice === "Invalid choice, refresh the page to try again") {
            roundResult = ("Invalid choice, refresh the page to try again");
        } else {
            roundResult = ("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }

        console.log(roundResult)
        console.log(scores())
     
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    function checkWinner() {
        if (humanScore > computerScore) {
            console.log("You win!")
        } else if (humanScore < computerScore) {
            console.log("You lost!")
        } if (humanScore === computerScore) {
            console.log("It's a tie")
        }
        console.log("Refresh the page to play again")
    }
    
    checkWinner()
    
    

}





console.log(playGame())
