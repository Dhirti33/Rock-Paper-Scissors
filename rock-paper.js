// COMPUTER SELECTION.
let generator = (num) => { return Math.floor(Math.random() * num)};

function computerPlay(){
    const list = ["rock","paper","scissors",'']
    let weapon = list[generator(list.length -1)]
    return weapon;
}

//GETTING USER INPUT BY A CLICK.
let btn = document.querySelectorAll('.btn')
btn.forEach(button => {
    button.addEventListener('click',() =>{
        playerSelection = button.id;

        playAround(playerSelection,computerSelection);

        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
        }    
    });
});
let playerSelection;
let computerSelection;
let playerScore =0;
let computerScore =0;
let score = document.querySelector('.score')
let round_winner = document.querySelector('.round_winner')
let winner = document.querySelector('.winner')

// COMPARING BOTH INPUT AND DISPLAYING THE WINNER 
function playAround(playerSelection,computerSelection){
    computerSelection = computerPlay();
    if(playerSelection === computerSelection){
       
        round_winner.textContent = "It's A Tie";
    }else if((playerSelection === 'rock' && computerSelection === 'scissors') || 
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')){
                playerScore += 1;
                round_winner.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
    }else{
        computerScore += 1;
        round_winner.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }   

    
    score.textContent = `Player Score:${playerScore}      Computer Score:${computerScore}`;

}

//DECLARING THE WINNER
function declareWinner(){
    if (playerScore > computerScore) {
        winner.textContent =  'You Win!!! CONGRATS'
        btn.forEach(button => {
            button.style.display ='none'
        })
      } else {
        winner.textContent = 'You Lost! Sorry Try Again later';
        btn.forEach(button => {
            button.style.display ='none'
        })
      }
}

const reload = document.querySelector('.reload');
reload.addEventListener('click',()=>{
    location.reload();
})
