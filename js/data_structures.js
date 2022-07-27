'use strict';

// Деструктуризация массивов
// const japaneseRestaurant = {
//    name: 'Banzai',
//    location: '108 Markham Woods Rd, Longwood, USA',
//    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
//    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
//    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
 
//    orderFood: function(appetizersIndex, mainMenuIndex) {
//       return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
//    } 

// };
 

//  const arr = [3, 5, 7];
//  const x1 = arr[0];
//  const x2 = arr[1];
//  const x3 = arr[2];

//  const [y1, y2, y3] = arr;
//  console.log(y1, y2, y3);

//  const [a, b, c] = arr;
//  console.log(a, b, c);

// const [category1, , category3] = japaneseRestaurant.categories;
// console.log(category1,category3);


// Обмен значениями (swaping variables)
// Старый способ
// let [main, , secondary] = japaneseRestaurant.categories;
// console.log(main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Новый способ
// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// Возвращаем два значения для функции
// const [appetizer, mainFood] = japaneseRestaurant.orderFood(2, 1);
// console.log(appetizer, mainFood);


//========================================================================================================================================================
// const nestedArr = [1, 2, [7, 9]];

// const [a, , b] = nestedArr;
// console.log(a, b);

// Деструктуризация внутри деструктуризации (Вложенная, nested destructuring)
// const [a, , [b, c]] = nestedArr;
// console.log(a, b, c);

//========================================================================================================================================================

// Дефолтные значения (default values)
// const unknownArr = [3, 5];
// const [a = 0, b = 0 , c = 0] = unknownArr; // Установка дефолтный значений на 0 для всех вызываемых элементов
// console.log(a, b, c);
//========================================================================================================================================================

//TODO Деструктуризация объектов (Destructuring objects)

const japaneseRestaurant = {
   restName: 'Banzai',
   location: '108 Markham Woods Rd, Longwood, USA',
   categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
   appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
   mainMenu: ['Sushi', 'Ramen', 'Tempura'],
   workingHours: {
      wed: {
         open: 10, 
         close: 23,
      },
      frit: {
         open: 10, 
         close: 23,
      },
      sun: {
         open: 12, 
         close: 23,
      }
   },
   orderFood: function(appetizersIndex, mainMenuIndex) {
      return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
   } 
};
 
const {workingHours: hours, restName, categories} = japaneseRestaurant;
console.log(hours, restName, categories);

// Default value (Дефолтные значения)
const { menu = [], appetizers: starterMenu = []} = japaneseRestaurant;
console.log(menu, starterMenu);  

// Mutating variables (Мутации)

let x = 3;
let y = 5;
const obj = {x: 11, y: 22, z: 33};

({x, y} = obj);
console.log(x, y);
//========================================================================================================================================================
