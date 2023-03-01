# Bank App

## Dependencies & installation
This program runs in JavaScript, is tested using Jest & run in Node.
Please take the following steps:
Clone this repo: 
- git clone https://github.com/eggs-benny/bank_tech_test

Use node:
- nvm use node 

Setup & install npm package:
- npm init -y
- npm install (installs dependencies)

Add Jest 
- npm add jest
- npm install -D jest-environment-jsdom (sets up latest jest environment)

Run Jest tests:
- jest

## Approach taken for this tech test

The program aims to mimic the actions of a real bank account in how it has been setup. It can be run locally on the console via an app (bankAccount.js). This app controls 3 classes (Transaction, Statement, AccountBalance) and, as outlined in the brief, a command line interface taking input from STDIN has not been implemented, but the program can be controlled using node (project run commands below).

The app controls the following classes:
- Transaction
Sets up a container for transactions, with a starting balance of 0, today's date (added automatically) & the ability to withdraw or deposit which due to the front end, only allows input of one or the other.
- AccountBalance
Updates the balance element in the transaction object after a transaction is made.
- Statement
Adds completed transactions (with updated balance) to an array that is then formatted into a printable format, and printed.


The program is intended to be used by setting up a new account, adding deposits or withdrawals and then printing a statement once all deposits or withdrawals have taken place.
It the BankManager app can be controlled thus:

Run node:
- node

Setup new account:
- const BankAccount = require('./bankAccount')
- bankAccount = new BankAccount()

Deposit or Withdraw an amount into/from your account:
- bankAccount.makeDeposit(transactionType, amount)

Print a statement of your transactions:
- bankAccount.printStatement()

## Input handling
- transactionType
must be 'deposit' or 'withdrawal' else an error will be thrown.
- amount
must be a positive number greater than 0, else an error will be thrown.
numbers will be rounded to 2 decimal places.

## Testing
Unit tests & integration tests all pass, with a >95% coverage.

## Usage
[ScreenShot](./appDisplay.png) of the app's usage.
Feel free to follow these steps to test the app yourself!
