'use strict';

// DOM - Document Object Model

// console.log(document.querySelector('.guess-message').textContent);
// document.querySelector('.guess-message').textContent = 'Правильно!';
// console.log(document.querySelector('.guess-message').textContent);
// document.querySelector('.question').textContent = 7;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.number-input').value = 13;

// const eventHandler = function(){
//    console.log(document.querySelector('.number-input').value);
// };

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Диапазон рандома между 1 и 20
// console.log(secretNumber);

let score = 20;
// console.log(score);
document.querySelector('.again').addEventListener('click', function(){
   // location.reload () // - Перезагрузить страницу
   document.querySelector('body').style.backgroundColor = '#505050';
   document.querySelector('.question').style.fontSize = '4ren';
   document.querySelector('.question').textContent = '???';
   document.querySelector('.question').style.padding = '2rem 8rem';
   document.querySelector('.number-input').value = '';
   secretNumber = (Math.trunc(Math.random() * 20) + 1);
   // console.log(secretNumber);
   score = 20;
   document.querySelector('.score').textContent = score;
   document.querySelector('.guess-message').textContent = 'Начните угадывать!';


});
document.querySelector('.check').addEventListener('click', function () {
const guessNumber = Number(document.querySelector('.number-input').value);
//   console.log(typeof guessNumber, guessNumber);

// Пустое окно
if (!guessNumber) {
    // (!guessNumber = 0), Но если написать 0, то код не будет выполнятся, т.к. 0 = false. Поэтому используем подобную конвертацию
   document.querySelector('.guess-message').textContent = 'Введите число!';
} 
// Победа
else if (guessNumber === secretNumber) {
   document.querySelector('.guess-message').textContent = 'Правильно!';
   document.querySelector('.question').textContent = secretNumber;
   
   document.querySelector('.highscore').textContent = score;
   document.querySelector('body').style.backgroundColor = '#70cc75';
   document.querySelector('.question').style.fontSize = '40px';
   document.querySelector('.question').style.padding = '3rem 20rem';
} 

// Больше
else if (guessNumber > secretNumber) {
      if (score > 1) {
      document.querySelector('.guess-message').textContent =
      'Число слишком большое!';
      score--;
      document.querySelector('.score').textContent = score;
   }
   else {
      document.querySelector('.guess-message').textContent =
         'Game Over!';
      document.querySelector('.score').textContent = 0;
   }
} 

// Меньше
else if (guessNumber < secretNumber) {
   if (score > 1) {
      document.querySelector('.guess-message').textContent =
      'Число слишком маленькое!';
      score--;
      document.querySelector('.score').textContent = score;
   }
   else {
      document.querySelector('.guess-message').textContent =
         'Game Over!';
      document.querySelector('.score').textContent = 0;
   }
}

});
