// ---Task 22---

// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
// Вивести зображення з цієї папки, отримане випадковим чином(Math.random)

let image = document.getElementById('image');

let imgNum = Math.floor(Math.random() * 9) + 1;

image.setAttribute('src', `./images/${imgNum}.jpg`);
