// --- Task 24 ---

// alert('Hello Eva! Task 24');

// Пишемо свій слайдер зображень.

// Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє .
// При досягненні останнього зображення - ховати кнопку Next.
// Аналогічно з першим зображенням і кнопкою Prev.
const images = document.querySelectorAll('.slider img');
const prevBtn = document.getElementById('stopPrev');
const nextBtn = document.getElementById('stopNext');

let currentIndex = 0;

function showImage(index) {
  images[currentIndex].classList.remove('active');
  images[index].classList.add('active');
  currentIndex = index;
}

document.querySelectorAll('.slider .controls').forEach((x) =>
  x.addEventListener('click', function (event) {
    if (event.target.classList.contains('prev')) {
      let index = currentIndex - 1;

      if (index < 0) {
        index = 0;
        prevBtn.style.visibility = 'hidden';
      }
      nextBtn.style.visibility = 'visible';
      showImage(index);
    } else if (event.target.classList.contains('next')) {
      let index = currentIndex + 1;

      if (index >= images.length) {
        index = images.length - 1;
        nextBtn.style.visibility = 'hidden';
      }
      prevBtn.style.visibility = 'visible';
      showImage(index);
    }
  })
);

showImage(currentIndex);
