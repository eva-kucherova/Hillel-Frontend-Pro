// --- Task 21 ---

// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

function createTable() {
  let rows = Number(prompt('Input number of rows: '));
  let columns = Number(prompt('Input number of columns: '));

  let table = document.createElement('table');
  let num = 1;

  for (let i = 0; i < rows; i++) {
    let row = table.insertRow();
    for (let j = 0; j < columns; j++) {
      let cell = row.insertCell();
      cell.innerHTML = num;
      cell.style.color = 'red';
      cell.style.border = '1px solid black';
      num++;
    }
  }
  document.body.appendChild(table);
}

createTable();
