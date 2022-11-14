class Transaction {
  constructor(deposit, withdrawal) {
    this.deposit = deposit
    this.withdrawal = withdrawal
    const date = new Date().toLocaleDateString()
    this.date = date
  }
}

module.exports = Transaction