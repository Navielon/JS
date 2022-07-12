// 'use strict';

// const myVar = 'sadasdaa';

// while (false) {}

// const calcAge = birthYear => 2022 - birthYear;

// console.log(calcAge(2000));
//!========================================================================================================================================================
// Проблема 1
// Мы работаем над приложением для прогноза погоды, в частности, над функцией влажности на данный момент. The most recent task
// Самая последняя задача: "Вычислите амплитуду влажности для заданного массива значений влажности за один день. Обратите внимание, что иногда в данных может быть ошибка, вызванная ошибкой датчика."

// const humidities = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];

// 1. Понять проблему
// - Какова амплидута влажности? (Это разница между минимальным и максимальным значениями влажности.)
// - Как вычислить минимальные и максимальные значения в массиве?
// - Как ошибка датчика выглядит в массиве данных? Что делать с этой ошибкой?

// 2. Разделение на подзадачи
// - Как игнорировать ошибки в данных?
// - Как вычислить минимальное значение в массиве?
// - Как вычислить максимальное значение в массиве?
// - Вычислить разницу между  min и max значениями и вернуть результат

// Решение проблемы.
// 1. Пробуем сами решить проблему. Если понимаем, что не получается и слишком долго зависли над задачей, переходит ко второму этапу.
// 2. Пробуем гуглить. Как вариант, искать ответ на сайте stackoverflow. И важно, понять решение, а не просто скопировать и вставить.

// Массив
// const humidities = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];
// const humidities2 = [32, 45, 29, 19]
// Создание функции
// const calculateHumiditiesAmplitude = function (humidities) {
//   let max = humidities[0]; // Переменная максимального значения
//   let min = humidities[0]; // Переменная минимального значения

  // Цикл, который высчитывает максимальное и минимальное значение
   // for (let i = 0; i < humidities.length; i++) {
    // Отсчёт начинается с 0 индекса элемента, т.е. с первого элемента, и продолжается до концы длинны массива увеличиваясь на единицу
   //  const currentHumidy = humidities[i]; // Создаём переменную, которая равна индексу массива
    // Если тип массива не равен числовому, то продолжаем дальше, не производя всю логику, что ниже. Т.е. оно пропустит всю логику и перейдет дальше, если тип данных не равен числовому.
   //  if (typeof currentHumidy !== 'number') continue; // Т.е. если при проверке массива результатом будет "eror", функция не прервется, а продолжит выполнятся, переходя к следующему элементу в массиве.

      // if (currentHumidy > max) {
      // Если значение массива больше переменной MAX, то переменная max равна текущему значению, которое проверяется.
      // Т.е. 1 > 0 - Да. Значение max становится 1.  100 > 1 - Да. Значит max становится 100.  99 > 100 - Нет. Значит значение max остаётся 100.
      // max = currentHumidy;
   // }
   // if (currentHumidy < min) {
      // Если значение массива меньше переменной MIN, то переменная min равна текущему значению, которое проверяется.
      // Т.е. 32 < 64 - Да. Значение min становится 32. 12 < 32 - Да. Значение min становится 12. 16 < 12 - Нет. Значит значение min остаётся 12.
      // min = currentHumidy;
   // }
// }
//   console.log(max, min); // Выводим в консоль минимальное и максимальное значение цикла.
//   return max - min; // Возвращает амплитуду влажности (Максимальное значение минус минимальное)
// };

// const amplitude = calculateHumiditiesAmplitude(humidities);
// console.log(amplitude)
// Проблема 2.
// Функция должна получать 2 массива влажности как параметры
// 1. Понять проблему
// - Должны ли мы реализовать ту же функциональность для второго массива? Нет, мы должны объединить два массива.

// 2. Разделение на подзадачи
// - Как сделать слияние двух массивов?
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// const humidities3 = humidities.concat(humidities2);
// console.log(humidities3);
//!========================================================================================================================================================
//? ПРОЦЕСС ОТЛАДКИ (DEBUGGING)

//*=================================================================
// -- 1. Узнать, что есть ошибка                               -- //
// -- -=== ИНДЕТИФИЦИРОВАТЬ ===-                               -- //
// -- Во время разработки                                      -- //
// -- Тестируя программу                                       -- //
// -- Отчеты юзеров во время пользования                       -- //
// -- Контекст: Браузеры, пользователи и т.д.                  -- //
//*=================================================================
//            ||                                               -- //
//            ||                                               -- //
//            ||                                               -- //
//            ||                                               -- //
//            ||                                               -- //
//            ||                                               -- //
//            \/                                               -- //
//*=================================================================
// -- 2. Выявление того, где именно в коде происходит ошибка   -- //
// -- -=== НАЙТИ ===-                                          -- //
// -- Консоль разработчика (простой код)                       -- //
// -- Отладчик (сложный код)                                   -- //
//*=================================================================
//            ||                                               -- //
//            ||                                               -- //
//            ||                                               -- //
//            ||                                               -- //
//            ||                                               -- //
//            ||                                               -- //
//            \/                                               -- //
//*=================================================================
// -- 3. Исправление ошибки                                    -- //
// -- -=== ИСПРАВИТЬ ===-                                      -- //
// -- Заменить неправильное решение новым, правильным решением -- //
//*=================================================================
//            ||                                               -- //
//            ||                                               -- //
//            ||                                               -- //
//            ||                                               -- //
//            ||                                               -- //
//            ||                                               -- //
//            \/                                               -- //
//*=================================================================
// -- 4. Предотвращение повторения этого бага                  -- //
// -- -=== ПРЕДОТВРАТИТЬ ===-                                  -- //
// -- Поиск той же ошибки в похожем коде                       -- //
// -- Написание тестов с использованием ПО для тестирования    -- //
//*=================================================================
//!========================================================================================================================================================
//? Отладка кода при помощи консоли и breakpoints

// Перевод градусов цельсии в кельвины

// const celciusToKelvin = function() {
   // const measurement = {
      // type: 'temp',
      // unit: 'celcius',
      // value: Number(prompt('Температура в градусах по цельсии')),
      // value: 35,
   // };
   // console.log(measurement); // Вывод в консоль обычном способом
   // console.table(measurement); // Вывод в консоль в виде таблички
   // console.log(measurement.value); // Вывод в консоль обычном способом часть объекта
   // console.warn(measurement.value); // Вывод в консоль предупреждения
   // console.error(measurement.value); // Вывод в консоль ошибки

   // const kelvin = measurement.value + 273;
   // return kelvin
// };

// console.log(celciusToKelvin()); // Вывод функции в консоль
// Процесс исправления бага
// ---- Индетификация ошибки. 
// 1. Смотрим результат вывода консоли. Видим неккоретный результат. 
// ---- Ищем ошибку
// 1. Переходим к действию, которое было ранее. В функции мы возвращаем kelvin. 
// 2. Переходим к переменной kelvin. Видим сложение [значения объекта] и числа 273. С числом 273 все нормально.
// 3. Переходим к объекту, смотрим, что с ним не так. Выводим результат [значения] в консоль. Как и сам объект.
// 4. В итоге получаем строку, т.к. prompt ВСЕГДА возвращает строку. 
// 5. Следовательно происходит простая контаконация строк. 35+273 = 35273
// --- Исправляем ошибку
// 1. Ложим prompt внутрь функции Number, тем самым преобразуя результат в числовое значение.
// -- Похожего кода нет :) .
//!========================================================================================================================================================
//? Задание раздела.

// Задание

// Приложение "Прогноз погоды" отображает строку с прогнозируемой влажностью из заданного массива.
// Пример [49, 51, 63] будет отображаться " ... влажность 49% за 1 день... влажность 51% за 2 дня... 63% влажности за 3 дня ..."
// Создайте функцию printHumiditiesForecast(), которая принимает массив в качестве параметра и записывает строку, подобную приведенной выше, в консоль. Попробуйте проделать это с обоими тестовыми наборами данных.
// Используйте систему решения проблем: поймите проблему и разделите ее на подзадачи!
// Data1: [49, 51, 63]
// Data2: [31, 29, 43, 58, 52]

// Решение

// const data1 = [49, 51, 63]; // Массив 1
// const data2 = [31, 29, 43, 57, 52]; // Массив 2

// Функция
// const printHumiditiesForecast = function(a){  // Вместо "a"подставляется массив

// Переменная, которая будет содержать строку результата
// let info = '';

// Цикл, который выполняет следующие действия
// Подставляет индекс элементов, добавляя к ним процент и ближайшие дни
// for (let i = 0; i < a.length; i++){ // Условия цикла
   // info =  info + `${a[i]}% humidity in ${i+1} days... ` // Не совсем правильный способ
   // info += `${a[i]}% humidity in ${i+1} days... ` // Цикл
// }
// Вывод в консоль результата ПОСЛЕ цикла
   // console.log(info)
// };

// Вызов функции
// printHumiditiesForecast(data1);
//!========================================================================================================================================================
