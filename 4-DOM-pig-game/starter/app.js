/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, previousDice, gamePlaying, winScore;

// initialization
init();

// Roll button
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1
        if(dice !== 1){
            // Add Score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else if (dice === 6 && previousDice === 6){
            // Next Player
            alert('You get the 6,6 so, Next');
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();
        } else {
            // Next Player
            alert('You get the 1 so, Next');
            nextPlayer();
        }

        previousDice = dice;
    }
});

// Hold button
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        // Add Current score to Global score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if(scores[activePlayer] >= winScore){
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next Player
            nextPlayer();
        }
    }
});

// New button
document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    previousDice = 0;

    document.querySelector('.dice').style.display = 'none';

    // getElementById faster than querySelector
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');    
    document.querySelector('.player-1-panel').classList.remove('active');    
    document.querySelector('.player-0-panel').classList.add('active');  
    
    var input = prompt('Input the winner\'s score!!'); 
    // Undefined, 0, null or "" are coerced to false
    // Anything else is coerced to true
    if(winScore){
        winScore = pareInt(input);
    } else {
        winScore = 100;
    }
}

// Next Player
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    previousDice = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-pannel').classList.toggle('active');
    document.querySelector('.player-1-pannel').classList.toggle('active');

    //document.querySelector('.player-0-pannel').classList.remove('active');
    //document.querySelector('.player-1-pannel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';    
};
