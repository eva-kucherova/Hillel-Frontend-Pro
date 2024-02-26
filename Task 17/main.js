// --- Task 17 ---

//  Дано масив з елементами різних типів.
//  Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const myArray = [
  12,
  'str',
  100,
  86,
  -5,
  NaN,
  null,
  0.25,
  58.4,
  undefined,
  34,
  72,
  true,
  { key: 'value' },
  17,
];

const myArray1 = [
  12,
  'str',
  100,
  86,
  -5,
  NaN,
  null,
  0.25,
  58.4,
  0,
  undefined,
  34,
  72,
  true,
  { key: 'value' },
  17,
];

const calcNumsAverage = function (array) {
  const numArray = array.filter(
    (elem) => typeof elem === 'number' && Number.isNaN(elem) === false
  );
  console.log(numArray);
  let sum = numArray.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  console.log(sum);
  const numsAverage = (sum / numArray.length).toFixed(2);
  console.log(numsAverage);
};

calcNumsAverage(myArray);
calcNumsAverage(myArray1);

// const calcNumsAverage = function (array) {
//   let sum = 0;
//   let i = 0;

//   array.forEach((element) => {
//     if (Number.isInteger(element)) {
//       sum += element;
//       i++;
//     }
//   });

//   const numsAverage = (sum / i).toFixed(2);
//   return numsAverage;
// };

//calcNumsAverage(myArray);
