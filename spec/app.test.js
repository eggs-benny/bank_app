const Transaction = require('../src/transaction');
const Account = require('../src/account');
const Statement = require('../src/statement');
const App = require('../app');

jest
.useFakeTimers()
.setSystemTime(new Date('2023-01-10'))

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
      expect(app.printStatement()).toMatch('date || credit || debit || balance')
    })
  })

  describe('#makeDeposit', () => {
    it('prints a statement showing one deposit', () =>{
      app.makeDeposit(1000)
      expect(app.printStatement()).toMatch('10/01/2023 || 1000.00 || || 1000.00')
    })
  })
})