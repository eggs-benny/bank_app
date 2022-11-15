const AccountManager = require('../accountManager');

describe('AccountManager', () => {
  beforeEach(() => {
    accountManager = new AccountManager()
  })

  jest
  .useFakeTimers()
  .setSystemTime(new Date('2023-01-10'))

  describe('#printStatement', () => {
    it('prints an empty statement (just headers)', () =>{
      expect(accountManager.printStatement()).toMatch('date || credit || debit || balance')
    })
  })

  describe('#makeDeposit', () => {
    it('returns a statement displaying one deposit', () =>{
      accountManager.makeDeposit(1000)
      expect(accountManager.printStatement()).toMatch('10/01/2023 || 1000.00 || || 1000.00')
    })

    it('returns a statement displaying two deposits', () =>{
      accountManager.makeDeposit(1000)
      accountManager.makeDeposit(2000)
      expect(accountManager.printStatement()).toMatch('10/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00')
    })

    it('returns a statement displaying two deposits & a withdrawal', () =>{
      accountManager.makeDeposit(1000)
      accountManager.makeDeposit(2000)
      accountManager.makeWithdrawal(500)
      expect(accountManager.printStatement()).toMatch('10/01/2023 || || 500.00 || 2500.00\n10/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00')
    })
  })
})