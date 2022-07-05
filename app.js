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
// let result;
// const firstName = 'Jack';
// const lastName = 'Brown';
// const space = ' ';
// const age = 22;
// const greeting = 'Hello there,';
// result = firstName + space + lastName;
// result = greeting + space + 'My name is' + space + firstName + space + lastName + " I`m " + age + ' years old'
// result = firstName.concat(space, lastName, space, age)
// result = greeting.concat(space, 'My name is ', firstName, space, lastName, ' I\'m ', age, space, 'years old')

//Экранирование - escaping
// result = 'I\'m 34 years old';
// result = "I like \"Star Wars\" move"

// Свойства и методы (properties and methods)
// result = 'Hello my dear frends'.length;
// result = firstName.length;
// result = greeting.concat(space, 'My name is ', firstName, space, lastName, ' I\'m ', age, space, 'years old')
// result = result.toUpperCase(); // Верхний регистр
// result = result.toLowerCase(); // Нижний регистр

// Индексы (index)
// Нумерация начинается с 0

// result = firstName[1] //Обращение к индексу данного значения
// result = 'Hello'.indexOf('l'); // Индекс первого элемента с заданным значением
// result = 'Hello lol'.lastIndexOf('l'); // Индекс последнего элемента с заданным значением
// result = firstName.indexOf('a') // Обращение к индексу фамилии
// result = 'Hello lols'.lastIndexOf('lo'); // Обращение к последнему индексу с заданным значением 
// result = 'Hello lols'.indexOf('lo'); // Обращение к индексу первого элемента с заданным значением
// result = firstName.indexOf('b'); // Обращение к индексу несуществующего символа, результат = -1
// result = firstName.charAt(2); // Метод обращения к элементу позиции
// const longString = 'Hi, I\`m long string. Really';
// result = longString.charAt(longString.length -1); // Метод обращения к последнему элементу позиции

// Подстрока (substring())
// result = greeting.substring(0,5) // Диапозон извлечения используя индекс элемента

// Слайс (slice()) похож на предыдущий (substring), можно обращаться со строками как и с массивами
// result = greeting.slice(0,5) // Диапозон извлечения используя индекс элемента
// result = greeting.slice(-6); // Извлекает диапозон начиная с последнего элемента

// Сплит (split()) разделяет строку на несколько элементов
// result = longString.split(' '); // Извлекает в виде массива
// Пример использования
// const colors = 'red,orange,green,blue,white,black';
// result = colors.split(','); // Получаем массив

// Заменить (replace()) заменяет одну строку на другую
// result = colors.replace('blue', 'Кошка'); // Заменяем значение на другое. Первым указывается значение, которое будет меняться, вторым то, на какое оно будет заменено.

// Включает (includes()) - возвращает true или false

// result = colors.includes('blue') // Проверяет на истинну выбранный элемент
// console.log(result); // Вывод результата в консоль
//!========================================================================================================================================================
//? Шаблонные строки
// const brand = 'Audi';
// const model = 'R8';
// const color = 'Red';
// const year = '2021';

// let carHtml;


// Старый подход (old approach. Before ES6)

// carHtml = '<h3>' + 'Car Description' + '</h3>' + 
// '<ul>' + '<li>Brand: ' + brand + '</li>' + 
// '<li>Model: ' + model + '</li>' + 
// '<li>Color: ' + color + '</li>' + 
// '<li>Year: ' + year + '</li>' +
// '</ul>';

// Новый подход (After ES6) (Шаблонный литералы или шаблонные строки)
// carHtml = `
//    <h3>Car Description</h3>
//    <ul>
//       <li>Brand: ${brand}</li>
//       <li>Model: ${model}</li>
//       <li>Color: ${color}</li>
//       <li>Year: ${year}</li>
//       <li>Year: ${2010+12}</li>
//       <li>Doors: ${getDoorsNumber()}</li>
//       <li>Tax: ${year < 2000 ? '20%' : '10%'} </li> 
//    </ul>
// `
// Использование тернарного оператора
// function getDoorsNumber() {
   // return 4;
// }
// document.body.innerHTML = carHtml; // Импорт в html
//!========================================================================================================================================================
//? Задание "Анкета"

// Метод prompt

// let favoriteColor;
// let yourName;
// let age;
// let gender;
// let boysname;
// let favoriteWork;
// let teaquestion;
// let question;

// favoriteColor = prompt('Какой твой любимый цвет? ');
// yourName = prompt('Как тебя зовут?');
// age = prompt('Сколько тебе лет?');
// gender = prompt('Какой у тебя пол? (М/Ж)');
// boysname = prompt('Как зовут твоего парня?');
// favoriteWork = prompt('Кем ты мечтаешь работать?');
// teaquestion = prompt('Ты любишь чай?');
// question = prompt('Когда? (Пойми сама о чем вопрос)');

// questionnaire = `
//    <h2>Результат: </h2>
//    <ul>
//       <li>Твой любимый цвет: ${favoriteColor}</li>
//       <li>Тебя зовут: ${yourName}</li>
//       <li>Твой возраст: ${age}</li>
//       <li>Твой пол: ${gender}</li>
//       <li>Твоего парня зовут: ${boysname}</li>
//       <li>Ты мечтаешь работать: ${favoriteWork} </li> 
//       <li>Любишь ли ты чай?: ${teaquestion} </li> 
//       <li>Ого...: ${question} </li> 
//    </ul>
// `
// document.body.innerHTML = questionnaire;
// console.log('Your favorite color is ' + favoriteColor);
//!========================================================================================================================================================
//? Операторы сравнения (Comparison Operators)

// const x = 7;
// const y = 7;
// let isXMoreThanY = x > y;
// let isXMoreThanY = x < y;
// let isXMoreThanY = x <= y;
// let isXMoreThanY = x => y;
// const x = true; // Boolean значения
// const y = true; // Boolean значения
// const x = 'text'; // Stroke значения
// const y = 'text'; // Stroke значения
// const x = '5'; // Stroke
// const y = 5; // Number
// let isXMoreThanY = x == y; // Не строгий оператор равенства
// const x = '5'; // Stroke
// const y = 5; // Number
// let isXMoreThanY = x === y; // Cтрогий оператор равенства
// const x = '5'; // Stroke
// const y = '5'; // Number
// let isXMoreThanY = x !== y; // Оператор неравенства
// console.log(isXMoreThanY);
// console.log(true == '1');
// console.log(false == '0');
// console.log(null == undefined);
// console.log(null === undefined);
// console.log(NaN === NaN);
// console.log(NaN == NaN);
//!========================================================================================================================================================
//? Приоритет операторов (Operator precedence)
// https://clck.ru/FgqFm
// const x = (2 + 10) / 2;
// const y = 10 - x > 10;
// console.log(x);
// console.log(y);

// let x, y;
// console.log(x, y);
// x = y = 10 + 5 - 3 * 4; // Оператор выравнивания читается с права на лево. Следовательно, (10+5 - 3*4) = 3. 3 = y, т.е. значение y стало 3. А после, читая справа на лево, значение x становится равным значению y. 
//Подробнее о приоритетах : https://clck.ru/FgqFm
// console.log(x, y);
//!========================================================================================================================================================
