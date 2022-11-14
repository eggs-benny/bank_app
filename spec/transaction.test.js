const Transaction = require('../src/transaction');

describe('Transaction', () => {
  it('checks an amount is present for the transaction', () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2023-01-10'))

    const transaction = new Transaction(1000)
    expect(transaction.amount).toEqual(1000)
    expect(transaction.date).toEqual('10/01/2023')
  });

  describe('#isDeposit', () => {
    it('returns true if amount is +ve', () => {
    const transaction = new Transaction(1000)
    expect(transaction.isDeposit()).toBe(true)
    })
  })

  describe('#isWithdrawal', () => {
    it('returns true if amount is -ve', () => {
    const transaction = new Transaction(-1000)
    expect(transaction.isDeposit()).toBe(false)
    expect(transaction.isWithdrawal()).toBe(true)
    })
  })
});
