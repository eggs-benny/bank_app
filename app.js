const Transaction = require('./src/transaction');
const Account = require('./src/account');
const Statement = require('./src/statement');

class App {
  constructor() {
    this.transaction = new Transaction();
    this.account = new Account();
    this.statement = new Statement();
  }

  printStatement() {
    console.log(this.statement.printStatement())
  }
}

module.exports = App