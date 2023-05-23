"use strict";

const Person = function (firstName, lastName, age) {
  // console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  // Instance methods
  // Bad practice
  // this.calcYear = function () {
  //   console.log(2022 - this.age);
  // };
};

Person.prototype.calcYear = function () {
  console.log(2022 - this.age);
};

Person.prototype.country = "Uzbekistan";

// const komil = new Person("Komil", "Rasulov", 32);

// console.log(komil);

const Student = function (firstName, lastName, age, course) {
  // this.firstName = firstName;
  // this.lastName = lastName;
  // this.age = age;
  Person.call(this, firstName, lastName, age);

  this.course = course;
};

// Student.prototype = Person.prototype;

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.info = function () {
  console.log(
    `${this.firstName} ${this.lastName} ${this.course} kursida o'qiydi`
  );
};

const umid = new Student("Umid", "Odilov", 22, "Ingliz tili");

console.log(umid);

umid.info();
console.log(umid.__proto__);
umid.calcYear();

// console.log(umid instanceof Student);
// console.log(umid instanceof Person);

const CleverSt = function (firstName, lastName, age, course, grades) {
  Student.call(this, firstName, lastName, age, course);
  this.grades = grades;
};

CleverSt.prototype = Object.create(Student.prototype);

CleverSt.prototype.grade = function () {
  console.log("Talaba taqdirlandi");
};

const cleverStudent = new CleverSt(
  "Olim",
  "Tolipov",
  31,
  "Nemis tili",
  "A'lochi"
);

console.log(cleverStudent);

cleverStudent.info();
cleverStudent.calcYear();
cleverStudent.grade();

console.log("==========");

const Car = function (model, speed) {
  this.model = model;
  this.speed = speed;
};

Car.prototype.speedUp = function () {
  this.speed += 10;
  console.log(`${this.model} ${this.speed} km/s tezlikda harakatlanmoqda`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.model} ${this.speed} km/s tezlikda harakatlanmoqda`);
};

const ElectroCar = function (model, speed, charge) {
  Car.call(this, model, speed);
  this.charge = charge;
};

ElectroCar.prototype = Object.create(Car.prototype);
ElectroCar.prototype.constructor = ElectroCar;

ElectroCar.prototype.speedUp = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.model} ${this.speed} km/s tezlikda harakatlanmoqda. Quvvati ${this.charge}%`
  );
};

ElectroCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new ElectroCar("Tesla", 130, 38);

console.log(tesla);

tesla.speedUp();
tesla.speedUp();
tesla.speedUp();
tesla.speedUp();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.chargeBattery(85);
tesla.speedUp();
tesla.speedUp();
tesla.speedUp();
tesla.speedUp();

console.log("Inheritance with classes");

class PersonCl {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }

  calcYear() {
    console.log(2022 - this.age);
  }
}

class StudentCl extends PersonCl {
  constructor(firstName, age, course) {
    // this.firstName = firstName;
    // this.age = age;
    super(firstName, age);
    this.course = course;
  }

  info() {
    console.log(`${this.firstName} ${this.course} kursida o'qiydi`);
  }

  calcYear() {
    console.log("Qalesan");
  }
}

const vali = new StudentCl("Vali", 47, "Italian tili");
console.log(vali);
vali.calcYear();
vali.info();

console.log("=========");

const PersonProto = {
  calcYear() {
    console.log(2022 - this.age);
  },
  location: "Tashkent",
  init(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  },
};

const StudentProto = Object.create(PersonProto);

StudentProto.info = function () {
  console.log(`${this.firstName} ${this.course}`);
};
StudentProto.init = function (firstName, age, course) {
  PersonProto.init.call(this, firstName, age);
  this.course = course;
};
const student = Object.create(StudentProto);

student.init("student", 18, "english");

student.calcYear();
student.info();

console.log(student);
console.log(PersonProto);
