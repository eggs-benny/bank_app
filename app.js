const Transaction = require('./transaction');
const Account = require('./account');
const Statement = require('./statement');

class App {
  constructor() {
    this.transaction = new Transaction();
    this.account = new Account();
    this.statement = new Statement();
  }

  
}

module.exports = App