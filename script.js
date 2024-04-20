let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//Function for Generate computer choice
const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

//function for condition of draw game
const drawGame = () =>{
    console.log("game was draw. ");
    msg.innerText = "Match Draw ! Play Again ";
    msg.style.backgroundColor = "blue";

};

//function for showing winner 
const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you won.")
        msg.innerText = "You Won ";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose.");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
}

//the main function where all the calculaion is happening 
const playGame =(userChoice) =>{
    console.log("user choice :",userChoice);
    //Generate computer choice 
    const comChoice = genCompChoice();
    console.log("computer's choice :", comChoice);

    if(userChoice == comChoice){
        //draw game 
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
            //paper scissors
            userWin = comChoice ==="paper"?false :true;
        }
        else if(userChoice ==="paper"){
            //rock scissors
            userWin = comChoice ==="scissors"? false:true;
        }
        else{
            //rock paper 
            userWin = comChoice ==="rock"? false:true;
        }
        showWinner(userWin);
    };
};

//function to get the user choice id 
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
