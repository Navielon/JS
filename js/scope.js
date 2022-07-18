'use strict';

function getAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(nameFirst);

  function printAge() {
    let info = `${age} ${nameFirst}`;
    console.log(info);

    if (age >= 18) {
      // var isAdult = true; Можно, но не нужно
      const nameFirst = 'Katya'; // Заменит переменную. Т.к. используется ближайший Scope. Т.к. они находятся в разнх облостях переменных
      const adult = `${nameFirst} взрослый!`;
      console.log(adult);
      function sum(a, b) {
        return a + b;
      }

      console.log(sum(1, 3));

      info = 'New info'; // Переопределяем старую переменную. Присваеваем ей новое значение.
    }
    console.log(info);
    // console.log(isAdult); Можно, но не нужно
  }
  // console.log(sum(1, 3)); Нельзя
  // console.log(adult); Нельзя
  // console.log(info); Нельзя
  printAge();
  // console.log(isAdult); Нельзя
  return age;
}

const nameFirst = 'Ruslan';
getAge(2000);
// printAge(); Нельзя
