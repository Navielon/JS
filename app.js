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