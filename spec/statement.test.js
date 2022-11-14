const Statement = require('../src/statement');

describe('Statement', () => {
    describe('#header', () => {
      it('prints statement with column headers', () => {
        statement = new Statement
        expect(statement.header).toEqual('date || credit || debit || balance');
      });
    });

    describe('#print statement', () => {
      it('prints statement with one deposit', () => {
        statement = new Statement
        fakeDeposit = {date: '10/01/2023', deposit: 1000, withdrawal: 0}
        fakeDeposit2 = {date: '13/01/2023', deposit: 2000, withdrawal: 0}
        fakeAccount = {showBalance: () => 1000}
        statement.addTransaction(fakeDeposit)
        statement.addTransaction(fakeDeposit2)
        console.log(statement.format)
        expect(statement.format()).toEqual('10/01/2023 || 1000.00 || || 1000.00');
      });

      it('prints statement with two deposits', () => {
        statement = new Statement
        fakeDeposit = {date: '10/01/2023', deposit: 1000, withdrawal: 0}
        fakeDeposit2 = {date: '13/01/2023', deposit: 2000, withdrawal: 0}
        fakeAccount = {showBalance: () => 1000}
        statement.addTransaction(fakeDeposit)
        statement.addTransaction(fakeDeposit2)
        console.log(statement.format)
        expect(statement.format()).toEqual('10/01/2023 || 1000.00 || || 1000.00\n13/01/2023 || 2000.00 || || 3000.00\n');
      });
    });
  });