const Statement = require('../src/statement');

describe('Statement', () => {
    describe('#printHeader', () => {
      it('prints statement with column headers', () => {
        statement = new Statement
        expect(statement).toEqual('date || credit || debit || balance');
      });
    });
  });