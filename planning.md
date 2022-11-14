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

Balance / statement framework
- Each transaction updates the balance
- Statement can be printed, it prints each 
- Has header

``
┌────────────────────────────┐
│ Account                    │
│                            │
│ - add transaction          │
│ -                          │
│ - search_by_title(keyword) │
│   => [tracks...]           │
└───────────┬────────────────┘
            │
            │ owns a list of
            ▼
┌─────────────────────────┐
│ Transaction             │
│                         │
│ - date                  │
│ - amount                │
│                         │
└─────────────────────────┘

``` javascript
function Transaction(date = new Date(), amount) {
  this.date = date
  this.amount = amount
}

const transaction1 = new Transaction(Date('2023-01-10T00:00:00'), 1000.00)
const transaction2 = new Transaction(Date('2023-01-13T00:00:00'), 2000.00)
const transaction3 = new Transaction(Date('2023-01-14T00:00:00'), -500.00)

class BankAccount {
  constructor(date, amount) {
    this.date = date
    this.balance = 0
  }

  balance() {
    // sums all previous transactions including itself
  }



  transaction(date, amount, action)

  addRolls(roll) {
    if (this.isComplete()) {
      return;
    }
    this.frameArray.push(roll);
  }

  frameArr() {
    return this.frameArray;
  }

  sumRolls() {
    let sum = 0;
    this.frameArray.map((roll) => (sum += roll));
    return sum;
  }

  isStrike() {
    return this.frameArray[0] === 10;
  }

  isSpare() {
    return !this.isStrike() && this.sumRolls() === 10;
  }

  isComplete() {
    return this.isStrike() || this.frameArray.length === 2;
  }

  firstRoll() {
    return this.frameArray[0];
  }
}