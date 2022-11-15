class Transaction {
  constructor(deposit, withdrawal) {
    this.deposit = deposit;
    this.withdrawal = withdrawal;
    this.balance = 0;
    const date = new Date().toLocaleDateString();
    this.date = date;
  }
}

module.exports = Transaction;
