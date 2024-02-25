// --- Task 14 ---

// 1. Створити сутність "Людина".

// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
// 2. Створити сутність "Автомобіль".

// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// 1. конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
// 2. присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина
// у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// 3. метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина
// для виведення інформації про власника
// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.

class Person {
  constructor(datas) {
    this.name = datas.name;
    this.age = datas.age;
  }
  personInfo(name, age) {
    console.log(this.name, this.age);
  }
}

class Car {
  constructor(parameters) {
    this.brand = parameters.brand;
    this.model = parameters.model;
    this.year = parameters.year;
    this.color = parameters.color;
  }
  setOwner(person) {
    if (person.age >= 18) {
      this.owner = person;
    } else {
      console.log(`Sorry, ${person.name}, persons under 18 can't use the car`);
    }
  }
  getOwner() {
    return this.owner;
  }
  carInfo() {
    console.log(this.brand, this.model, this.year, this.color, this.getOwner());
  }
}

const person1 = new Person({ name: 'Eva', age: '45' });
const person2 = new Person({ name: 'Olga', age: '52' });
const person3 = new Person({ name: 'Alex', age: '36' });
const person4 = new Person({ name: 'Igor', age: '47' });
const person5 = new Person({ name: 'Vova', age: '16' });

const car1 = new Car({
  brand: 'BMW',
  model: 'X5',
  year: '2016',
  color: 'black',
});
const car2 = new Car({
  brand: 'Opel',
  model: 'Omega',
  year: '2010',
  color: 'blue',
});
const car3 = new Car({
  brand: 'Suzuki',
  model: 'SX4',
  year: '2014',
  color: 'silver',
});
const car4 = new Car({
  brand: 'Mazda',
  model: '6',
  year: '2012',
  color: 'red',
});

person1.personInfo();
console.log(car1);
car1.setOwner(person4);
console.log(car1);
car1.carInfo();
console.log(car3);
car3.setOwner(person1);
console.log(car3);
car3.carInfo();
console.log(car2);
car2.setOwner(person5);
