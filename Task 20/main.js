// --- Task 20 ---

alert('Hello, Eva! Task 20');

// Реалізуйте функцію generateKey(length, characters),
// яка повертає рядок випадкових символів із набору characters довжиною length.span >
// Наприклад:

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(num, chars) {
  let keyString = '';
  while (keyString.length < num) {
    keyString += chars[Math.floor(Math.random() * chars.length)];
  }
  return keyString;
}

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
