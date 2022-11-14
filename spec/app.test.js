const Transaction = require('../src/transaction');
const Account = require('../src/account');
const Statement = require('../src/statement');
const App = require('../app');


describe('App', () => {
  let transaction, account, statement
  const log = console.log

  beforeEach(() => {
    console.log = jest.fn()
    app = new App()
    transaction = new Transaction();
    account = new Account();
    statement = new Statement();
  })

  afterAll(() => {
    console.log = log;
  })

  describe('#printStatement', () => {
    it('prints an empty statement (just headers)', () =>{
      app.printStatement()
      expect(console.log).toHaveBeenCalledWith(expect.stringContaining('date || credit || debit || balance'))
    })
  })

  describe('#makeDeposit', () => {
    it('prints a statement showing one deposit', () =>{
      app.printStatement()
      app.makeDeposit(1000)
      expect(console.log).toHaveBeenCalledWith(expect.stringContaining('10/01/2023 || 1000.00 || || 1000.00'))
    })
  })
})