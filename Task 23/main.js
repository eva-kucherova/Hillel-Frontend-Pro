// --- Task 23 ---

alert('hello Eva! Task 23');

// Є текстове поле на сторінці.Під час фокусування на цьому полі збоку з'являється <div>.
//  При пропажі фокусу - <div> так само пропадає
const form = document.getElementById('form');
const ghostDiv = document.getElementById('ghost');

form.addEventListener(
  'focus',
  (event) => {
    ghostDiv.style.visibility = 'visible';
  },
  true
);

form.addEventListener(
  'blur',
  (event) => {
    ghostDiv.style.visibility = 'hidden';
  },
  true
);
