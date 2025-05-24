let userScore = 0;
let compScore =0;

let choices = document.querySelectorAll(".choice");
let msg  = document.querySelector("#msg")

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
   let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

let drawGame =( ) => {
    msg.innerText = "Game was Draw. Paly Again";
    msg.style.backgroundColor = "#081b31"
};

let showWinner = (userWin, userChoice ,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!!")
        msg.innerText = `You Win!!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You Lose!!!   ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
};
let playGame = (userChoice) => {

    let compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
 
    }else{
        let userWin = true;
        if(userChoice === "rock"){
          userWin =  compChoice ==="paper" ? false:true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice ==="scissors"? false:true;
        } else{
            userWin = compChoice === "rock"? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",(e)=>{
        //console.log("button clicked");
        //console.log(e.target);
        //console.log(e.type);
        let userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});