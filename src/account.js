class Account {
  constructor() {
    this.balance = 0
  }

  showBalance() {
    return this.balance
  }

  deposit(amount) {
    this.balance += amount
  }
}

module.exports = Account