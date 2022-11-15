const Statement = require('../src/statement');

describe('Statement', () => {
  let statement, fakeDeposit, fakeDeposit2, fakeWithdrawal;

  beforeEach(() => {
    statement = new Statement();
    fakeDeposit = {
      date: '10/01/2023',
      deposit: 1000,
      withdrawal: 0,
      balance: 1000,
    };
    fakeDeposit2 = {
      date: '13/01/2023',
      deposit: 2000,
      withdrawal: 0,
      balance: 3000,
    };
    fakeWithdrawal = {
      date: '14/01/2023',
      deposit: 0,
      withdrawal: 500,
      balance: 2500,
    };
  });

  describe('#header', () => {
    it('returns column headers', () => {
      expect(statement.header).toEqual('date || credit || debit || balance');
    });
  });

  describe('#printStatement', () => {
    it('returns statement with one deposit', () => {
      statement.addTransaction(fakeDeposit);
      expect(statement.printStatement()).toMatch(
        '10/01/2023 || 1000.00 || || 1000.00'
      );
    });

    it('returns statement with two deposits', () => {
      statement.addTransaction(fakeDeposit);
      statement.addTransaction(fakeDeposit2);
      expect(statement.printStatement()).toMatch(
        '10/01/2023 || 1000.00 || || 1000.00\n13/01/2023 || 2000.00 || || 3000.00'
      );
    });

    it('returns statement with two deposits & a withdrawal', () => {
      statement.addTransaction(fakeDeposit);
      statement.addTransaction(fakeDeposit2);
      statement.addTransaction(fakeWithdrawal);
      expect(statement.printStatement()).toMatch(
        '10/01/2023 || 1000.00 || || 1000.00\n13/01/2023 || 2000.00 || || 3000.00\n14/01/2023 || || 500.00 || 2500.00'
      );
    });
  });
});
