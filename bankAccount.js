const Transaction = require('./src/transaction');
const AccountBalance = require('./src/accountBalance');
const Statement = require('./src/statement');

class BankAccount {
  constructor() {
    this.accountBalance = new AccountBalance();
    this.statement = new Statement();
  }

  makeTransaction(transactionType, amount) {
    if (amount <= 0) { return `Error: input can't be <= 0.` }
    if (isNaN(amount)) { return `Error: input must be a number` }
    if (!(transactionType === 'deposit' || transactionType === 'withdrawal')) {
      return `Error: transaction must be 'withdrawal' or 'deposit' only`;
}
    this._transactionProcess(transactionType, amount);
  }

  printStatement() {
    return this.statement.printStatement();
  }

  _transactionProcess(transactionType, amount) {
    const transaction = new Transaction();
    if (transactionType === 'deposit') {
      Object.assign(transaction, { deposit: amount, withdrawal: 0 });
    }
    if (transactionType === 'withdrawal') {
      Object.assign(transaction, { deposit: 0, withdrawal: amount });
    }
    this.accountBalance.updateWithTransaction(transaction);
    this.statement.addTransaction(transaction);
  }
}
module.exports = BankAccount;
