const Transaction = require('../src/transaction');
const Account = require('../src/account');
const Statement = require('../src/statement');
const App = require('../app');


describe('App', () => {
  let transaction, account, statement;

  beforeEach(() => {
    app = new App()
    transaction = new Transaction();
    account = new Account();
    statement = new Statement();
  })

  describe('#printStatement', () => {
    it('prints an empty statement (just headers)', () =>{
      expect(app.printStatment).toEqual('date || credit || debit || balance')
    })
  })
})