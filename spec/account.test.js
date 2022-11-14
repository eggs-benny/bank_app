const Account = require('../src/account')

describe('Account', () => {
  describe('#showBalance', () => {
    it('returns a 0 balance initially', () =>{
      const account = new Account
      expect(account.showBalance()).toEqual(0)
    })
  })
})