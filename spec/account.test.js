const Account = require('../src/account');

describe('Account', () => {
let account, fakeDeposit, fakeDeposit2, fakeWithdrawal

  beforeEach(() => {
    account = new Account()
    fakeDeposit = {date: '10/01/2023', deposit: 1000, withdrawal: 0}
    fakeDeposit2 = {date: '13/01/2023', deposit: 2000, withdrawal: 0}
    fakeWithdrawal = {date: '14/01/2023', deposit: 0, withdrawal: 500}
  });
  
  describe('#showBalance', () => {
    it('returns a 0 balance initially', () => {
      expect(account.showBalance()).toEqual(0);
    });
  });

  describe('#updateBalanceWithTransaction', () => {
    it('returns a 1000 balance after 1000 deposit made', () =>{
      account.updateBalanceWithTransaction(fakeDeposit)
      expect(account.showBalance()).toEqual(1000)
    })
  })

  describe('#updateBalanceWithTransaction', () => {
    it('returns a 1000 balance after 1000 deposit made', () =>{
      account.updateBalanceWithTransaction(fakeDeposit)
      account.updateBalanceWithTransaction(fakeDeposit2)
      account.updateBalanceWithTransaction(fakeWithdrawal) // DRY
      expect(account.showBalance()).toEqual(2500)
    })
  })
})

  // describe('#deposit', () => {
  //   it('returns a 1000 balance after a 1000 deposit', () => {
  //     const account = new Account();
  //     account.deposit(1000);
  //     expect(account.showBalance()).toEqual(1000);
  //   });
  // });

  // describe('#withdraw', () => {
  //   it('returns a balance of 2500 after deposits of 3000 & withdrawal of 500', () => {
  //     const account = new Account();
  //     account.deposit(1000);
  //     account.deposit(2000);
  //     account.withdraw(500);
  //     expect(account.showBalance()).toEqual(2500);
  //   });
  // });
