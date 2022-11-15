class Statement {
  constructor() {
    this.header = 'date || credit || debit || balance'
    this.allTransactions = []
  }

  addTransaction(transaction) {
    this.allTransactions.push(transaction)
  }

  formatTransactions() {
    const formattedTransactions = this.allTransactions.map(transaction => {
      if (transaction.deposit > 0) {
        return `${transaction.date} || ${transaction.deposit.toFixed(2)} || || ${transaction.balance.toFixed(2)}`
      }
      if (transaction.withdrawal > 0) {
        return `${transaction.date} || || ${transaction.withdrawal.toFixed(2)} || ${transaction.balance.toFixed(2)}`
      }
    }).reverse()
    return formattedTransactions.join('\n')
  }

  printStatement() {
    return `${this.header}\n${this.formatTransactions()}`
  }
}

module.exports = Statement

