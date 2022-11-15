const Transaction = require('./src/transaction');
const Account = require('./src/account');
const Statement = require('./src/statement');

class App {
  constructor() {
    this.transaction = new Transaction();
    this.account = new Account();
    this.statement = new Statement();
  }

  makeDeposit(amount) {
    Object.assign(this.transaction, {deposit: amount, withdrawal: 0})
    this.statement.addTransaction(this.transaction)
    this.account.updateBalanceWithTransaction(this.transaction)
    return
  }

  printStatement() {
    return this.statement.printStatement()
  }
}

module.exports = App