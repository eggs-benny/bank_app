const { default: expect } = require('expect');
const BankAccount = require('../bankAccount');

describe('BankAccount', () => {
  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  jest.useFakeTimers().setSystemTime(new Date('2023-01-10'));

  describe('#printStatement', () => {
    it('prints an empty statement (just headers)', () => {
      expect(bankAccount.printStatement()).toMatch(
        'date || credit || debit || balance'
      );
    });
  });

  describe('#makeDeposit', () => {
    it('returns a statement displaying one deposit', () => {
      bankAccount.makeDeposit(1000);
      expect(bankAccount.printStatement()).toMatch(
        '10/01/2023 || 1000.00 || || 1000.00'
      );
    });

    it('returns a statement displaying two deposits', () => {
      bankAccount.makeDeposit(1000);
      bankAccount.makeDeposit(2000);
      expect(bankAccount.printStatement()).toMatch(
        '10/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00'
      );
    });

    it('returns a statement displaying two deposits & a withdrawal', () => {
      bankAccount.makeDeposit(1000);
      bankAccount.makeDeposit(2000);
      bankAccount.makeWithdrawal(500);
      expect(bankAccount.printStatement()).toMatch(
        '10/01/2023 || || 500.00 || 2500.00\n10/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00'
      );
    });
  });

  describe('Edge Cases', () => {
    it('rounds deposit / withdrawal to 2 decimal places', () => {
      bankAccount.makeDeposit(1000.013);
      bankAccount.makeWithdrawal(500.066);
      expect(bankAccount.printStatement()).toMatch(
        '10/01/2023 || || 500.07 || 499.95\n10/01/2023 || 1000.01 || || 1000.01'
      );
    });

    it('returns error message if deposit is -ve', () => {
      expect(bankAccount.makeDeposit(-1000)).toBe(`Error: Deposit can't be <= 0. To withdraw, use makeWithdrawal() function.`)
      expect(bankAccount.makeDeposit(0)).toBe(`Error: Deposit can't be <= 0. To withdraw, use makeWithdrawal() function.`)
      expect(bankAccount.makeWithdrawal(-1000)).toBe(`Error: Withdrawal can't be <= 0. To deposit, use makeDeposit() function.`)
      expect(bankAccount.makeWithdrawal(0)).toBe(`Error: Withdrawal can't be <= 0. To deposit, use makeDeposit() function.`)
    });
  });
});
