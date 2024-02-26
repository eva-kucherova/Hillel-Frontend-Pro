// --- Task 20 ---

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
const key1 = generateKey(8, characters);
const key2 = generateKey(25, characters);
const key3 = generateKey(12, characters);
const key4 = generateKey(6, characters);

console.log(key); // eg599gb60q926j8i
console.log(key1);
console.log(key2);
console.log(key3);
console.log(key4);
