'use strict';

const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const diceEl = document.querySelector('.dice')

let player1 = {
    scoreEle : document.getElementById('score--0'),
    score : 0,
    currentEle: document.getElementById('current--0'),
    current: 0,
    ele : document.querySelector('.player--0'),
    playing : true,
}

let player2 = {
    scoreEle : document.getElementById('score--1'),
    score : 0,
    currentEle: document.getElementById('current--1'),
    current: 0,
    ele : document.querySelector('.player--1'),
    playing : false,
}
player1.scoreEle.textContent = 0;
player2.scoreEle.textContent = 0;
let game = true;

function getRandom() {
    return Math.trunc(Math.random() * 6) + 1
}

function switchPlayer() {
    player1.playing = !player1.playing
    player1.current = 0
    player1.currentEle.textContent = player1.current
    player1.ele.classList.toggle('player--active')
    
    player2.playing = !player2.playing
    player2.current = 0
    player2.currentEle.textContent = player2.current
    player2.ele.classList.toggle('player--active')
}
diceEl.classList.add('hidden')
function rollHandler(){
    diceEl.classList.remove('hidden')
    if(game){
        let rng = getRandom()
    diceEl.src =`dice-${rng}.png`;

    if (rng == 1) {
        switchPlayer()
    } else {
        if (player1.playing) {
            player1.current += rng
            player1.currentEle.textContent = player1.current

        } else {
            player2.current += rng
            player2.currentEle.textContent = player2.current
        }
    }
    
    }

}

btnRoll.addEventListener('click', rollHandler)


btnHold.addEventListener('click',function(){
    if(game){
        if(player1.playing){
            player1.score += player1.current  
            player1.scoreEle.textContent = player1.score
        

        }else{
            player2.score += player2.current  
            player2.scoreEle.textContent = player2.score

        }
        if (player1.score >= 20 || player2.score >= 20){
           if(player1.playing){
            player1.ele.classList.add('player--winner')
        
           }else {
            player2.ele.classList.add('player--winner')
            
           }
           game = false;

        }
        
        switchPlayer()
    }
    
    
})
btnNew.addEventListener('click',function(){
    player1.current = 0
    player1.scoreEle.textContent = 0;
    player2.current = 0;
    player2.scoreEle.textContent = 0
    player1.ele.classList.remove('player--winner')
    player2.ele.classList.remove('player--winner')
    diceEl.classList.add('hidden')
})
