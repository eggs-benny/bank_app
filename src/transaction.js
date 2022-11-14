class Transaction {
  constructor(amount) {
    this.amount = amount
    const date = new Date().toLocaleDateString()
    this.date = date
  }

}

module.exports = Transaction