/*We have coded over in modular way like we have breaked the functions in small individual parts like each one is dedicated to perform 
  specific task*/

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

const genCompChoice = () =>{
    //stone, paper and Scissors
    const options = ["rock", "paper", "scissor" ]; //there is no method to randomly select a string in JS, therefore we are using array.
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};


choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
       
    });
});

const drawMatch = () => {
    console.log("the match is draw");
    msg.innerText = "The match  is draw between both the players.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin == true){
        console.log("You Won!");
        msg.innerText = "You Won!";
        msg.style.backgroundColor = "green";
        userScore = userScore + 1;
        user_score.innerText = userScore;
    }
    else{
        console.log("You lost");
        msg.innerText = "You lost";
        msg.style.backgroundColor = "red";
        compScore = compScore + 1;
        comp_score.innerText = compScore;
    }

}

const playGame = (userChoice) => {
        const userChoiceGame = userChoice;
        console.log("uesr-choice:" , userChoice);
        const compChoice = genCompChoice();
        console.log("computer-choice:", compChoice);
       
        if(userChoiceGame === compChoice){
            drawMatch();
        }
        else{
            let userWin = true;

            if (userChoiceGame === "rock"){
                // if userChoice = rock , than computer choice can be scissor or paper.
                userWin = (compChoice === "scissor" ? true : false);
            }

            else if(userChoiceGame === "scissor") {
                // if userChoice = scissor , than computer choice can be rock or paper.
                userWin = (compChoice === "paper" ? true : false);
            }

            else{
                // if userChoice = paper , than computer choice can be rock or scissor.
                userWin = (compChoice === "rock" ? true : false);
            }
            showWinner(userWin);
        }

};

console.log(choices);   

//                                         code khatam 
// This code took me like 4 days to complete this whole mini project like I use to frustate when i was not able to debug or understand the 
// tinest mistake that can be solved easily if focussed with good and fresh mind so i use to leave the table by getting frustated faster and 
// that's why it took me to built it in 5 days.