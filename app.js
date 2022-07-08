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
//? Сокращённая форма записи операторов (Operator contraction)

// let x = 5; // Значение равно 5.
// x = x + 5; // Значение 5 используя приоритет сначала выполняется значение вычисления. Следовательно 5+5=10. А затем помещаем результат в переменную x. Поэтому x = 10;

// let x = 5; // Значение равно 5
// let y = 3; // Значение равно 3
// x += 9; // Происходит тот же приоритет вычисления. Т.е. 5+5 = 10. Далее заменю значение "5" на 9, в результате получим "14" т.к. произошло вычисление. x + новое значение = x. Т.е. 5+9=14. Идет перезапись итогового результата
// Далее более сложный пример
// Итоговый результат = 8. Т.к. операции выполняются попорядку. Т.е.:    
// x += 9; // 5 + 9 = 14.
// x -= 3; // 14-3 = 11.
// x +=5; // 11+5 = 16.
// x /=2 // 16/2 = 8.
// x ++; // - Увеличение (происходит увеличение на 1)
// x --;// - Уменьшение (происходит уменьшение на 1) (декриминдация)

// x ++ // - постаксная операция
// ++x // - префиксная операция

// y = ++x; // - префиксная форма записи. Сначала произошло увеличение на 1, а затем произошло приравнивание. Т.е. 5+1=6. Затем значение "3" "приправнялось" к значение 6.
// y = x++; // постаксная форма записи. Сначала произошло приравнивание, а затем увеличение на 1. Т.е. y = x Значение "3" перезаписалось на значение "5", что и вывелось в результат, а затем 5+1=6. И x таким образом стал = 6
// Аналог с вычитанием:
// y = --x;  // т.е. сперва произошло вычитание, а затем приравнивание
// y = x--; // т.е. сперва произошло приравнивание, а затем вычитание.
// Если они активны одновременно:
// y = --x; // Сперва произошло вычитание. Значение стало равным "4".
// y = x++; // Предыдущие значение x = 4. К данному значению применяется сложение (5+1) и присваевается данное значение первой переменной, т.к. сперва мы выводим x, а только потом y.
// console.log(x);
// console.log(y);
//!========================================================================================================================================================
//? Задание Лишний вес
// let a; // weight
// let b; // height
// a = prompt('Введите ваш рост в метрах');
// b = prompt('Введите ваш вес');
// let result;
// result = b / (a*2);
// let overWeight;
// overWeight = result >= 24.99;
// console.log(result);
// console.log(overWeight);
// alert('У тебя есть лишний вес? ' + overWeight);
// Выполнено.
//!========================================================================================================================================================
//?  If Else Выражения (Statement)

// Можно ли смотреть видео 18+.

// const age = 16;
// if(age >= 18){
//    console.log('You can watch this video')
// } else {
   // console.log('You can`t not watch this video')
//    const yearsLeft = 18 - age;
//    console.log(`You are too young. You can watch this video after : ${yearsLeft} years later`)
// }

//*

// Взрослый ли ты человек.

// const birthYear = 2000;
// const yearNow = 2022;
// const age = yearNow - birthYear;
// let answer;
// if (age >= 16) {
//    answer = 'Да.';
// }
// else {
//    answer = 'Нет.';
// }
// console.log(`Взрослый ли я? - ${answer}`);

//*

// Светофор
// Множественные условия.
// const color = 'Зелёный';
// if (color === 'Зелёный') {
//    console.log('Вперёд!');
// } 
// else if(color === 'Жёлтый') {
//    console.log('Приготовиться!');
// }
// else if(color === 'Красный') {
//    console.log('Стоп!');
// }
// else {
//    console.log('Неккоректный цвет.');
// };
//!========================================================================================================================================================
//? Задание Лишний вес используя If и Else.


// let a; // weight
// let b; // height
// a = prompt('Введите ваш рост в см');
// b = prompt('Введите ваш вес');
// let result;
// result = b / ((a/100)*2);
// if (result <= 15.9){
//    inform = `
//    <h2>Результат: </h2>
//    <h3>У тебя выраженный дифицит массы тела</h3>
//    <h3>Твой индекс BMI : ${result}</h3>
//    <h3>BMI (Индекс массы тела) при твоём диапазоне роста и веса - 16 и менее</h3>
// `
// document.body.innerHTML = inform;
// }

// else if (result <= 18.5){
//    inform = `
//    <h2>Результат: </h2>
//    <h3>У тебя недостаточная массы тела</h3>
//    <h3>Твой индекс BMI : ${result}</h3>
//    <h3>BMI (Индекс массы тела) при твоём диапазоне роста и веса - 16 - 18,5</h3>
// `
// document.body.innerHTML = inform;
// }

// else if (result <= 24.9)
// {
//    inform = `
//    <h2>Результат: </h2>
//    <h3>У тебя нормальный вес</h3>
//    <h3>Твой индекс BMI : ${result}</h3>
//    <h3>BMI (Индекс массы тела) при твоём диапазоне роста и веса - 18,5 - 24,99</h3>
// `
// document.body.innerHTML = inform;
// }

// else if (result <= 29.9){
//    inform = `
//    <h2>Результат: </h2>
//    <h3>Избыточная масса тела (предожирение)</h3>
//    <h3>Твой индекс BMI : ${result}</h3>
//    <h3>BMI (Индекс массы тела) при твоём диапазоне роста и веса - 24,99 - 30</h3>
// `
// document.body.innerHTML = inform;
// }

// else if (result <= 34.9)
// {
//    inform = `
//    <h2>Результат: </h2>
//    <h3>У тебя ожирение первой степени</h3>
//    <h3>Твой индекс BMI : ${result}</h3>
//    <h3>BMI (Индекс массы тела) при твоём диапазоне роста и веса - 30 - 35</h3>

// `
// document.body.innerHTML = inform;
// }

// else if (result <= 39.9)
// {
//    inform = `
//    <h2>Результат: </h2>
//    <h3>У тебя ожирение второй степени</h3>
//    <h3>Твой индекс BMI : ${result}</h3>
//    <h3>BMI (Индекс массы тела) при твоём диапазоне роста и веса - 35 - 40</h3>

// `
// document.body.innerHTML = inform;

// }
// else if (result >= 40)
// {
//    inform = `
//    <h2>Результат: </h2>
//    <h3>У тебя ожирение третьей степени (Морбидное) </h3>
//    <h3>Твой индекс BMI : ${result}</h3>
//    <h3>BMI (Индекс массы тела) при твоём диапазоне роста и веса - 40 и более</h3>
// `
// document.body.innerHTML = inform;
// }
// Выполнено.
//!========================================================================================================================================================
//? Правдивые и ложные значения (Truthy & Falsy values)
//Falsy или лживые значения, это значения, которые не равны False. Но  они становятся False когда мы пытаемся их сконвертировать в Boolean.
//Falsy в js всего 5 значений: 0, '', undefined, null, NaN. Они изначально не равные False. Но ставновятся равны false когда конвертируются в boolean
// console.log(Boolean(0)); // Значение False
// console.log(Boolean('')); // Значение False
// console.log(Boolean(undefined)); // Значение False
// console.log(Boolean(null)); // Значение False
// console.log(Boolean(NaN)); // Значение False
// console.log(Boolean(22)); // Значение True
// console.log(Boolean('22')); // Значение True
// console.log(Boolean([])); // Значение True
// console.log(Boolean({})); // Значение True
// console.log(Boolean(3.5)); // Значение True

// const age = 1;

// if (age) {
//    console.log('Человек был рожден')
// }
// else {
//    console.log('Человек не был рожден')
// }

// //*

// let weight;

// weight = 0;

// if (weight) {
//    console.log('Вес определён');
// }
// else {
//    console.log('Вес не определён');
// }
//========================================================================================================================================================
//? Boolean логика (Boolean  logic)
// Основные операторы Boolean логики: AND, OR, NOT

// AND (&&)

// console.log(true && true); // True (Истина и истина  true and true)
// console.log(true && false); // False (Истина и ложь, true and false)
// console.log(false && false); // False (Ложь или ложь, false and false)

// OR (||)

// console.log(true || true); // True (Истина или истина  true or true)
// console.log(true || false); // True (Истина или ложь, true or false)
// console.log(false || false); // False (Ложь или ложь, false or false)

// NOT (!)

// console.log(!true); // False (Не истина, not true)
// console.log(!false); // True (Не ложь, not false)

//* 

// Примеры

// Пример 1. (AND, И, &&) Продажа алкоголя. Для покупки человек должен быть совершеннолетний и иметь деньги
// const hasMoney = true; // Есть деньги
// const isAdult = true; // Взрослый

// if (hasMoney && isAdult) {
//    console.log('Вы можете купить алкогольный напиток');
// }
// else {
//    console.log('Вы не можете купить алкогольный напиток');
// }

// Пример 2. (OR, ИЛИ, ||) Покупка сладостей с родителями. Для этого нужно иметь деньги самому, или чтобы были взрослые люди с деньгами.

// const hasMoney = true; // Есть деньги
// const isWidthParent = true; // Взрослые люди с деньгами (родители)

// if (hasMoney || isWidthParent) {
//    console.log('Вы можете купить эти вкусные вафли');
// }
// else {
//    console.log('Вы не можете купить эти вафли');
// }

// Пример 3. (NOT, НЕ, !) Продажа алкоголя. Для покупки человек должен быть совершеннолетний и иметь деньги

// const hasMoney = true; // Имеет деньги
// const isAdult = true; // Взрослый
// const isCompletelyDrunk = true; // Человек пьяный

// console.log(!hasMoney);

// if (hasMoney && isAdult && !isCompletelyDrunk) {
//    console.log('Вы можете купить алкогольный напиток');
// }
// else {
//    console.log('Вы не можете купить алкогольный напиток');
// }
//!========================================================================================================================================================
//? Оператор переключения (Switch Statement)

// Задание со светофором (прошлое)
// const color = 'green';
// if (color ==='green'){
//    console.log('Go!');
// }
// else if (color === 'yellow') {
//    console.log('Get ready!');
// }
// else if (color === 'red'){
//    console.log('Stop!');
// }
// else {
//    console.log('Incorrect color!');
// }

// Пример с использованием переключателя (switch)
// const color = 'green';
// switch(color){
//    case 'green':
//       console.log('Go!');
//       break; // Ключевой элемент окончания case
//    case 'yellow':
//       console.log('Get ready!');
//       break;
//    case 'red':
//       console.log('Stop!');
//       break;
//    default:
//       console.log('Incorrect color!');
// }

// Пример со днями недели

// const weekday = 'понедельник';

// switch (weekday) {
//    case 'понедельник':
//       console.log("Сохраняй спокойствие " + "и притворись, что сегодня не понедельник.");
//       break;
//    case 'вторник':
//       console.log("Вторник - " + "всего лишь уродливая сестра понедельника. ");
//       break;
//    case 'среда':
//       console.log("Ничто так не портит твою пятницу, " + "как осознание того, " + "что сегодня только среда!");
//       break;
//    case 'четверг':
//       console.log("Сегодня пятница! " + "Извини... Просто тренируюсь " + "на завтра :)");
//       break;
//    case 'пятница':
//       console.log("Оставайся сильным! " + "Скоро выходные!");
//       break;
//    case 'суббота':
//    case 'воскресенье':
//       console.log("Почему суббота и воскресенье " + "- самые сильные дни? " + "Потому что все остальные - " + "это будние дни!");
//       break;
//    default:
//       console.log("Я не знаю, " + "о таком дне...");
// }
//!========================================================================================================================================================
//? Заявления и Выражения (Statements & Expressions)
// Выражения (Expressions) (Если приводить аналог нашего языка, то expressions как слова в предложении)

// 2 + 2 // expression 
// 37 // expression 
// true && false // expression

// Заявления (Statements)  (Если приводить аналог нашего языка, то statements как предложения)

// const number = 10; // expression

// if (number > 0) {
//    const text = 'The number is positive'; // statement
// }
//!========================================================================================================================================================
//? Тернарный оператор (Statements AndExpressions)

// const money = 100; // Сумма на счёте
// const cost = 50; // Цена товара

// money >= cost ? console.log('Ты можешь купить этот предмет') : console.log('Ты не можешь купить этот предмет'); // Тернарный оператор. 
// Имеет три части. Первая - "money >= cost ?" вторая "console.log('Ты можешь купить этот предмет') : " третья "console.log('Ты не можешь купить этот предмет');"
// Тернарный оператор всегда производит значение. 

// Более правильное выражение:
// const canYouBuyIt = money >= cost ? 'Ты можешь купить этот предмет' : 'Ты не можешь купить этот предмет'; // Тернарный оператор, который основывается на условиях.
// console.log(canYouBuyIt)

// If & else отличие от тернарного оператора.
// Можно использовать тольок let.
// let canYouBuyIt1;
// if(money >= cost){
//    canYouBuyIt1 = 'Ты можешь купить этот предмет';
// }
// else {
//    canYouBuyIt1 = 'Ты не можешь купить этот предмет';
// }
// console.log(canYouBuyIt1)

// console.log(`Ты${money >= cost ? '': ' не'} можешь купить этот предмет`); //Тернарный оператор
//!========================================================================================================================================================
//? Тернарный оператор. Задание

// const age = 18;

// let result;

// result = prompt('Введите ваш возраст');

// const saleAlcohol = result >= age ?  'Вы можете купить алкоголь' : 'Вы не можете купить алкоголь';
// alert (saleAlcohol);
// console.log(saleAlcohol);
// alert(`Вы ${result >= age ? '' : 'не'} можете купить алкоголь`);
// console.log(`Вы ${result >= age ? '' : 'не'} можете купить алкоголь`);
// Выполнено. 
//!========================================================================================================================================================
//? Версии JavaScript
//ES5 - прошлая версия
//ES6 - Крупнейшее обновление ECMAScript
//Старые фичи никогда не удаляются. Т.е. сайты, которые используют ES1 не сломаются.
//В старых версиях ES есть огромное количество багов. Поэтому стоит использовать современный  ECMAScript
//Чтобы веб приложение поддерживалось и в старых браузерах, необходимо использовать трансполирование и полфиллинг кода. (Обратное преобразование в ES5 для старых браузеров)
//ES2015-2021 хорошо поддерживаются во всех современных браузерах.
//!========================================================================================================================================================
//? Строгий режим (Strick Mode) режим в js. Помогает избегать багов в js
// 'use strict'; // Активация строгого режима. Должен быть перед всем кодом.

// let hasCertificate = false;
// const passExam = true;

// if(passExam) hasCertificate = true;
// if(hasCertificate) console.log('Wow');

// const interface = 'Video'; // Зарезервивано JS
// const package = 'My Package'; // Зарезервивано JS
//!========================================================================================================================================================
//? Функии (functions)
// Функция одна из основных концепкий JS. Функция - кусок кода, которую можно использовать неоднократно. 
// 'use strict';
// TODO Функции деклораций
// function printText(){
//    console.log('Hello to everyone!');
// }

// printText(); // Вызывает функцию по её названию.

// function colorizer(item, color, colorCode) {
   // console.log(item, color);
//    const colorizedItem = `The ${item} is ${color} the color is ${colorCode}.` // Обращаемся к элементам функции узнавая их значения.
   // console.log(colorizedItem);
//    return colorizedItem;
// }
// colorizer('desk', 'red', '99'); // Устанавливаем значение переменных
// const messageFromColorizer = colorizer('desk', 'red', '99'); // При вызове функции передаём параметрам нужные значения
// console.log(`We have the following message: ${messageFromColorizer}`);

// const messageFromColorizer2 = colorizer('hand', 'green', '10');
// console.log(`We have the following message: ${messageFromColorizer2}`);


// function printText(){
//    console.log('Hello to everyone!');
// }

// printText(); // Вызывает функцию по её названию.
// printText();
// printText();
// Number('25') // Встроенная функция
// const number = Number ('25'); // Числовая функция
// console.log(number); 
//!========================================================================================================================================================
//? 35. Функции. Деклорации vs Экспрешн (Declarations vs Expressions)

//TODO Функция деклорации
// function getAge (birthYear, yearNow) {
   // Первый способ.
   // const age = yearNow - birthYear; // Сперва высчитываем возраст.
   // return age; // А после возвращаем значение возраста
   // Второй
   // return yearNow - birthYear;
// }
// const myAge = getAge(2000, 2022);
// console.log(myAge);
// function getAge1 (birthYear, yearNow) {
   // Первый способ.
   // const age = yearNow - birthYear; // Сперва высчитываем возраст.
   // return age; // А после возвращаем значение возраста
   // Второй
   // return yearNow - birthYear;
// }
// const myAge = getAge1(2000, 2022);
// console.log(myAge);

//TODO Функция экспрешн

// const getAge2 = function(birthYear, yearNow) // Присваеваем функцию без имени > переменной. (Функция является анонимной)
// {
   // return yearNow - birthYear;
// }
// const myAge2 = getAge2(2003, 2022);
// console.log(myAge2);
// Разница между деклорацией и экспрешеном в том, что функцию деклорации можно вызвать до того, как она была определена. (Строкой выше самой функции). А экспрешн нет. 
//!========================================================================================================================================================
//? Стрелочные функции (arrow functions)

// const getAge2 = function(birthYear, yearNow) 
// {
   // return yearNow - birthYear;
// }
// const myAge2 = getAge2(2003, 2022);
// console.log(myAge2);

// const getAge3 = (birthYear, yearNow) => yearNow - birthYear; // Стрелочная функция

// const myAge3 = getAge3(2003, 2022);
// console.log(myAge3);


// Более сложная стрелочная функция. Похожа на деклорацию.
// const canBuyAlcohol = (birthYear, yearNow) => {
//    const age = yearNow - birthYear;
//    const isPersonOlderThan21 = age >= 21 ? true : false;
//    return isPersonOlderThan21;
// }
// Мы можем опустить return (возврат) только в том случае, если у нас однострочная функция

// console.log(canBuyAlcohol(2000, 2022));
//!========================================================================================================================================================
//? Вызов функции внутри других функций

// function colorMixer(color1, color2){
   // const newColor = `${color1} + ${color2}`
   // return newColor;
// }

// function colorizer(item, color1, color2) {
   // console.log(item, color);
   // const color = colorMixer(color1, color2) // Сперва идет вычисление. ('red' + 'orange' или 'white' + 'black') а после оно выносится в результат.
   // const colorizedItem = `The ${item} is ${color} .` // Обращаемся к элементам функции узнавая их значения. Выводится после вычислений функций
   // const colorizedItem = `Вопрос. ${item} (сложение) ${color} .` 
   // console.log(colorizedItem);
   // return colorizedItem;
// }

// const colorizedCar = colorizer('car', 'red', 'orange'); // Вызывается функцияя с тремя аргументами (Машина, Красный, Оранжевый). Эти аргументы ЗАМЕНЯЮТ параметры ФУНКЦИИ colorizer.
// Т.е. item = 'car'; color1 = 'red'; color2 = 'orange';
// console.log(colorizedCar);
// Что происходит далее. В функции colorMixer вызывается color1, который на данный момент равен значению константы.
// Т.е. color1 в функции ColorMixer = 'red'. А color2 в свою очередь равен 'orange'.
// После этого данные передаём в функцию newColor.

// console.log(colorizer('house', 'white', 'black'));
// console.log(colorizer('решите пример', '2', '3956'));
//!========================================================================================================================================================
//? Функции. Задание.

// Задача отдела продаж.
// Есть два отдела продаж. Отдел 1 (Dept 1), и Отдел 2 (Dept 2)
// Нужно оценить квартальные продажи. Для этого нужно рассчитать средние продажи за месяца в квартале для каждого из отделов.
// 1. Создать стрелочную функцию getAverage для расчёта среднего объёма продаж за месяца в квартале. 
// 2. Используя функцию getAverage вычисли среднее значение для КАЖДОГО ОТДЕЛА.
// 3. Создать функцию printBonus которая принимает средние значения КАЖДОГО отдела. 
// 4. Используя следующие пораметры: printBonus(dept1AverSales, dept2AverSales) If (если) продажи одго отделе хотя-бы на 30% выше, чем продажи другого отдела, то -
// 5. Функция должна вычислить бонус для победителя в процентах этой разницы и вывести результат в консоль.
// 6. При увеличении продаж на 35% функция должна выводить в консоль следующие значения:
// 7. "Dept 1 will get a bonus of 35%" - Отдел 1 получит бонус в размере 35%.
// 8. "Используйте функцию с двумя приведенными ниже наборами данных" 
// If a > b
// c = a - b
// p = c / b * 100

// Создание стрелочной функции высчитывающей среднее значение.
// const getAverage = (a, b, c) => (a + b + c) / 3; // Значения будут подставлены от каждого отдела. Идёт сложение сумм за каждый месяц и деление на количество месяцов. Тем самым высчитывается среднее значение


// Первый квартал.
// const dept1AverQuarterFirst = getAverage(35467, 29842, 38501); // Значения для высчитывания средней прибыли за квартал для первого отдела. Используется суммарная прибыль за каждый месяц в квартале.
// const dept2AverQuarterFirst = getAverage(70533, 50121, 33899);  // Значения для высчитывания средней прибыли за квартал для второго отдела. Используется суммарная прибыль за каждый месяц в квартале.
// Проверка
// console.log(dept1AverQuarterFirst, dept2AverQuarterFirst);

// Второй квартал. 
// const dept1AverQuarterSecond = getAverage(50301, 21984, 19207); // Значения для высчитывания средней прибыли за квартал для первого отдела. Используется суммарная прибыль за каждый месяц в квартале.
// const dept2AverQuarterSecond = getAverage(72381, 41562, 29465);  // Значения для высчитывания средней прибыли за квартал для второго отдела. Используется суммарная прибыль за каждый месяц в квартале.
// Проверка
// console.log(dept1AverQuarterSecond, dept2AverQuarterSecond);

// Функция printBonus
// const printBonus = function (dept1AverQuarter, dept2AverQuarter){ // Создаём функцию, которая обращаемся к средней прибыли первого и второго отдела.
   // if (dept1AverQuarter > dept2AverQuarter){ // Если средний уровень дохода за продажи первого отдела БОЛЬШЕ, чем доход второго отдела, то :
      // const diffSumm = dept1AverQuarter - dept2AverQuarter; // Высчитывается разница. Она высчитывается следующим образом: Средняя прибыль первого отдела минус средняя прибыль второго отдела. Разница будет равна результату вычисления.
      // const percent = diffSumm / dept2AverQuarter * 100; // Высчитывается процент. Разница делится на средний доход второго отдела и умножается на 100 для получения процента.
      // if (percent >= 30){ // Если итоговый процент дохода больше 30%, то:
//          console.log(`Отдел 1 получит бонус в размере ${percent}% в этом квартале`); // В консоль выведится информация о проценте бонуса, основаного на проценте
//       } 
//       else { // Если же сумма ниже 30%
//          console.log(`Никакого бонуса в этом квартале первый отдел не получит.`); // То в консоль выведится информация о том, что первый отдел ничего не получит.
//       }
//    }
//    else if (dept2AverQuarter > dept1AverQuarter){ // Если же получается так, что второй отдел по среднему доходу превышает первый отдел, то:
//       const diffSumm = dept2AverQuarter - dept1AverQuarter;  // Высчитывается разница. Она высчитывается следующим образом: Средняя прибыль первого отдела минус средняя прибыль второго отдела. Разница будет равна результату вычисления.
//       const percent = diffSumm / dept1AverQuarter * 100; // Высчитывается процент. Разница делится на средний доход второго отдела и умножается на 100 для получения процента.
//       if (percent >= 30) { // Если итоговый процент дохода больше 30%, то:
//          console.log(`Отдел 2 получит бонус в размере ${percent}% в этом квартале`) // В консоль выведится информация о проценте бонуса, основаного на проценте
//       }
//       else { // Если же сумма ниже 30%
//          console.log(`Никакого бонуса в этом квартале второй отдел не получит.`);  // То в консоль выведится информация о том, что первый отдел ничего не получит.
//       }
//    }
//    else { // Если же у обоих отделов процент ниже или равен 30%, то: 
//       console.log(`Никаких бонусов в этом квартале для всех отделов`); // В консоль выведится информация о том, что никакой отдел не получит надбавки.
//    }
// }
// const bonus1 = printBonus(dept1AverQuarterFirst, dept2AverQuarterFirst);
// const bonus2 = printBonus(dept1AverQuarterSecond, dept2AverQuarterSecond);
// printBonus(dept1AverQuarterFirst, dept2AverQuarterFirst); // Вызов функции с результатом за первый квартал.

//========================================================================================================================================================

// Свои попытки "потыкать"
// printBonus(dept1AverSales2, dept2AverSales2);

// const weeklyProfit1 = [130, 200, 80, 142, 391, 95, 33]; // Прибыль за первую неделю месяца.
// const weeklyProfit2 = [230, 110, 94, 542, 124, 285, 99]; // Прибыль за вторую неделю месяца.
// const weeklyProfit3 = [317, 572, 439, 371, 764, 432, 876]; // Прибыль за третью неделю месяца.
// const weeklyProfit4 = [320, 210, 850, 122, 341, 935, 323]; // Прибыль за четвертую неделю месяца.
// const weeklyProfit5 = [125, 343, 638]; // Прибыль за пятую неделю месяца.

// const summ1 = weeklyProfit1.map(i=>x+=i, x=0).reverse()[0] // Суммарная недельная прибыль за первую неделю месяца.
// const summ2 = weeklyProfit2.map(i=>x+=i, x=0).reverse()[0] // Суммарная недельная прибыль за вторую неделю месяца.
// const summ3 = weeklyProfit3.map(i=>x+=i, x=0).reverse()[0] // Суммарная недельная прибыль за третью неделю месяца.
// const summ4 = weeklyProfit4.map(i=>x+=i, x=0).reverse()[0] // Суммарная недельная прибыль за четвертую неделю месяца.
// const summ5 = weeklyProfit5.map(i=>x+=i, x=0).reverse()[0] // Суммарная недельная прибыль за пятую неделю месяца.
// console.log(summ1, summ2, summ3, summ4, summ5);
// const averageWeeklyProfit1 = summ1 / weeklyProfit1.length; // Средняя недельная прибыль за в первую неделю месяца.
// const averageWeeklyProfit2 = summ2 / weeklyProfit2.length; // Средняя недельная прибыль за во вторую неделю месяца.
// const averageWeeklyProfit3 = summ3 / weeklyProfit3.length; // Средняя недельная прибыль за в третью неделю месяца.
// const averageWeeklyProfit4 = summ4 / weeklyProfit4.length; // Средняя недельная прибыль за в четвертую неделю месяца.
// const averageWeeklyProfit5 = summ5 / weeklyProfit5.length; // Средняя недельная прибыль за в пятую неделю месяца.

// averageMonthlyProfit = averageWeeklyProfit1 + averageWeeklyProfit2 + averageWeeklyProfit3 + averageWeeklyProfit4; // Суммарная средняя месячная прибыль
// console.log(averageMonthlyProfit)
// Суммарная месячная прибыль рассчитана неккоректно. Правильным вариантом будет посчитать сумму всей дней в месяце и разделить на количество дней.
// Попробовать это сделать можно было следующим образом..
// const summMonth = weeklyProfit1.length + weeklyProfit2.length + weeklyProfit3.length + weeklyProfit4.length + weeklyProfit5.length;
// const summ = weeklyProfit1.map(i=>x+=i, x=0).reverse()[0] + weeklyProfit2.map(i=>x+=i, x=0).reverse()[0] + weeklyProfit3.map(i=>x+=i, x=0).reverse()[0] + weeklyProfit5.map(i=>x+=i, x=0).reverse()[0] + weeklyProfit1.map(i=>x+=i, x=0).reverse()[0]
// const monthAverSumm = summ / summMonth;
// console.log(`Количество дней в месяце = ${summMonth}`);
// console.log(`Суммарный доход за месяц = ${summ} $`);
// console.log(`Средний ежедневный доход в течении месяца = ${monthAverSumm} $`);

//!========================================================================================================================================================
//? Массивы. (Arrays)

// Цвета радуги. 
// Как обычно выглядят элементы
// const color1 = 'red';
// const color2 = 'orange';
// const color3 = 'yellow';
// const color4 = 'green';
// const color5 = 'blue';
// const color6 = 'indigo';
// const color7 = 'violet';

// Массив

// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// console.log(rainbowColors[3]); // Вызов 4 элемента в консоль. Индекс у элементов начинается с 0.

// Пример использования данных массива

// console.log('The sky is ' + rainbowColors[4]); // Получаем результат в консоле 'Небеса голубые'

// Либо можно просто вывести весь массив

// console.log(rainbowColors);

// Пример замены элемента в массиве

// rainbowColors[5] = 'dark blue'; // В результате 'indigo' был заменён на 'dark blue'. При чем это произошло лишь после повторного вызова массива. 
// rainbowColors[8] = 'indigo'; // Добавили 'indigo' на 8 индекс. Т.е. на 9 место. Следовательно в консоле будет между 7 и 9 "empty".
// rainbowColors[rainbowColors.length] = 'indigo'; // Способ добавления в конце массива. В результате 'indigo' был добавлен ещё раз, но уже в конце массива. 
// console.log(rainbowColors); 

// Пример создания пустого массива
// const stringNumbers = []; // Можно создавать и пустой массив, который в будущем будет заполнен

// Пример заполнения пустого массива
// stringNumbers[0] = 'one';
// stringNumbers[1] = 'two';
// stringNumbers[3] = 'three';

// new Array
// const stringNumbers = new Array('one', 'two', 'three'); // Способ создания массива с помощью функции "new Array"
// console.log(stringNumbers);


// Пример создания числового массива
// const numbers = [34, 5, 32, 67, 33];
// console.log(numbers);

// в JS можно в массиве использовать разные виды данных
// const anyItems = [4, true, new Date(), 'something']; // Числовой, логический, дата, строка.
// console.log(anyItems);
//!========================================================================================================================================================
//? Методы массивов (Array methods)

// const numbers = [23, 54, 4, 31, 11]; // Создаём массив

// let result; // Переменная которая будет выводить данные в консоль

// 1 метод LENGTH

// result = numbers.length; // Считает длинну массива

// 2 метод isArray()

// result = Array.isArray(numbers); // Проверяет, является переменная массивом

// 3 метод indexOf()

// result = numbers.indexOf(4); // Позволяет узнать индекс элемента в массиве.

// 4 Метод push() pop()

//push() Может вставлять по несколько элементов в массив.
// result = numbers.push(7, 5, 4, 3); // Добавляет элемент в конце массива. (и возвращает длинну массива)
//pop()
// result = numbers.pop(); // При помощи этого метода убирается последний элемент и возвращается значение элемента, который был удалён

// 5 Метод unshift() shift()

//unshift() Может вставлять по несколько элементов в массив.
// result = numbers.unshift(3, 4, 8, 2, 44); // Добавляет элемент в начало массива (и возвращает длинну массива)
//shift()
// result = numbers.shift(); // Удаляет первый элемент в начале массива и возвращает значение элемента, который был удалён. 

// 6 Метод splice()

// result = numbers.splice(1, 3);// Удаляет значения из массива (указывается индекс элементов) и возвращает значение удалённых элементов. Элеметы удаляются с конца массива. Тем самым функция изменяет сам массив

// 7 Метод reverse()

// result = numbers.reverse(); // Разворачивает массив

// 8 Метод slice()

// result = numbers.slice(1, 5) // Вырезает диапазон значений и возвращает результат (Указывается индекс элементов)

// 9 Метод concat()

// result = numbers.concat(result); // Контаконирует массивы и возвращает результат, не изменяя изначальный массив. (Складывает)


// console.log(result)
// console.log(numbers);
//!========================================================================================================================================================
//? Массивы задание
// 'use strict';

// Нужно создать калькулятор чаевых.
// Калькулятор должен высчитывать чаевые следующим образом:
// Если размер счёта меньше 20, то чаевые должны быть 20%. В других случаях чаевые составляют 15%
// Для этого нужно создать стрелочную функцию calculateTips() которая будет применять параметр bill (счёт) и возвращать соответствующие чаевые
// Затем необходимо создать массив данных из следующих чисел: 11, 20, 47.
// После этого, нужно создать массив чаевых для каждого счёта.
// И после всего этого, необходимо создать общий массив счёт + чаевые.

// Создаём стрелочную функцию, которая будет высчитывать чаевые. 
// Логические условия следующие: 
// Если размер счёта МЕНЬШЕ(<) 20, ТО (?) СУММА СЧЁТА умножается (*) на 20% (0.2), Если же сумма чека БОЛЬШЕ 20, ТО (:), СУММА СЧЁТА умножается (*) на 15% (0.15)
// Стрелочная функция будет выглядить следующим образом : 
// const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15; // Стрелочная функция, которая высчитывает процент надбавки на основе cчета. (Вместо bill можно использовать любые значения (a, b, c, d))
// Создаём массивы согласно заданию:
// const bills = [11, 20, 47, 59]; // Массив данных (счёт)
// const tips = [calculateTips(bills[0]), calculateTips(bills[1]), calculateTips(bills[2]), calculateTips(bills[3])]; // Высчитывает сумму надбавки для каждого элемента массива. На основе стрелочной функции. (Считает чаевые на основе чека, а чек - данные из массива)
// const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]; // Высчитываем полную сумму чека с учетом надбавки (чаевых). Даные из первого массива складываем с надбавкой (чаевыми) высчитанными на основе чека.
// console.log(`Сумма каждого чека покупателя составила ${bills[0]}$, ${bills[1]}$, ${bills[2]}$`); // Вывод в консоль для каждого чека
// console.log(`Сумма чаевых каждого чека покупателя составила ${tips[0]}$, ${tips[1]}$, ${tips[2]}$`); // Вывод в консоль сумму чаевых каждого чека
// console.log(`Сумма каждого чека с учетом чаевых составила ${totalBills[0]}$, ${totalBills[1]}$, ${totalBills[2]}$,`); // Вывод в консоль общую сумму чека вместе с чаевыми
// console.log(bills, tips, totalBills); // Вывод который требуется по заданию.
// Выполнено.
//!========================================================================================================================================================
//? Объекты (Objects)
// Пример использования константы
// const myData = 
// ['Руслан', 
// 'Гаврилин', 
// 2000, 
// 'Frontend developer', 
// ['Катя', 'Сын',]]; // Создание массива внутри массива
// console.log (myData[4]) // Вывод данных из массива, который находится в массиве
// Объект - специальная структура данных
// Различие между массивом и объектом в том, что в массиве мы в основном храним какие-то данные, которые упорядочены. И обращаемся к ним в основном по индексу
// В объектах мы храним различные данные и обращаемся к ним по ключу
// ruslanObject = {
//    name: 'Руслан', 
//    lastname: 'Гаврилин', 
//    birthYear: 2000, 
//    job: 'Frontend developer', 
//    familyMembers: ['Катя', 'Сын']
// };
//!========================================================================================================================================================
//? Объекты. Обозначение точек и скобок (Dot vs Bracket Notation)

// ruslanObject = {
//    name: 'Руслан', 
//    lastname: 'Гаврилин', 
//    birthYear: 2000, 
//    job: 'Frontend developer', 
//    familyMembers: ['Катя', 'Руслан']
// };

// console.log(ruslanObject); // Вывод всего объекта
//|||||||||||||||||||||

// Dot (Точки)

// console.log(ruslanObject.name); // Вывод с помощью точки (dot). (dot - это оператор, который обращается к объекту, в данном случае это ruslanObject и затем обращается к свойству name внутри этого объекта)
//|||||||||||||||||||||

// Braket (Квадратные скобки)

// console.log(ruslanObject['name']); // Вывод с помощью квадратных скобок (braket). Разница в том, что значение внутри квадратных скобок необходимо указывать как строчное, т.е. в ''

// const baseName = 'name'; // Присваевание выражению ключа объекта 

// console.log(ruslanObject[baseName]); // Вывод с помощью выражения. Обращение к ключу внутри выражения.
// Вариант использования с контаконацией
// console.log(ruslanObject['last' + baseName]); // Подставляет к last переменную со значением name, в итоге получаем lastname, тем самым обращаясь напрямую к фамилии
// Подобное выражение невозможно использовать с помощью dot. (Точки)
// console.log(ruslanObject.last + baseName); // НЕ БУДЕТ РАБОТАТЬ, НЕ ПРАВИЛЬНОЕ ВЫРАЖЕНИЕ
//|||||||||||||||||||||

// Вывод с помощью UI (User Interface)

// const userImput = prompt('Что вы хотите знать о Руслане? Выбирите значение из: name, lastname, birthYear, job, familyMembers');

// Неправильный вывод объекта 

// alert(ruslanObject.userImput); // Неправильное обращение. Через dot обращаться к функции нельзя.
// console.log(ruslanObject.userImput); // Неправильное обращение. Через dot обращаться к функции нельзя.


// Правильный вывод объекта
// alert(ruslanObject[userImput]); // Вывод в всплывающее окно
// console.log(ruslanObject[userImput]); 

// Использование функции If вместе с объектом

// if(ruslanObject[userImput]) {
   // console.log(ruslanObject[userImput]); 
// }
// else {
   // alert('Данного свойства не существует. Выбирирайте между: name, lastname, birthYear, job, familyMembers')
   // console.log('Данного свойства не существует. Выбирирайте между: name, lastname, birthYear, job, familyMembers')
// };

// Создание новых свойство
// const telega = 'telegram';
// ruslanObject.location = 'Беларусь';
// ruslanObject['telegram'] = '@Ahidos';
// console.log(ruslanObject);

// Challenge
// Вывести с помощью динамических свойств следующее значение:
// 'У Руслана 2 члена семьи, и первый из них это Катя'

// console.log(`У ${ruslanObject.name}а ${ruslanObject.familyMembers.length} члена семьи, и первый из них ${ruslanObject.familyMembers[0]}`);
// Выполнено.
//!========================================================================================================================================================
//? Методы объектов

// Метод очень похож на экспрешн. Ранеее писалось следующим образом:
// const calcAge = function(birthYear) {
   // return 2021 - birthYear;
// }
// Сейчас же: 
// ruslanObject = {
//    name: 'Руслан', 
//    lastname: 'Гаврилин', 
//    birthYear: 2000, 
//    job: 'Frontend developer', 
//    familyMembers: ['Катя', 'Руслан'],
   // hasDriverLicense: true,
   // Обычный вариант, если требуется вводить или изменять значения из вне
   // calcAge: function(birthYear) { // Функция экспрешн внутри объекта. Она является методом объекта. Любая функция которая находится внутри объекта является МЕТОДОМ.
   //    return 2022 - birthYear;
   // }
   // Способ обращения к данным внутри объекта. 
   // calcAge: function () {
      // console.log(this); // Показывает, что выводит переменная THIS
   //    return 2022 - this.birthYear;
   // }
   // Способ при котором не будет идти большая нагрузка на железо, если необходимо несколько раз обратится к данным внутри объекта, или же использовать метод.
   // Метод ruslanObject.age не будет работать, если до этого не вывести функцию (метод) calcAge
//    calcAge: function () {
      // console.log(this); // Показывает, что выводит переменная THIS
//       this.age = 2022 - this.birthYear; // Создаём новое свойство age
//       return 2022 - this.birthYear; // Можно больше не возвращать, т.к. мы переменной this присваеваем необходимое значение (При вызове функции .age)
//    },
//    info: function(){
//       return `Имя: ${this.name}, Возраст: ${this.calcAge()}, Вид деятельности: ${this.job}, ${this.hasDriverLicense ? 'Права на вождение есть' : 'Прав на вождение нет'}`
//    }
// };

// Пример вывода функции внутри объекта
// console.log(ruslanObject.calcAge(2000)); // Способ обращение к методу объекта (Функции внутри объекта) через Dot
// console.log(ruslanObject['calcAge'](2000)); // Способ обращение к методу объекта (Функции внутри объекта) через Braket



// Вывод данных внутри объекта
// console.log(ruslanObject.calcAge());


// Если нужно несколько раз обратится к объекту
// Не правильный способ множественного обращения:
// console.log(ruslanObject.calcAge());
// console.log(ruslanObject.calcAge());
// console.log(ruslanObject.calcAge());
// Все дело в том, что при каждом вызове функции, она заново рассчитывает необходимое значение, и в случае, если это какой-то большой проект, то это даёт довольно-таки большую нагрузку.


// Правильный способ обращения
// console.log(ruslanObject.calcAge()); // Необходим для активации функции calcAge. (Будет undefiend если нет свойства return)
// console.log(ruslanObject.age); // Выводит нужные значения
// В чем разница? Все дело в том, что функция выполняется один раз, а затем изменяются лишь значения внутри функции. И если необходимо поменять все несколько раз в крупном проекте, то проблемы не возникнет. 

// Challenge
// Условия: Метод должен возвращать строку, которая будет содержать следующие значения:
// Имя: Руслан, Возвраст: 22, Вид деятельности: Frontend developer, права на вождение есть.
// console.log(ruslanObject.info());
// console.log(ruslanObject.information);
// Выполнено.
//!========================================================================================================================================================
//? Объекты. Задание.
////  Вычислить индекс массы тела для Джек и Майка
////  ИМТ = вес / рост ** 2 = вес / (рост*рост)
////  BMI = weight / height **2 = weight / (height * height)
////  Необходимо создать два объекта с данными Mike и Jack
////  Объекты должны содержать следующие данные: 
////  Имя, фамилия, рост, вес
////  Необходимо создать метод, который будет вычислить BMI для каждого объекта. Также нужно сохранять BMI в СВОЙСТВЕ ДАННОГО ОБЪЕКТА (т.е. чтобы BMI возвращался в объект из метода)
////  Нужно вывести в консоль у кого BMI больше, имя и фамилию.
////  Пример: "Jack White BMI (25.7) выше, чем у Mike Black(22.4)"
////  Данные: Jack White весит 79 кг, рост  1.7м; Mike Black весит 91 кг, его рост 1.93;

//// Создание объекта Jack White
// objectJackWhite = {
//    name: 'Jack',
//    lastname: ' White',
//    height: '1.7',
//    weight: '79',
//    // Создание метода, который рассчитывает BMI на основе данных объекта и возвращает результат в объект
//    bmiF: function(){
//       const BMI = this.weight / this.height ** 2;
//       return objectJackWhite.bmi = BMI;
//    }
// };
//// console.log(objectJackWhite.bmiF()); // Вызов метода и проверка его работы в консоле
// objectJackWhite.bmiF() // Вызов метода для его работы.
//// console.log(objectJackWhite); // Вызов массива и проверка его работы

// // Создание объекта Mike Black
// objectMikeBlack = {
//    name: 'Mike',
//    lastname: 'Black',
//    height: '1.93',
//    weight: '91',
//    // Создание метода, который рассчитывает BMI на основе данных объекта и возвращает результат в объект
//    bmiF: function(){
//       const BMI = this.weight / this.height ** 2;
//       return objectMikeBlack.bmi = BMI;
//    }
// };
// // console.log(objectMikeBlack.bmiF()); // Вызов метода и проверка его работы в консоле
// objectMikeBlack.bmiF() // Вызов метода для его работы.
// // console.log(objectMikeBlack); // Вызов массива и проверка его работы

// // Вывод в консоль того, у кого значение BMI больше.
// if (objectJackWhite.bmi>objectMikeBlack.bmi){ // Если BMI у Джека будет больше, чем у Майка, то будет реализован следующий вариант:
//    console.log(`У ${objectJackWhite.name + objectJackWhite.lastname} индекс BMI (${objectJackWhite.bmi}) выше, чем у ${objectMikeBlack.name + objectMikeBlack.lastname} BMI (${objectMikeBlack.bmi})`)
// }
// else { // Если BMI у Майка будет больше, чем у Джека, то реализован будет следующий вариант: 
//    console.log(`У ${objectMikeBlack.name + objectMikeBlack.lastname} индекс BMI (${objectMikeBlack.bmi}) выше, чем у ${objectJackWhite.name + objectJackWhite.lastname} BMI (${objectJackWhite.bmi}) `)
// };
//!========================================================================================================================================================




