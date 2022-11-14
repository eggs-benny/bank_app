const Account = require('../src/account')

describe('Account', () => {
  describe('#showBalance', () => {
    it('returns a 0 balance initially', () =>{
      const account = new Account
      expect(account.showBalance()).toEqual(0)
    })
  })

  describe('#deposit', () => {
    it('returns a 1000 balance after a 1000 deposit', () =>{
      const account = new Account
      account.deposit(1000)
      expect(account.showBalance()).toEqual(1000)
    })
  })

  describe('#withdraw', () => {
    it('returns a 1000 balance after a 1000 deposit', () =>{
      const account = new Account
      account.deposit(1000)
      expect(account.showBalance()).toEqual(1000)
    })
  })
})