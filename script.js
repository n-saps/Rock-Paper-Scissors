const choices=document.querySelectorAll('.choice');
const msg=document.querySelector("#msg");
const userScoreNum=document.querySelector('#user-score');
const compScoreNum=document.querySelector('#comp-score');

let user_score=0;
let comp_score=0;

const drawGame = () =>{
    msg.innerText=("Game was draw");
    msg.style.backgroundColor="#28112B";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        user_score++;
        userScoreNum.innerText=user_score;
        msg.innerText=`You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="seagreen";
    }
    else{
        comp_score++;
        compScoreNum.innerText=comp_score;
        msg.innerText=`You Lost! Your ${userChoice} coud'nt beat ${compChoice}`;
        msg.style.backgroundColor="crimson";
    }
}

const genCompChoice =() =>{
    const options=['rock','paper','scissors'];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame= (userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin= true;
        if(userChoice === "rock"){
            userWin= compChoice === "paper" ? false: true;
        }
        else if(userChoice === "paper"){
            userWin= compChoice === "scissors" ? false : true;
        }
        else{
            userWin= compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute('id');
        playGame(userChoice);
    })
});