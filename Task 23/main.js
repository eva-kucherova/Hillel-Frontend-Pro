// --- Task 23 ---

// Є текстове поле на сторінці.Під час фокусування на цьому полі збоку з'являється <div>.
//  При пропажі фокусу - <div> так само пропадає
const form = document.getElementById('form');
const ghostDiv = document.getElementById('ghost');

form.addEventListener(
  'focus',
  () => {
    ghostDiv.style.visibility = 'visible';
  },
  true
);

form.addEventListener(
  'blur',
  () => {
    ghostDiv.style.visibility = 'hidden';
  },
  true
);
