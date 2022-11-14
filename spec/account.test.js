const Account = require('../src/account');

describe('Account', () => {
  describe('#showBalance', () => {
    it('returns a 0 balance initially', () => {
      const account = new Account();
      expect(account.showBalance()).toEqual(0);
    });
  });

  describe('#updateBalanceWithTransaction', () => {
    it('returns a 1000 balance after 1000 deposit made', () =>{
      const account = new Account()
      const fakeDeposit = {deposit: 1000, withdrawal: 0}
      account.updateBalanceWithTransaction(fakeDeposit)
      expect(account.showBalance()).toEqual(1000)
    })
  })

  describe('#updateBalanceWithTransaction', () => {
    it('returns a 1000 balance after 1000 deposit made', () =>{
      const account = new Account()
      const fakeDeposit = {deposit: 1000, withdrawal: 0}
      const fakeDeposit2 = {deposit: 2000, withdrawal: 0}
      const fakeWithdrawal = {deposit: 0, withdrawal: 500}
      account.updateBalanceWithTransaction(fakeDeposit)
      account.updateBalanceWithTransaction(fakeDeposit2)
      account.updateBalanceWithTransaction(fakeWithdrawal)
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
