class Transaction {
  constructor(amount) {
    this.amount = amount
    const date = new Date().toLocaleDateString()
    this.date = date
  }

  isDeposit(){
    return this.amount > 0
  }
}

module.exports = Transaction