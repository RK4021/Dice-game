'use strict';
//const randomNo = (Math.trunc(Math.random() * 10)) % 6 + 1;
//To swap the chance I am using the concept of even and odd. Player 1 is even
//and Player 2 is odd

let score = 0;
let currentScore = 0;
let tempCurrentScore = 0;
let chance = 0;
let playing = true;

//in order to swap the chance chance number must be increased before then call changeChance()


const dice = document.querySelectorAll('.dice');
const hold = document.querySelectorAll('.hold');
const newGame = document.querySelectorAll('.new-game');
const diceEl = document.querySelector('.dice-image');


dice.forEach(dice => {

    dice.addEventListener('click', function () {

        if (playing) {
            const randomNo = Math.trunc(Math.random() * 6) + 1;

            /*
            if (change % 2 === 0){
    
            }
                const randomNo = (Math.trunc(Math.random() * 10)) % 6 + 1;
            tempCurrentScore = randomNo;
            console.log(randomNo);
    
            */
            diceEl.classList.remove('hidden');
            diceEl.src = `/picture/dice-${randomNo}.png`;

            if (randomNo !== 1) {
                currentScore += randomNo;
                changeCurrentScore();
            }

            else {

                console.log('working');
                currentScore = 0;
                document.querySelector(`.p${chance}__current__score`).textContent = 0;
                changeChance();

            }
        }
    }
    )
});


hold.forEach(hold => {
    hold.addEventListener('click', function () {

        if (playing) {
            changeMainScore(currentScore);
            currentScore = 0;
            changeCurrentScore();
            if (score >= 20) {
                document.querySelector(`.player__${chance}`).classList.add('winner');
                addLooser();
                playing = false;
                diceEl.classList.add('hidden');
            }

            else
                changeChance();

        }
    })
})

document.querySelectorAll('.new-game').forEach(item => {
    item.addEventListener('click', function () {
        playing = true;
        diceEl.classList.add('hidden');
        currentScore = 0;
        score = 0;
        document.querySelector(`.player__${chance}`).classList.remove('winner');
        removeLoser();
        document.querySelectorAll('.score').forEach(item => item.textContent = 0);
        document.querySelectorAll('.current__score').forEach(item => item.textContent = 0);


    })
})




function changeCurrentScore() {

    document.querySelector(`.p${chance}__current__score`).textContent = currentScore;

}
function changeMainScore(currentScore) {
    score = document.querySelector(`.p${chance}__main__score`).textContent - 0 + currentScore;
    document.querySelector(`.p${chance}__main__score`).textContent = score;


}

function addLooser() {
    let temp = (chance === 1) ? 0 : 1;
    document.querySelector(`.player__${temp}`).classList.add('loser');
}

function removeLoser() {
    let temp = (chance === 1) ? 0 : 1;
    document.querySelector(`.player__${temp}`).classList.remove('loser');

}


function changeChance() {

    chance = chance === 0 ? 1 : 0;
    document.querySelector('.player__0').classList.toggle('play');
    document.querySelector('.player__1').classList.toggle('play');

}






