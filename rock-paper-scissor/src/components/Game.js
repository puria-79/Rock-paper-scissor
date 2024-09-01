import { useState } from 'react';
function Game() {
    const [playerVal, setPlayerVal] = useState(null);
    const [computerVal, setComputerVal] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [compScore, setCompScore] = useState(0);

    function logic (playerVal, computerVal) {
        if (playerVal == computerVal){
            return 0;
        } else if ((playerVal == "ROCK" && computerVal == "SCISSORS") ||
            (playerVal == "SCISSORS" && computerVal == "PAPER") ||
            (playerVal == "PAPER" && computerVal == "ROCK")
        ) {
            return 1;
        } else {
            return -1;
        }
    }

    function decision (playerChoice) {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const compChoice =  choices[Math.floor(Math.random() * choices.length)];
        const val = logic(playerChoice, compChoice)
        if(val == 1) {
            setPlayerVal(playerChoice);
            setComputerVal(compChoice);
            setPlayerScore(playerScore + 1);
        } else if(val == -1) {
            setPlayerVal(playerChoice);
            setComputerVal(compChoice);
            setCompScore(compScore + 1);
        } else {
            setComputerVal(compChoice);
            setPlayerVal(playerChoice);
        }
    }

    return (
        <div>
            <h1>Rock Paper Scissor Game</h1>
            <div >
                <button onClick={decision("ROCK")}>
                    <i /> Rock
                </button>
                <button onClick={decision("PAPER")}>
                    <i /> Paper
                </button>
                <button onClick={decision("SCISSORS")}>
                    <i />  Scissors 
                </button>
            </div>
            <div>
                <p>Your choice: {playerVal}</p>
                <p>Computer's choice: {computerVal}</p>
                <h2>Your Score:{playerScore}</h2>
                <h2>Computer Score: {compScore}</h2>
            </div>
        </div>
    )
}

export default Game;