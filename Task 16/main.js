// --- Task 16 ---

alert('Hello Eva! Task 16');

// Вам потрібно зробити конструктор сутності "Студент".

// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
// І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений,
//   але на 25 елементів.Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод.present()
//   на чергове порожнє місце, в масив записується true, коли викликаємо.absent() - записується false.
//   Передбачте будь - який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
//   Масив – це властивість, present та absent – ​​методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин / кількістьЗанять),
//   і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
//     якщо одне з цих значень менше, то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2 - 3 екземпляри(конкретних студентів) і
// показати використання цих методів.

class Student {
  constructor(name, surname, birthYear, marks) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.marks = marks;
  }

  calculateAge() {
    let today = new Date();
    let currentYear = today.getFullYear();
    let studentAge = Number(currentYear) - Number(this.birthYear);
    console.log(studentAge);
  }

  attendance = new Array(25);

  present() {
    const next_index = this.attendance.findIndex((x) => x === undefined);
    if (next_index != -1) {
      this.attendance[next_index] = true;
    }
    console.log(this.attendance);
  }
  absent() {
    const next_index = this.attendance.findIndex((x) => x === undefined);
    if (next_index != -1) {
      this.attendance[next_index] = false;
    }
  }

  getAverageMark() {
    let sum = this.marks.reduce(function (accum, mark) {
      return accum + mark;
    }, 0);
    const averageMark = Math.round(sum / this.marks.length);
    console.log(averageMark);
    return averageMark;
  }

  getAverageAttendance() {
    const visitedDays = this.attendance.filter((elem) => elem).length;
    const totalDays = this.attendance.filter(
      (elem) => elem !== undefined
    ).length;
    const averageAttendance = (visitedDays / totalDays).toFixed(1);
    console.log(averageAttendance);
    return averageAttendance;
  }

  summary() {
    const averageMark = this.getAverageMark();
    const averageAttendance = this.getAverageAttendance();
    switch (true) {
      case averageMark > 90 && averageAttendance > 0.9:
        console.log('Молодець!');
        break;
      case (averageMark >= 90 && averageAttendance <= 0.9) ||
        (averageMark <= 90 && averageAttendance >= 0.9):
        console.log('Добре, але можна краще');
        break;
      case averageMark < 90 && averageAttendance < 0.9:
        console.log('Редиска!');
        break;
    }
  }
}

const student1 = new Student(
  'Eva',
  'Kucherova',
  '1979',
  [100, 95, 98, 100, 84, 96, 100, 94]
);
student1.calculateAge();
student1.getAverageMark();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
console.log(student1.attendance);

student1.getAverageAttendance();
student1.summary();
