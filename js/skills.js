'use strict';

const myVar = 'sadasdaa';

while (false) {}

const calcAge = birthYear => 2022 - birthYear;

console.log(calcAge(2000));
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
const humidities = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];
const humidities2 = [32, 45, 29, 19]
// Создание функции
const calculateHumiditiesAmplitude = function (humidities) {
  let max = humidities[0]; // Переменная максимального значения
  let min = humidities[0]; // Переменная минимального значения

  // Цикл, который высчитывает максимальное и минимальное значение
   for (let i = 0; i < humidities.length; i++) {
    // Отсчёт начинается с 0 индекса элемента, т.е. с первого элемента, и продолжается до концы длинны массива увеличиваясь на единицу
    const currentHumidy = humidities[i]; // Создаём переменную, которая равна индексу массива
    // Если тип массива не равен числовому, то продолжаем дальше, не производя всю логику, что ниже. Т.е. оно пропустит всю логику и перейдет дальше, если тип данных не равен числовому.
    if (typeof currentHumidy !== 'number') continue; // Т.е. если при проверке массива результатом будет "eror", функция не прервется, а продолжит выполнятся, переходя к следующему элементу в массиве.

      if (currentHumidy > max) {
      // Если значение массива больше переменной MAX, то переменная max равна текущему значению, которое проверяется.
      // Т.е. 1 > 0 - Да. Значение max становится 1.  100 > 1 - Да. Значит max становится 100.  99 > 100 - Нет. Значит значение max остаётся 100.
      max = currentHumidy;
   }
   if (currentHumidy < min) {
      // Если значение массива меньше переменной MIN, то переменная min равна текущему значению, которое проверяется.
      // Т.е. 32 < 64 - Да. Значение min становится 32. 12 < 32 - Да. Значение min становится 12. 16 < 12 - Нет. Значит значение min остаётся 12.
      min = currentHumidy;
   }
}
  console.log(max, min); // Выводим в консоль минимальное и максимальное значение цикла.
  return max - min; // Возвращает амплитуду влажности (Максимальное значение минус минимальное)
};

const amplitude = calculateHumiditiesAmplitude(humidities);
console.log(amplitude)
// Проблема 2.
// Функция должна получать 2 массива влажности как параметры
// 1. Понять проблему
// - Должны ли мы реализовать ту же функциональность для второго массива? Нет, мы должны объединить два массива.

// 2. Разделение на подзадачи
// - Как сделать слияние двух массивов?
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

const humidities3 = humidities.concat(humidities2);
console.log(humidities3);
//!========================================================================================================================================================