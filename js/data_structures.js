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

// const japaneseRestaurant = {
//    restName: 'Banzai',
//    location: '108 Markham Woods Rd, Longwood, USA',
//    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
//    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
//    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
//    workingHours: {
//       wed: {
//          open: 10, 
//          close: 23,
//       },
//       frit: {
//          open: 10, 
//          close: 23,
//       },
//       sun: {
//          open: 12, 
//          close: 23,
//       }
//    },
//    orderFood: function(appetizersIndex, mainMenuIndex) {
//       return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
//    },
//    foodDelivery: function(obj) {
//       console.log(obj);
//    }
// };
 
// japaneseRestaurant.foodDelivery({
//    deliveryTime: '12',
//    adress: '18, Markham Woods Rd',
//    mainMenuIndex: 1,
//    appetizersIndex: 0,
// })
// const {workingHours: hours, restName, categories} = japaneseRestaurant;
// console.log(hours, restName, categories);

// // Default value (Дефолтные значения)
// const { menu = [], appetizers: starterMenu = []} = japaneseRestaurant;
// console.log(menu, starterMenu);  

// // Mutating variables (Мутации)

// let x = 3;
// let y = 5;
// const obj = {x: 11, y: 22, z: 33};

// ({x, y} = obj);
// console.log(x, y);
//========================================================================================================================================================

// Nested objects
// const {sun: {open: openHours, close: closeHours}} = hours;
// console.log(openHours, closeHours);

// Практическое преминение деструктуризация 


// const japaneseRestaurant = {
//    restName: 'Banzai',
//    location: '108 Markham Woods Rd, Longwood, USA',
//    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
//    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
//    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
//    workingHours: {
//       wed: {
//          open: 10, 
//          close: 23,
//       },
//       frit: {
//          open: 10, 
//          close: 23,
//       },
//       sun: {
//          open: 12, 
//          close: 23,
//       }
//    },
//    orderFood: function(appetizersIndex, mainMenuIndex) {
//       return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
//    },
//    foodDelivery: function(
//       {mainMenuIndex = 0,
//       appetizersIndex = 0,
//       adress, deliveryTime = '18:00',
//       }) {
//       console.log(`Ваш заказ уже в пути к вам! ${this.appetizers[appetizersIndex]} и ${this.mainMenu[mainMenuIndex]} по адресу "${adress}" к ${deliveryTime}`);
//    }
// };
 
// Деструктурирование данных внутри существующего объекта
// japaneseRestaurant.foodDelivery({
//    deliveryTime: '12:00',
//    adress: 'г. Минск, ул. Новая, д. 17, кв 28',
//    mainMenuIndex: 1,
//    appetizersIndex: 0,
// });

// japaneseRestaurant.foodDelivery({
//    adress: 'г. Минск, ул. Новая, д. 17, кв 28'
// })
//========================================================================================================================================================

// Оператор Spread

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
   },
   foodDelivery: function(
      {mainMenuIndex = 0,
      appetizersIndex = 0,
      adress, deliveryTime = '18:00',
      }) {
      console.log(`Ваш заказ уже в пути к вам! ${this.appetizers[appetizersIndex]} и ${this.mainMenu[mainMenuIndex]} по адресу "${adress}" к ${deliveryTime}`);
   },
   
   orderSushi: function(ing1, ing2, ing3){
      console.log('You have ordered sushi with ${ing1}, ${ing2},${ing3}');
   }
};

// Добавление вручную, старый подход.
// const arr = [1, 3, 5];
// const newArr = [7, 9, arr[0], arr[1], arr[2]]
// console.log(newArr);

// Новый подход при помощи оператора Spread (...)

// const newArrSpread = [7, 9, ...arr];
// console.log(newArrSpread);
// console.log(...newArrSpread); // Вывод с помощью оператора Spread

// const newMenu = [...japaneseRestaurant.mainMenu, 'Miso Salmon']; // Создание нового массива, не изменяя старый! 
// console.log(newMenu);

// Копирование массива

// Создание поверхностной копии (Array coping)
// const categoriesCopy = [...japaneseRestaurant.categories];
// console.log(categoriesCopy);

// Слияние массивов (Merge arrays)
// const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
// console.log(menu);

// Iterable - arrays, strings, maps, sets, OBJECTS AREN`T ITERABLE!!! 

// Spread operator with strings
// const greeting = 'Hey';
// const greetingLetters = [...greeting, '!'];
// console.log(greetingLetters);
// console.log(...greeting);
// Нельзя выводить в шаблонные строки
// console.log(`${...greeting}`); Нельзя так делать!!!!


// Практический пример использования оператора Spread

// const ingridients = [prompt(`Ingridient 1 for your sushi?`), prompt(`Ingridient 2 for your sushi?`), prompt(`Ingridient 1 for your sushi?`)];
// console.log(ingridients);

// Старый способ
// japaneseRestaurant.orderSushi(ingridients[0], ingridients[1], ingridients[2]);

// Оператор Spread
// japaneseRestaurant.orderSushi(...ingridients);

// Объекты и Spread

const newJapaneseRestaurant = {foundationDate: 2003, ...japaneseRestaurant, owner: 'Suzuki'};
console.log(newJapaneseRestaurant);

const japaneseRestaurantCopy = {...japaneseRestaurant};
japaneseRestaurantCopy.restName = 'Suzuki Sushi!';
console.log(japaneseRestaurantCopy.restName);
console.log(japaneseRestaurant.restName);
//========================================================================================================================================================
