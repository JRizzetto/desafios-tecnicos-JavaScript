/* Exercise 3: Bank Account with Transaction History
Let’s make your bank system more real-world 👇
Requirements
1 - Class name: BankAccount

2 - Properties:
owner (string)
balance (number)
transactions (array, starts empty [])

3 - Methods:
- deposit(amount)
Adds the amount to the balance
Saves a transaction like { type: "deposit", amount: amount }

- withdraw(amount)
Subtracts from the balance only if enough funds
Saves { type: "withdraw", amount: amount }
Shows "Insufficient funds" if not enough money

- checkBalance()
Logs "Current balance: $[balance]"

- showTransactions()
Lists all transactions in order

💡 Example Output
Deposited $100. New balance: $400
Withdrawn $50. New balance: $350
Current balance: $350
Transactions:
1. deposit - $100
2. withdraw - $50
*/

class BankAccount {
  constructor(owner = "", balance = 0, transactions = []) {
    this.owner = owner;
    this.balance = balance;
    this.transactions = transactions;
  }
  deposit(amount) {
    this.transactions.push({ type: "deposit", amount: amount });
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("The founds is not enough.");
      return;
    }
    this.transactions.push({ type: "withdraw", amount: amount });
    this.balance -= amount;
    console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
  }
  checkBalance() {
    console.log(`Current balance: $${this.balance}`);
  }
  showTransactions() {
    console.log(this.transactions);
  }
}

const account1 = new BankAccount("Jefferson", 500);
account1.deposit(200);
account1.withdraw(300);
account1.checkBalance();
account1.showTransactions();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 2 - Bank Account Class
Create a class called BankAccount with these rules:
1 - Properties:
owner (the account holder name)
balance (starts at 0 by default)

2 - Methods:
deposit(amount) → adds the amount to the balance and shows "Deposited $[amount]. New balance: $[balance]"
withdraw(amount) → subtracts the amount only if there’s enough balance; otherwise, show "Insufficient funds."
checkBalance() → logs "Current balance: $[balance]"

3 - Create one account (for example, "Lucas") and test all methods:
Deposit
Withdraw
Check balance
*/

// class BankAccount {
//   constructor(owner, balance) {
//     this.owner = owner;
//     this.balance = balance;
//   }
//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Deposited ${amount}. New balance: ${this.balance}`);
//   }
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("Insufficient funds");
//       return;
//     }
//     this.balance -= amount;
//     console.log(`withdrawn ${amount}. New balance: ${this.balance}`);
//   }
//   checkBalance() {
//     console.log(`Current balance: ${this.balance}`);
//   }
// }

// const account1 = new BankAccount("Jefferson", 300);
// account1.checkBalance();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1 - Create a class called Car with properties brand and year.
Add a method info() that prints: "This car is a [brand] and it was made in [year]."
Create 2 cars and call the info() method for each.
*/

// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }

//   info() {
//     console.log(`This car is a ${this.brand} and it was made in ${this.year}.`);
//   }
// }

// const car1 = new Car("Toyota", 1990);
// car1.info();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
