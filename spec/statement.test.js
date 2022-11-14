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
        expect(statement.format).toEqual('10/01/2023 || 1000.00 || || 1000.00');
      });
    });
  });