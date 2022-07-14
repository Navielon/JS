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



//========================================================================================================================================================
// let secretNumber = Math.trunc(Math.random() * 20) + 1; // Диапазон рандома между 1 и 20
// console.log(secretNumber);
// let score = 20;
// let highscore = 0
// console.log(score);
// document.querySelector('.again').addEventListener('click', function(){
//    // location.reload () // - Перезагрузить страницу
//    document.querySelector('body').style.backgroundColor = '#505050';
//    document.querySelector('.question').style.fontSize = '4ren';
//    document.querySelector('.question').textContent = '???';
//    document.querySelector('.question').style.padding = '2rem 8rem';
//    document.querySelector('.number-input').value = '';
//    secretNumber = (Math.trunc(Math.random() * 20) + 1);
//    console.log(secretNumber);
//    score = 20;
//    document.querySelector('.score').textContent = score;
//    document.querySelector('.guess-message').textContent = 'Начните угадывать!';


// });
// document.querySelector('.check').addEventListener('click', function () {
// const guessNumber = Number(document.querySelector('.number-input').value);
// //   console.log(typeof guessNumber, guessNumber);

// // Пустое окно
// if (!guessNumber) {
//     // (!guessNumber = 0), Но если написать 0, то код не будет выполнятся, т.к. 0 = false. Поэтому используем подобную конвертацию
//    document.querySelector('.guess-message').textContent = 'Введите число!';
// } 
// // Победа
// else if (guessNumber === secretNumber) {
//    document.querySelector('.guess-message').textContent = 'Правильно!';
//    document.querySelector('.question').textContent = secretNumber;
   
//    document.querySelector('body').style.backgroundColor = '#70cc75';
//    document.querySelector('.question').style.fontSize = '40px';
//    document.querySelector('.question').style.padding = '3rem 20rem';
//    if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//    }
// } 

// // Исправление косяков
// else if (guessNumber !== secretNumber){


// }
// // Больше
// else if (guessNumber > secretNumber) {
//       if (score > 1) {
//       document.querySelector('.guess-message').textContent =
//       'Число слишком большое!';
//       score--;
//       document.querySelector('.score').textContent = score;
//    }
//    else {
//       document.querySelector('.guess-message').textContent =
//          'Game Over!';
//       document.querySelector('.score').textContent = 0;
//    }
// } 

// // Меньше
// else if (guessNumber < secretNumber) {
//    if (score > 1) {
//       document.querySelector('.guess-message').textContent =
//       'Число слишком маленькое!';
//       score--;
//       document.querySelector('.score').textContent = score;
//    }
//    else {
//       document.querySelector('.guess-message').textContent =
//          'Game Over!';
//       document.querySelector('.score').textContent = 0;
//    }
// }

// });
//========================================================================================================================================================
// Переменные
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Диапазон рандома между 1 и 20
console.log(secretNumber);
let score = 10;
let highscore = 0;

const headerQuestion = document.querySelector('.header__question');
const message = document.querySelector('.game-left__message');
const number = document.querySelector('.game-right__number');
const scoreDoc = document.querySelector('.score');


// Логика

// Полное обнуление (Перезагрузка страницы)
document.querySelector('.reset').addEventListener('click', function(){
   location.reload () // - Перезагрузить страницу
});

// Обнуление (Заново). Сохраняет лучший результат
document.querySelector('.again').addEventListener('click', function(){
   document.querySelector('body').style.backgroundColor = '#505050';
   headerQuestion.style.fontSize = '40px';
   headerQuestion.textContent = '???';
   headerQuestion.style.padding = '20px 80px';
   number.value = '';
   secretNumber = (Math.trunc(Math.random() * 20) + 1);
   console.log(secretNumber);
   score = 10;
   scoreDoc.textContent = score;
   message.textContent = 'Начните угадывать!';
});

// Если поле ввода пустое
document.querySelector('.check').addEventListener('click', function () {
const guessNumber = Number(number.value);
   if (!guessNumber) {
      message.textContent = 'Введите число!';
   }

// Победа
   else if (guessNumber === secretNumber) {
      message.textContent = 'Правильно!';
      headerQuestion.textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#70cc75';
      headerQuestion.style.fontSize = '40px';
      headerQuestion.style.padding = '3rem 20rem';
      if (score > highscore) {
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
      }
   } 
   // Число слишком большое, маленькое, проигрыш
   else if (guessNumber !== secretNumber){
      if (score > 1) {
         message.textContent = guessNumber > secretNumber ? 'Число слишком большое!' : 'Число слишком маленькое!';
         score--;
         scoreDoc.textContent = score;
      }
      else {
         document.querySelector('body').style.backgroundColor = '#000';
         message.textContent = 'Game Over!';
         scoreDoc.textContent = 0;
      }
   }

});

