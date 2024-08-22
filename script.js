'use strict';

//document it's a special object to starting manipulate the DOM
//it's a entry point to the DOM

// DOM it's not part of JavaScript actually DOM is a WEB APIs


let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

function updateScore(message) {
  document.querySelector('.message').textContent = message;
  if (score != 0) {
    score--;
  }
  document.querySelector('.score').textContent = score;
}

function isLastGuess() {
  if (score === 0) {
    document.querySelector('.message').textContent = '😒 Game Over';
    return true;
  } else {
    return false;
  }
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  console.log(guess);

  if (isLastGuess() === false) {
    if (!guess) {
      document.querySelector('.message').textContent = '💔 No Number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '✅ Correct Number';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > secretNumber) {
      updateScore('📈 Too high');
      isLastGuess();
    } else if (guess < secretNumber) {
      updateScore('📉 Too low');
      isLastGuess();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
