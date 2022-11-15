const Transaction = require('./src/transaction');
const AccountBalance = require('./src/accountBalance');
const Statement = require('./src/statement');

class AccountManager {
  constructor() {
    this.transaction = new Transaction();
    this.accountBalance = new AccountBalance();
    this.statement = new Statement();
  }

  makeDeposit(amount) {
    Object.assign(this.transaction, {deposit: amount, withdrawal: 0})
    this._runBankingProcess()
  }

  makeWithdrawal(amount) {
    Object.assign(this.transaction, {deposit: 0, withdrawal: amount})
    this._runBankingProcess()
  }

  printStatement() {
    return this.statement.printStatement()
  }

  _runBankingProcess() {
    this.accountBalance.updateWithTransaction(this.transaction)
    this.statement.addTransaction(this.transaction)
  }
}

module.exports = AccountManager