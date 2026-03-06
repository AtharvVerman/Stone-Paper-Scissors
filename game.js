let userScore=0;
let compScore=0;


const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScoreBoard= document.querySelector("#user-score");
const compScoreBoard= document.querySelector("#com-score");

const compChoice=()=>{
    const option=["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return option[randIdx];
}

const showWinner=(userWin, userchoice, compchoice)=>{
    if(userWin){
        userScore++;
        msg.innerText = `Your ${userchoice} beats ${compchoice}, You win!😉`;
        msg.style.backgroundColor="Green";
        userScoreBoard.innerText=userScore;
    }else{
        compScore++;
        msg.innerText = `Computer's ${compchoice} beats your ${userchoice}, You lose.😒`;
        msg.style.backgroundColor="Red";
        compScoreBoard.innerText=compScore;
    }
}


const gamePlay=(userChoice)=>{
    const comChoice=compChoice();
    
    if(userChoice===comChoice){
        msg.innerText= "It's a tie!, Play again...";
        msg.style.backgroundColor="purple";
    }else{
        userWin=true;
        if(userChoice==="rock"){
            //paper, scissors
            userWin= comChoice==="paper"? false : true;
        }else if(userChoice==="paper"){
            //scissors, rock
            userWin= comChoice==="scissors"? false : true;
        }else{
            //paper, rock
            userWin= comChoice==="rock"? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const choiceId= choice.getAttribute("id");
        gamePlay(choiceId);
    })
})