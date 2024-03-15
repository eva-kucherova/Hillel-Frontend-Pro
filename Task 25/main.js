// --- Task 25 ---

// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел(наприклад[1, 2, 3])
// і генерує список з елементів:

// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>
//         <ul>
//             <li>1.1</li>
//             <li>1.2</li>
//             <li>1.3</li>
//         </ul>
//     </li>
//     <li>3</li>
// </ul>

const unlist = document.getElementById('ul');

const myArray1 = [1, 2, [1, 2, 3], 3, [4, 5], 4];

function generateList(array) {
  unlist.innerHTML = '';
  let i = 0;
  array.forEach((elem) => {
    if (!Array.isArray(elem)) {
      unlist.innerHTML += `
        <li class="elem"> ${elem}
        </li>
    `;
    } else {
      i++;
      const extraUl = document.createElement('ul');
      extraUl.innerHTML = '';
      elem.forEach((num) => {
        extraUl.innerHTML += `
        <li class="elem">${i}. ${num}
        </li>
    `;
        unlist.append(extraUl);
      });
    }
  });
}

generateList(myArray1);
