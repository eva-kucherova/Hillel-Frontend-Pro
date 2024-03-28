//--- Task 27 ---

// alert('Hello Eva! Task 27');

// Реалізовуємо форму для реєстрації.

// Поля:

// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// ….
// Кнопка “Зберегти”
// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.

const userForm = document.getElementById('user_form');
function getUserDatas() {
  console.log(userForm);

  const languageElements = userForm.elements['language'];
  const languages = [];
  for (let i = 0; i < languageElements.length; ++i) {
    const checkbox = languageElements.item(i);
    if (checkbox.checked) {
      languages.push(checkbox.value);
    }
  }
  const userFormDatas = {
    first_name: userForm.elements['first_name'].value,
    last_name: userForm.elements['last_name'].value,
    birthday: userForm.elements['birthday'].value,
    gender: userForm.elements['gender'].value,
    address: userForm.elements['address'].value,
    city: userForm.elements['city'].value,
    languages: languages,
  };

  return userFormDatas;
}
function onSubmit(event) {
  event.preventDefault();
  console.log(event);

  showUserDatas(getUserDatas());
}
userForm.addEventListener('submit', onSubmit);

function showUserDatas(datas) {
  const userDatas = document.createElement('div');
  userDatas.innerHTML = datas.first_name;
  fillDataTable(datas);
}

function fillDataTable(datas) {
  const data_section = document.createElement('div');

  addData(data_section, 'First Name', datas.first_name);
  addData(data_section, 'Last Name', datas.last_name);
  addData(data_section, 'Birthday', datas.birthday);
  addData(data_section, 'Gender', datas.gender);
  addData(data_section, 'Address', datas.address);
  addData(data_section, 'City', datas.city);
  addData(data_section, 'Languages', datas.languages.join(', '));

  userForm.insertAdjacentElement('afterend', data_section);
  userForm.hidden = true;
}

function addData(section, label, value) {
  const paragraph = document.createElement('p');

  const heading = document.createElement('b');
  heading.appendChild(document.createTextNode(label));
  paragraph.appendChild(heading);

  paragraph.appendChild(document.createTextNode(': '));

  const valueNode = document.createElement('i');
  valueNode.appendChild(document.createTextNode(!!value ? value : 'N/A'));
  paragraph.appendChild(valueNode);

  section.appendChild(paragraph);
}
