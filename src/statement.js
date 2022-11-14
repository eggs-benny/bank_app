class Statement {
  constructor() {
    this.header = 'date || credit || debit || balance'
    this.allTransactions = []
  }

  addTransaction(transaction) {
    this.allTransactions.push(transaction)
  }

  format() {
    const result = this.allTransactions.map(transaction => `${transaction.date} || ${transaction.deposit.toFixed(2)} || || ${transaction.balance.toFixed(2)}\n`)
    return result.join('')
  }
}

module.exports = Statement