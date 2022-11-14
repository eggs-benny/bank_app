const Statement = require('../src/statement');

describe('Statement', () => {
    describe('#header', () => {
      it('prints statement with column headers', () => {
        statement = new Statement
        expect(statement.header).toEqual('date || credit || debit || balance');
      });
    });

    describe('#print statement', () => {
      it('prints statement one deposit as entry', () => {
        statement = new Statement
        fakeDeposit = {date: '10/01/2023', deposit: 1000, withdrawal: 0}
        fakeAccount = {showBalance: () => 1000}
        statement.addTransaction(fakeDeposit)
        expect(statement.format()).toEqual('10/01/2023 || 1000.00 || || 1000.00');
      });
    });
  });