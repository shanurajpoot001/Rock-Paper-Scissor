let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");     // its use to select a choice
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");    // call a user and comp score
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];      // use array for computer choice
  const randIdx = Math.floor(Math.random() * 3);       //math.random class is use to select ramdom choice and floor is use to integer choice
  return options[randIdx];                             // 3 mean chice in rane of 0-2
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";   //its show a draw condition
  msg.style.backgroundColor = "#081b31";             // background color mean when game was draw to show this color
};

const showWinner = (userWin, userChoice, compChoice) => {     //call a fun to winner
  if (userWin) {
    userScore++;    // upgration when round complete to score updated
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";            //when you win to show green color
  } else {
    compScore++;                                    // condition od whos winner
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";             //when you loose to show a red color
  }
};

const playGame = (userChoice) => {        // arrow fun is use for user choice
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);     //call a user choice.
  });
});