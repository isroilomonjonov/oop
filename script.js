"use strict";

// Object literal
// const person = {
//   firstName: "Komil",
//   lastName: "Rasulov",
//   age: 32,
//   calcYear() {
//     console.log(2022 - this.age);
//   },
// };

// Constructor function

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

const komil = new Person("Komil", "Rasulov", 32);
const doniyor = new Person("Doniyor", "Raxmonov", 21);
const umid = new Person("Umid", "Odilov", 20);

console.log(komil);
console.log(doniyor);
console.log(umid);

komil.calcYear();
doniyor.calcYear();
umid.calcYear();

console.log(umid.country);
console.log(doniyor.country);
console.log(komil.country);

// 1. Bo'sh {} yaratiladi.
// 2. this ga yangi ochilgan bo'sh {} o'zlashtiriladi. Funksiya bajariladi.
// 3. objectimiz prototypega bog'lanadi.
// 4. O'sha object return bo'ladi.

console.log(Person.prototype);
console.log(umid.__proto__);
console.log(Person.prototype === umid.__proto__);
console.log(umid instanceof Person);

console.log(Person.prototype.isPrototypeOf(umid));

console.log(Person.prototype.isPrototypeOf(Person));

console.log(umid.hasOwnProperty("country"));

console.log(umid.hasOwnProperty("firstName"));

// console.log(komil.toString());

// const b = "Salom";
// console.log(b instanceof Person);
console.log("===========");
console.log(Person.prototype);

console.log(Object.prototype);

console.log(Person.prototype.__proto__.__proto__);
console.log(Person.prototype.__proto__ === Object.prototype);

console.log(umid.__proto__.__proto__);

const arr = [2, 4, 6];
const arr2 = [2, 4, 6];

const arr3 = new Array(1, 2, 3, 4);
console.log(Array.prototype.__proto__);

umid.calcYear();
komil.calcYear();

Array.prototype.showAll = function () {
  this.forEach((e) => {
    console.log(e);
  });
};

Array.prototype.forEach2 = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this);
  }
};

arr.showAll();
arr2.showAll();

console.log("========");
arr.forEach2((el, i, arr) => {
  console.log(el + i);
});

console.log("===========MAP2 ");

Array.prototype.map2 = function (callBack) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    const newEl = callBack(this[i], i, this);
    newArr[newArr.length] = newEl;
  }

  return newArr;
};

const newArr = arr2.map2((el, i, arr) => {
  return el + i + "ABSD";
});

console.log(newArr);

const h1 = document.querySelector("h1");

console.dir(h1);

console.log("==============");

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

const bmw = new Car("BWM", 130);
const toyota = new Car("Toyota", 105);

bmw.speedUp();
bmw.speedUp();
bmw.speedUp();
bmw.brake();

toyota.speedUp();
toyota.speedUp();
toyota.brake();
toyota.brake();
toyota.brake();
console.log("===========");

// ES6 Classes

// Class Expression
// const PersonCl = class {
//   constructor(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
//   }
// }

// Class Decloration

/* 
1. Class lar aslida constructor funksiya ishlatadi.

2. Class ning bodysi strict mode da ishga tushadi. Agar strict mode qo'shilmagan bo'lsa ham

3. Class larda hoisting ishlamaydi
*/

class PersonCl {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }

  calcYear() {
    console.log(2022 - this.age);
  }

  set firstName(name) {
    if (name.includes(" ")) {
      this._firstName = name;
    } else {
      alert("Ism familiya to'liq emas");
    }
  }

  get firstName() {
    return this._firstName;
  }

  get birthYear() {
    return 2022 - this.age;
  }

  static getInfo() {
    console.log("This is a class to create Person objects");
  }

  // get firstName() {
  //   return this.firstName;
  // }
}

// PersonCl.prototype.sayHi = function () {
//   console.log(`Hi ${this.firstName}`);
// };

const ali = new PersonCl("Ali Usmonov", 23);
const vali = new PersonCl("Vali Usmonov", 31);

console.log(ali);

ali.calcYear();

// ali.firstName = "Alisher";

console.log(ali);
console.log(ali.firstName);
console.log(ali.birthYear);

// Static method in constructor fn

Person.getInfo = function () {
  console.log("This is a constructor to create Person objects");
};

Person.getInfo();
PersonCl.getInfo();

// console.dir(Person);

const arr4 = [3, 34, 34];

// arr4.from();
// ali.sayHi();
// vali.sayHi();

// const cat = {
//   name: "Cat",
//   age: 2,
//   // get birthYear() {
//   //   return this.birthYear;
//   // },
//   // set birthYear(year) {
//   //   this._birthYear = year;
//   // },
// };

// console.log(cat.birthYear);

// cat.birthYear = 2028;

// console.log(cat);

class CarCl {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }

  speedUp() {
    this.speed += 10;
    console.log(`${this.model} ${this.speed} km/s tezlikda harakatlanmoqda`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.model} ${this.speed} km/s tezlikda harakatlanmoqda`);
  }

  get speedMS() {
    return (this.speed * 1000) / 3600;
  }

  set speedMS(speedInMeter) {
    this.speed = speedInMeter * 3.6;
  }
}

const nexia = new CarCl("Nexia", 180);
const tico = new CarCl("Tico", 45);

console.log(nexia);
console.log(tico);

nexia.speedUp();
nexia.speedUp();
nexia.speedUp();
nexia.speedUp();

nexia.speedMS = 50;

console.log(nexia.speed);

console.log(nexia.speedMS);
console.log(tico.speedMS);

// nexia.speedUp();

// Object.create()

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

const sarvar = Object.create(PersonProto);
sarvar.firstName = "Sarvar";
sarvar.age = 47;

console.log(sarvar);
sarvar.calcYear();

const ilhom = Object.create(PersonProto);
ilhom.init("Ilhom", 32);

ilhom.calcYear();

console.log(sarvar.__proto__ === PersonProto);

console.log(sarvar.__proto__ === ilhom.__proto__);

console.log("=========");
