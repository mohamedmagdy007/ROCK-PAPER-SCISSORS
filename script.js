let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    let random = Math.floor(Math.random() * 3)
    if (random == 0) {
        console.log(random + " Rock")
        return "Rock"
    } else if (random == 1) {
        console.log(random + " Paper")
        return "Paper"

    } else if (random == 2) {
        console.log(random + " Scissors")
        return "Scissors"
    }

}

function player() {
    let input = prompt("input Rock or Paper or Scissors")
    if (input != "Rock" && input != "Paper" && input != "Scissors") {
        alert("not vaild")
    } else {
        console.log(input)
        return input
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            alert(`player score: ${playerScore} | computer score: ${computerScore} Draw`)
        } else if (computerSelection === "Paper") {
            alert(`player score: ${playerScore} | computer score: ${computerScore +=1} Paper win Rock`)
        } else if (computerSelection === "Scissors") {
            alert(`player score: ${playerScore +=1}  | computer score: ${computerScore} Rock win Scissors`)
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Paper") {
            alert(`player score: ${playerScore} | computer score: ${computerScore} Draw`)
        } else if (computerSelection === "Rock") {
            alert(`player score: ${playerScore +=1}  | computer score: ${computerScore} Paper win Rock`)
        } else if (computerSelection === "Scissors") {
            alert(`player score: ${playerScore} | computer score: ${computerScore +=1} Scissors win Paper`)
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Scissors") {
            alert(`player score: ${playerScore} | computer score: ${computerScore} Draw`)
        } else if (computerSelection === "Rock") {
            alert(` player score: ${playerScore} | computer score: ${computerScore +=1} Rock win Scissors`)
        } else if (computerSelection === "Paper") {
            alert(`player score: ${playerScore +=1}  | computer score: ${computerScore} Scissors win Paper`)
        }
    }
}
 function whoWin(){
     let count = 0;
     do{
        playRound(player(), computerPlay())
        if(playerScore ==3 ){
            alert("player winner")
            break;
        }else if(computerScore==3) {
            alert("computer winner") 
            break;
        }
        
     }while(count < 1)
    
 }
whoWin()

