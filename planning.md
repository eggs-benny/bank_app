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


As a banking client
So I can manage my money
I want to be able to see my bank balance with every transaction

As a banking client
So I can update my balance
I want to be make deposits & withdrawals

As a banking client
So I can keep up to date with my account
I can see all my transactions with most recent first


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