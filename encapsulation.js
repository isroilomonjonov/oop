"use strict";

class Account {
  // Private field
  _bank = "Capital";
  // #bankAddress = "Labzak 45";
  #bankAddress;
  #password;
  #transfers = [];

  // Public field
  firstName;
  lastName;
  constructor(firstName, lastName, login, password, cardNumber, bankAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.password = password;
    this.cardNumber = cardNumber;
    // this.bank = bank
    this.#bankAddress = bankAddress;
    
  }

  // Public API

  // Public methods
  getBank() {
    return this._bank;
  }
  // Public method
  setBank(newBankName) {
    this._bank = newBankName;
  }

  // Private method
  #checkBalance(amount) {
    const balance = this.#transfers.reduce((sum, tr) => {
      sum += tr;
      return sum;
    }, 0);
    return balance >= amount;
  }
  // Public method
  transfer(amount) {
    this.#transfers.push(amount);
    return this;
  }

  widthdraw(amount) {
    const isEnough = this.#checkBalance(amount);
    if (isEnough) {
      this.#transfers.push(-amount);
    } else {
      console.log("Not enough");
    }
    return this;
  }

  // Public method
  setBankAddress(newAddress) {
    this.#bankAddress = newAddress;
  }

}
const account1 = new Account(
  "Alisher",
  "Odilov",
  "user1",
  "9999",
  8600459824672376,
  "A Navoiy 30"
);
// const account5 = new Account("joj")

const account2 = new Account(
  "Qodir",
  "Usmonov",
  "user2",
  "4444",
  8600459824672376,
  "Mustaqillik 21"
);

// account1._bank = "Ssefes";
console.log(account1.getBank());

console.log(account1);
console.log(account2);
account1.setBankAddress("Rakat 4a-uy");
// console.log(account1.#bankAddress);
// account1.bankAddress = "sklrugfosruih";

// account1.transfer(1000);
// account1.transfer(3200);
// account1.transfer(1570);
// account1.widthdraw(3000);
// account1.widthdraw(1400);

account1
  .transfer(1000)
  .transfer(3200)
  .widthdraw(200)
  .transfer(1570)
  .widthdraw(3000)
  .widthdraw(1400);

console.log(account1);
console.log(account2);

const arr = [234, 23, 423, 423, 4];
