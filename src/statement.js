class Statement {
  constructor() {
    this.header = 'date || credit || debit || balance'
    this.allTransactions = []
  }

  addTransaction(transaction) {
    this.allTransactions.push(transaction)
    console.log(this.body)
  }

  format() {
    const result = this.allTransactions.map(transaction => `${transaction.date} || ${transaction.deposit.toFixed(2)} || || ${transaction.deposit.toFixed(2)}`)
    return result.toString()
  }
}

module.exports = Statement