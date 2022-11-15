const Transaction = require('../src/transaction');

describe('Transaction', () => {
beforeEach(() => {
  jest
  .useFakeTimers()
  .setSystemTime(new Date('2023-01-10'))
});


  it('checks deposit & date are present for a transaction', () => {
    const transaction = new Transaction(1000,0)
    expect(transaction.deposit).toEqual(1000)
    expect(transaction.date).toEqual('10/01/2023')
  });

  it('checks withdrawal & date are present for a transaction', () => {
    const transaction = new Transaction(0,500)
    expect(transaction.withdrawal).toEqual(500)
    expect(transaction.date).toEqual('10/01/2023')
  });
});
