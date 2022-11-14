const Transaction = require("./transaction")

class Account {
  constructor() {
    this.balance = 0
  }

  showBalance() {
    return this.balance
  }

  // updateWithTransaction() {
  //   this.balance += transaction.amount
  // }

  deposit(amount) {
    this.balance += amount
  }

  withdraw(amount) {
    this.balance -= amount
  }
}

module.exports = Account