// --- Task 15 ---

// 1. Створити клас Людина.

// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.
// 2. Створити клас Квартира.

// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
// 3. Створити клас Будинок.

// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  residents = [];

  setResident(person) {
    this.residents.push(person);
    console.log(this.residents);
  }
}

class House {
  constructor(maxApartsNum) {
    this.maxApartsNum = maxApartsNum;
  }
  apartsArray = [];

  setApartment(apartment) {
    if (this.apartsArray.length < this.maxApartsNum) {
      this.apartsArray[this.apartsArray.length] = apartment;
    } else {
      console.log(
        `Apartment cannot be added to the list - there are no free slots`
      );
    }
  }
}

const person1 = new Person('Irina', 'female');
const person2 = new Person('Anna', 'female');
const person3 = new Person('Oleg', 'male');
const person4 = new Person('Gleb', 'male');
const person5 = new Person('Vera', 'female');
const person6 = new Person('Ignat', 'male');

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

const house1 = new House(2);

console.log(person1);
console.log(apartment1);
apartment1.setResident(person3);
console.log(apartment1);
apartment2.setResident(person5);
apartment2.setResident(person6);
console.log(apartment2);
apartment3.setResident(person1);
apartment3.setResident(person2);
apartment3.setResident(person4);
console.log(apartment3);
house1.setApartment(apartment1);
house1.setApartment(apartment2);
console.log(house1);
house1.setApartment(apartment3);
console.log(house1);
