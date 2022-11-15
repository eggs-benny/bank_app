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

  describe('#makeTransaction', () => {
    it('returns a statement displaying one deposit', () => {
      bankAccount.makeTransaction('deposit', 1000);
      expect(bankAccount.printStatement()).toMatch(
        '10/01/2023 || 1000.00 || || 1000.00'
      );
    });

    it('returns a statement displaying two deposits', () => {
      bankAccount.makeTransaction('deposit', 1000);
      bankAccount.makeTransaction('deposit', 2000);
      expect(bankAccount.printStatement()).toMatch(
        '10/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00'
      );
    });

    it('returns a statement displaying two deposits & a withdrawal', () => {
      bankAccount.makeTransaction('deposit', 1000);
      bankAccount.makeTransaction('deposit', 2000);
      bankAccount.makeTransaction('withdrawal', 500);
      expect(bankAccount.printStatement()).toMatch(
        '10/01/2023 || || 500.00 || 2500.00\n10/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00'
      );
    });
  });

  describe('Edge Cases', () => {
    it('rounds deposit / Transaction to 2 decimal places', () => {
      bankAccount.makeTransaction('deposit', 1000.013);
      bankAccount.makeTransaction('withdrawal', 500.066);
      expect(bankAccount.printStatement()).toMatch(
        '10/01/2023 || || 500.07 || 499.95\n10/01/2023 || 1000.01 || || 1000.01'
      );
    });

    it('returns error message if deposit or Transaction <= 0', () => {
      expect(bankAccount.makeTransaction('deposit', -1000)).toBe(`Error: input can't be <= 0.`)
      expect(bankAccount.makeTransaction('deposit', 0)).toBe(`Error: input can't be <= 0.`)
      expect(bankAccount.makeTransaction('withdrawal', -1000)).toBe(`Error: input can't be <= 0.`)
      expect(bankAccount.makeTransaction('withdrawal', 0)).toBe(`Error: input can't be <= 0.`)
    });

    it('returns error message if deposit or Transaction is not a number', () => {
      expect(bankAccount.makeTransaction('deposit', 'one')).toBe(`Error: input must be a number`)
      expect(bankAccount.makeTransaction('deposit', new Object)).toBe(`Error: input must be a number`)
    });

    it('returns error message if transaction is anything other than "deposit" or "withdrawal"', () => {
      expect(bankAccount.makeTransaction('car', 1000)).toBe(`Error: transaction must be 'withdrawal' or 'deposit' only`)
      expect(bankAccount.makeTransaction(1000, 1000)).toBe(`Error: transaction must be 'withdrawal' or 'deposit' only`)
    });
  });
});
