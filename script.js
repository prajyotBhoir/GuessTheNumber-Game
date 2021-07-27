'use strict';

let snum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Not a number
  if (!guess) {
    document.querySelector('.message').textContent = '😁 Type a Number';
  }
  //Correct answer
  else if (guess === snum) {
    document.querySelector('.message').textContent = '🎊 Correct Number';
    document.querySelector('.number').textContent = snum;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.high').textContent = highscore;
    }
  }
  //Wrong answer
  else if (guess !== snum) {
    if (guess === snum + 2 || guess === snum + 1) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 You are CLOSE';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '💔 You lose';
        document.querySelector('body').style.backgroundColor = '#e63946';
        score = 0;
        document.querySelector('.score').textContent = score;
      }
    } else if (guess === snum - 2 || guess === snum - 1) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📉 You are CLOSE';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '💔 You lose';
        document.querySelector('body').style.backgroundColor = '#e63946';
        score = 0;
        document.querySelector('.score').textContent = score;
      }
    } else {
      if (score > 1) {
        let rannum = Math.trunc(Math.random() * 3) + 1;
        if (rannum === 1) {
          document.querySelector('.message').textContent = '😁 Keep Trying';
          score--;
          document.querySelector('.score').textContent = score;
        } else if (rannum === 2) {
          document.querySelector('.message').textContent = '😉 Dont Lose Hope';
          score--;
          document.querySelector('.score').textContent = score;
        } else if (rannum === 3) {
          document.querySelector('.message').textContent = '😄 You will get it';
          score--;
          document.querySelector('.score').textContent = score;
        }
      } else {
        document.querySelector('.message').textContent = '💔 You lose';
        document.querySelector('body').style.backgroundColor = '#e63946';
        score = 0;
        document.querySelector('.score').textContent = score;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  snum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = '🧩 Start Guessing...';
});
