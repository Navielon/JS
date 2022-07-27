'use strict';

// function getAge(birthYear) {
//   const age = 2022 - birthYear;
//   console.log(nameFirst);

//   function printAge() {
//     let info = `${age} ${nameFirst}`;
//     console.log(info);

//     if (age >= 18) {
//       // var isAdult = true; Можно, но не нужно
//       const nameFirst = 'Katya'; // Заменит переменную. Т.к. используется ближайший Scope. Т.к. они находятся в разнх облостях переменных
//       const adult = `${nameFirst} взрослый!`;
//       console.log(adult);
//       function sum(a, b) {
//         return a + b;
//       }

//       console.log(sum(1, 3));

//       info = 'New info'; // Переопределяем старую переменную. Присваеваем ей новое значение.
//     }
//     console.log(info);
//     // console.log(isAdult); Можно, но не нужно
//   }
//   // console.log(sum(1, 3)); Нельзя
//   // console.log(adult); Нельзя
//   // console.log(info); Нельзя
//   printAge();
//   // console.log(isAdult); Нельзя
//   return age;
// }

// const nameFirst = 'Ruslan';
// getAge(2000);
// // printAge(); Нельзя
//========================================================================================================================================================
// Variables
// console.log(firstName);
// console.log(job);
// console.log(birthYear);

// var firstName = 'Ruslan';
// let job = 'programmer';
// const birthYear = 1974;

// Functions
// console.log(declSum(1, 2));
// console.log(exprSum(1, 2));
// console.log(arrSum(1, 2));
// console.log(arrSums);
// function declSum (a, b) {
//    return a+b;
// };

// const exprSum = function (a, b) {
//    return a + b ;
// };

// const arrSum = (a, b) => a + b;
// var arrSums = (a, b) => a + b;
//========================================================================================================================================================

//TODO Ключевое слово THIS

// Ключевое слово / переменная this: Специальная переменная, которая создаётся для каждого контекста выполнения (каждой функции).
// Принимает значение (указывает на) "Владельца" функции, в которой используется ключевое слово this.

// this НЕ статично. Оно зависит от того, как вызывается функция, и его значение присваевается только тогда, когда функция действительно вызывается.

// Пример метода
// const user999 = {
//    name: 'Jack',
//    birthYear: 1995,
//    getAge: function(){
//       return 2022 - this.birthYear; // this обращается к имени объекта
//    }
// }
// console.log(user999.getAge()); // 27



//=======================================================================================================================
// ||       -                                    -//-                         this                        -//       || //
// ||       --------------------------------------//-------------------------------------------------------//       || //
// ||                       Метод                 //               Объект, вызывающий метод                //       || //
// ||       --------------------------------------//-------------------------------------------------------//       || //
// ||                 Вызов обычной функции       //                        undefined                      //       || //
// ||       --------------------------------------//-------------------------------------------------------//       || //
// ||        Стрелочные функции (не владеют THIS) //        this окружающей функции (лексический this)     //       || //
// ||       --------------------------------------//-------------------------------------------------------//       || //
// ||                    Event listener           // Элемент DOM, к которому прикреплён обработчик события //       || //
// ||       --------------------------------------//-------------------------------------------------------//       || //
// ||                 new, call, apply, bind      //                       Об это позже...                 //       || //
// ||       --------------------------------------//-------------------------------------------------------//       || //
//=======================================================================================================================


//!========================================================================================================================================================


//TODO this Практика

// console.log(this); // window

// const getAge = function(birthYear) {
//    console.log(2022 - birthYear);
//    console.log(this); // При вызове обычной функции в strict режиме this становится undefiend, т.к. функция не имеет владельца
// };

// getAge(2000);

// const getAgeArr = birthYear => {
//    console.log(2021 - birthYear);
//    console.log(this); // window. Т.к. стрелочные функции не используют this. 
// };
// getAgeArr(2003);

// const user999 = {
//    birthYear: 2000,
//    getAge: function() {
//       console.log(this); // Ключевое слово this вызвано внутри МЕТОДА.
//       console.log(2021 - this.birthYear); // Вызываем объект, в котором написан данный метод
//    },
// };

// user999.getAge();

// const user1000 = {
//    birthYear: 2003,
// };

// user1000.getAge = user999.getAge;
// user1000.getAge();
// console.log(user1000);

// const f = user999.getAg;
// f(); // Происходит вызов обычной функции. В результате получаем undefiend, т.к. это НЕ МЕТОД.
//!========================================================================================================================================================
//TODO Regular vs Arrow Functions
// const user999 = {
//    firstName: 'Ruslan',
//    birthYear: 2000,
//    getAge: function() {
//       console.log(this); // Ключевое слово this вызвано внутри МЕТОДА.
//       console.log(2022 - this.birthYear); // Вызываем объект, в котором написан данный метод
//    },
// // НЕ ИСПОЛЬЗУЙ СТРЕЛОЧНУЮ ФУНКЦИЮ В ОБЪЕКТЕ!
//    sayGreeting: () => {
//       console.log(this);
//       console.log(`Hello, I'm ${this.firstName}`);
//    },
// };

// user999.sayGreeting(); // undefined
// console.log(this.firstName); // undefined

// const user999 = {
//    firstName: 'Ruslan',
//    birthYear: 2000,
//    getAge: function() {
      // console.log(this); // Ключевое слово this вызвано внутри МЕТОДА.
      // console.log(2022 - this.birthYear); // Вызываем объект, в котором написан данный метод
      // const self = this;
      // const isAdult = function() {
      //    // console.log((2022 - this.birthYear) >= 18);  ERROR!!!
      //    console.log((2022 - self.birthYear) >= 18);
      // };
      // new approach after ES6 (НОВЫЙ СПОСОБ ES6)
      // const isAdult = () =>{
      //    console.log(this);
      //    console.log(2022 - this.birthYear >= 18);
   //    }
   //    isAdult();
   // },
// НЕ ИСПОЛЬЗУЙ СТРЕЛОЧНУЮ ФУНКЦИЮ В ОБЪЕКТЕ!
//    sayGreeting: () => {
//       console.log(this);
//       console.log(`Hello, I'm ${this.firstName}`);
//    },
// };

// user999.getAge()


// Arguments keyword

// const exprSum = function (a, b) {
//    console.log(arguments);
//    return a + b;
// };

// exprSum(1, 2);
// exprSum(1, 2, 3, 5, 643);

// Error
// var arrSum = (a, b) => {
//    console.log(arguments);
//    return a + b;
// };
// arrSum(7, 11, 23); 
//!========================================================================================================================================================

//TODO Примитивные VS ссылочные типы

// let a = 1;
// let b = a;
// a = 2;
// console.log(a);
// console.log(b);

// const x = {
//    foo: 'bar',
//    a: 1
// };

// const y = x;
// y.a =  2;

// console.log('Object: ', x);
// console.log('Object: ', y);
//!========================================================================================================================================================

// Primitives
// let lastName = 'Brown';
// let oldLastName = lastName;
// lastName = 'White';
// console.log(lastName, oldLastName);

// Objects
// const jane = {
//    firstName: 'Jane',
//    lastName: 'Brown',
//    age: 21,
// };

// const marriedJane = jane; // Мы копируем ссылку на объект! 
// marriedJane.lastName = 'White';
// console.log('Jane: ', jane);
// console.log('Married Jane: ', marriedJane);
// marriedJane = {}; // Нельзя. т.к. это Const

// Objects copying

// const sara = {
//    firstName: 'Sara',
//    lastName: 'Brown',
//    age: 21,
//    familyMembers: ['Jack', 'Bob', 'Greta'],
// };

// const saraCopy = Object.assign({}, sara); // КОПИРУЕТ ОБЪЕКТ И СОЗДАЁТ НОВЫЙ! НО РАБОТАЕТ ТОЛЬКО НА ПЕРВОМ УРОВНЕ
// console.log(saraCopy);
// saraCopy.lastName = 'White';
// saraCopy.familyMembers.push('Bill', 'Marta');

// console.log('Sara: ', sara);
// console.log('Married Sara: ', saraCopy);
//!========================================================================================================================================================
