('use strict');
const check = document.querySelector('.check');
const mesg = document.querySelector('.message');
const again = document.querySelector('.again');
const number = document.querySelector('.number');

const secret = Math.floor(Math.random() * 20 + 1);

let score = 20;
check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  let result = secret >= guess ? secret - guess : guess - secret;
  let message = '';

  if (result === 0) {
    message = 'Correct Guess, congrats  ';
    number.textContent = secret;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '35rem';
  } else {
    if (result <= 6) {
      message = 'you are in range ';
      if (result <= 4) {
        message = 'you are close ';
        if (result <= 2) {
          message = 'You are very close';
        }
      }
    } else {
      message = 'you are far away from the right answer';
    }
  }
  if (score === 0) {
    message = 'you lost ! , press Again button to try again';
    document.querySelector('body').style.backgroundColor = '#580e0e';
  }
  mesg.textContent = message;
  score--;
  document.querySelector('.score').textContent = score;
});

again.addEventListener('click', function () {
  location.reload();
});

