const AccountManager = require('../accountManager');

describe('AccountManager', () => {
  beforeEach(() => {
    app = new AccountManager()
  })

  jest
  .useFakeTimers()
  .setSystemTime(new Date('2023-01-10'))

  describe('#printStatement', () => {
    it('prints an empty statement (just headers)', () =>{
      expect(app.printStatement()).toMatch('date || credit || debit || balance')
    })
  })

  describe('#makeDeposit', () => {
    it('returns a statement displaying one deposit', () =>{
      app.makeDeposit(1000)
      expect(app.printStatement()).toMatch('10/01/2023 || 1000.00 || || 1000.00')
    })

    it('returns a statement displaying two deposits', () =>{
      app.makeDeposit(1000)
      app.makeDeposit(2000)
      expect(app.printStatement()).toMatch('10/01/2023 || 1000.00 || || 1000.00\n10/01/2023 || 2000.00 || || 3000.00')
    })

    it('returns a statement displaying two deposits & a withdrawal', () =>{
      app.makeDeposit(1000)
      app.makeDeposit(2000)
      app.makeWithdrawal(500)
      expect(app.printStatement()).toMatch('10/01/2023 || 1000.00 || || 1000.00\n10/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || || 500.00 || 2500.00')
    })
  })
})