class Account {
  constructor() {
    this.balance = 0;
  }

  showBalance() {
    return this.balance;
  }

  updateBalanceWithTransaction(transaction) {
    if (transaction.deposit) {
      this.balance += transaction.deposit;
    }
    if (transaction.withdrawal) {
      this.balance -= transaction.withdrawal;
    }
    transaction.balance = this.balance
  }
}

module.exports = Account;
