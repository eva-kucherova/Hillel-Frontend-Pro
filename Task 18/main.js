// --- Task 18 ---

// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.

const numOfElements = Number(prompt('Enter the number of elements: '));
let userArray = new Array(numOfElements);
let numIndex = 0;
do {
  const userNumber = Number(prompt('Enter the number: '));
  userArray[numIndex] = userNumber;
  numIndex++;
} while (numIndex < numOfElements);
alert(`Thanks! Let's look at result`);

document.getElementById('user_array').innerHTML = userArray;

const sortedArray = userArray.sort(function (a, b) {
  return a - b;
});
document.getElementById('sorted_array').innerHTML = sortedArray;

if (userArray.length >= 5) {
  sortedArray.splice(2, 3);
  document.getElementById('cutted_array').innerHTML = sortedArray;
} else {
  document.getElementById(
    'cutted_array'
  ).innerHTML = `Sorry, your array is too short`;
}
