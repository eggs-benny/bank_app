const Transaction = require('./src/transaction');
const AccountBalance = require('./src/accountBalance');
const Statement = require('./src/statement');

class AccountManager {
  constructor() {
    this.accountBalance = new AccountBalance();
    this.statement = new Statement();
  }

  makeDeposit(amount) {
    if (amount <= 0) throw new Error(`\n***\n***\nDeposit can't be <= 0. If you meant to withdraw, use makeWithdrawal() function.\n***\n***`)
    const transaction = new Transaction()
    Object.assign(transaction, {deposit: amount, withdrawal: 0})
    this.accountBalance.updateWithTransaction(transaction)
    this.statement.addTransaction(transaction)
  }

  makeWithdrawal(amount) {
    if (amount <= 0) throw new Error(`\n***\n***\nWithdrawal can't be <= 0. If you meant to deposit, use makeDeposit() function.\n***\n***`) 
    const transaction = new Transaction()
    Object.assign(transaction, {deposit: 0, withdrawal: amount})
    this.accountBalance.updateWithTransaction(transaction)
    this.statement.addTransaction(transaction)
  }

  printStatement() {
    return this.statement.printStatement()
  }
}
module.exports = AccountManager