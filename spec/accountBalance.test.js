const AccountBalance = require('../src/accountBalance');

describe('Account', () => {
let accountBalance, fakeDeposit, fakeDeposit2, fakeWithdrawal

  beforeEach(() => {
    accountBalance = new AccountBalance()
    fakeDeposit = {date: '10/01/2023', deposit: 1000, withdrawal: 0}
    fakeDeposit2 = {date: '13/01/2023', deposit: 2000, withdrawal: 0}
    fakeWithdrawal = {date: '14/01/2023', deposit: 0, withdrawal: 500}
  });
  
  describe('#showBalance', () => {
    it('returns a 0 balance initially', () => {
      expect(accountBalance._show()).toEqual(0);
    });
  });

  describe('#updateBalanceWithTransaction', () => {
    it('returns a 1000 balance after 1000 deposit made', () =>{
      accountBalance.updateWithTransaction(fakeDeposit)
      expect(accountBalance._show()).toEqual(1000)
    })
  })

  describe('#updateBalanceWithTransaction', () => {
    it('returns a 2500 balance after 1000 & 2000 deposits made, plus 500 withdrawal', () =>{
      accountBalance.updateWithTransaction(fakeDeposit)
      accountBalance.updateWithTransaction(fakeDeposit2)
      accountBalance.updateWithTransaction(fakeWithdrawal)
      expect(accountBalance._show()).toEqual(2500)
    })
  })
})