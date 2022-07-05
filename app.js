// console.log('Консоль лучший инструмент для дебагинга');
// console.log(77*342);
// var color;
// console.log(color);
// color = 'red';
// console.log(color);
//Просто текст java script
//!========================================================================================================================================================
// const name = 'Jack';
// console.log(name);
// const user = {
//    name: 'Many',
//    gender: 'woman',
//    age: 24
// }
// console.log(user);
// user.name = 'Katya'; 
// console.log(user); 
//!========================================================================================================================================================
// const colors = ['red', 'orage', 'green']
// console.log(colors);
// colors.push('blue'); // Добавление в конце массива
// console.log(colors);
//!========================================================================================================================================================
//? Примитивные типы данных
// String - строка. Любой тип данных, который содержится между ковычками
// Number - числовой тип данных. 
// Boolean - логический тип данных. Имеет два значения true или false
// Null - пустое значение.
// Undefined - неопределенное значение. 
// Symbols(ES6) - 
//? Ссылочные типы данных
// Array - массив
// Object Literal - Литераллы объектов
// Function - 
// Date - 
// Anything else -

//========================================================================================================================================================
// let x = 'something';
// console.log(x);
// x = 3;
// console.log(x);

//? Примитивные типы данных

//TODO/\ String

// const someText = 'Some text baby';
// console.log(typeof someText);
// console.log(someText);

//TODO/\ Number

// const someNumber = 11; // Без ковычек
// console.log(typeof someNumber);
// console.log(someNumber);

//TODO/\ Boolean

// const someBolean = false; // Без ковычек
// console.log(typeof someBolean);
// console.log(someBolean);

//TODO/\ Null

// const someNull = null; // Без ковычек - примитивный тип данных
// console.log(typeof someNull);
// console.log(someNull);

//TODO/\ Undefined

// let someUndefined;
// console.log(typeof SomeUndefined);
// console.log(someUndefined)

//TODO/\ Symbol

// const someSymbol = Symbol();
// console.log(typeof someSymbol);
// console.log(someSymbol);

//? Ссылочные типы данных

//TODO/\ Array

// const someArray = [1, 2, 3, 4];
// console.log(typeof someArray);
// console.log(someArray);

//TODO/\ Object Literal

// const someObjectLiteral = {
//    firstProperty: '12',
//    secondProperty: 'NewName'
// }
// console.log(typeof someObjectLiteral);
// console.log(someObjectLiteral);

//TODO/\ Function 

// const someFunction = new Function();
// console.log(typeof someFunction);
// console.log(someFunction);

//TODO/\ Date

// const someDate = new Date();
// console.log(typeof someDate);
// console.log(someDate);

//!========================================================================================================================================================
//? Строки

// Контаконация строк
let result;
const firstName = 'Jack';
const lastName = 'Brown';
const space = ' ';
const age = 22;
const greeting = 'Hello there,';
result = firstName + space + lastName;
result = greeting + space + 'My name is' + space + firstName + space + lastName + " I`m " + age + ' years old'
result = firstName.concat(space, lastName, space, age)
result = greeting.concat(space, 'My name is ', firstName, space, lastName, ' I\'m ', age, space, 'years old')

//Экранирование - escaping
result = 'I\'m 34 years old';
result = "I like \"Star Wars\" move"

// Свойства и методы (properties and methods)

result = 'Hello my dear frends'.length;
result = firstName.length;
result = greeting.concat(space, 'My name is ', firstName, space, lastName, ' I\'m ', age, space, 'years old')
result = result.toLocaleUpperCase(); // Верхний регистр
result = result.toLocaleLowerCase(); // Нижний регистр
// Индексы (index)
// Нумерация начинается с 0
result = firstName[1]

result = 'Hello'.indexOf('l'); // Индекс первого элемента с заданным значением
result = 'Hello lol'.lastIndexOf('l'); // Индекс последнего элемента с заданным значением
result = firstName.indexOf('a') // Обращение к индексу фамилии
result = 'Hello lols'.lastIndexOf('lo'); // Обращение к последнему индексу с заданным значением 
result = 'Hello lols'.indexOf('lo'); // Обращение к индексу первого элемента с заданным значением
result = firstName.indexOf('b'); // Обращение к индексу несуществующего символа, результат = -1
result = firstName.charAt(2);

console.log(result); // Вывод результата в консоль