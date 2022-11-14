**Brief**
- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)

- Deposits, withdrawal.

- Account statement (date, amount, balance) printing.

- Data can be kept in memory (it doesn't need to be stored to a database or anything).

NO DB
NO STDIN

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

--

**User Stories**
As a customer
So I can manage my money
I want to be able to see my bank balance after any transaction

As a customer
So I can add money to account
I want to be make deposits

As a customer
So I can spend money I have
I want to be make withdrawals

As a customer
So I can keep up to date with my account
I can see all statement of transactions, dated, with most recent first


-----
**Planning/Design**

EXCALIDRAW: https://excalidraw.com/#json=i4X7bzwM16nHVXs63xMtI,tnwl1m44zZkEFheNwBhZoQ

Account
balance = returns total
withdraw & deposit = return amount
balance += deposit
balance -= deposit
Start at 0

Transaction framework:
- A date
- An action (deposit / withdrawal)
- An amount

Account framework
- Each transaction updates the balance
- Statement can be printed, it prints each transaction to date
- Statement includes header

``` javascript
Class Transaction() {
  this.date = date
  this.amount = amount
}

Class Account() {
  this.balance = 0

  showBalance(){
    // shows current balance
  }

  updateBalanceWithTransaction(transaction) {
    // updates balance with a transaction (deposit / withdrawal)
  }
}
```
**Tests**
Unit Test - Transaction
Checks deposit:
- deposit: 1000, date: '13/01/2023'
expect(transaction.date).toEqual('13/01/2023')
expect(transaction.deposit).toEqual(1000)

Checks withdrawal:
- withdrawal: 500, date: '13/01/2023'
expect(transaction.date).toEqual('13/01/2023')
expect(transaction.withdrawal).toEqual(500)

Unit Test - Account
- show balance, starting at 0
expect(account.showBalance).toEqual(0)

- show balance, deposit 1000
expect(account.showBalance).toEqual(1000)

- show balance, deposit 1000+2000, withdraw 500
expect(account.showBalance).toEqual(2500)