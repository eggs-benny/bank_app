class AccountBalance {
  constructor() {
    this.balance = 0;
  }

  _show() {
    return this.balance;
  }

  updateWithTransaction(transaction) {
    if (transaction.deposit) {
      this.balance += transaction.deposit;
    }
    if (transaction.withdrawal) {
      this.balance -= transaction.withdrawal;
    }
    transaction.balance = this.balance
  }
}

module.exports = AccountBalance;
