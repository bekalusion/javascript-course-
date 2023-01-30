'use strict';

let secretnumber = Math.trunc(Math.random()*20) + 1
let score = 20
let highscore = 0;
const displayMessage = function(message){
document.querySelector('.message').textContent = message
}



document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);


    //when ther is no input / no number
    if (!guess) { 
        displayMessage('no number')

        //when player wins
    } else if (guess === secretnumber){
        displayMessage('correct number!')
        
        document.querySelector('.number').textContent = secretnumber 
        
        document.querySelector('body').style.backgroundColor = '#60b347'
        
        document.querySelector('.number').style.width = '30rem'
        
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore ;
        }

    } else if(guess !== secretnumber){
        if (score > 1){
            displayMessage( guess > secretnumber ? 'too high' : 'too low');
            score = score - 1
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('you lost the game yleo!')
            document.querySelector('.score').textContent = 0
        
            }
        }
    }
    )



document.querySelector('.again').addEventListener('click', function(){
    
    score = 20
    secretnumber = Math.trunc(Math.random()*20) + 1
    
    document.querySelector('body').style.backgroundColor = '#222'
    
    document.querySelector('.number').style.width = '15rem'
    
    displayMessage('start guessing...')
    
    document.querySelector('.number').textContent = '?'
    
    document.querySelector('.score').textContent = '20'
    document.querySelector('.guess').value =
    ''
    
})
