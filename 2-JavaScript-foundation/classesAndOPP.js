/* Exercise 4: Bank with Multiple Accounts
Now you’ll simulate a small bank system that manages several accounts.

1 - Create two classes:
1️⃣ BankAccount (you can reuse your last version)
2️⃣ Bank

BankAccount
- Properties: owner, balance, transactions
- Methods:
deposit(amount)
withdraw(amount)
checkBalance()
showTransactions()

Bank
Properties:
accounts → an array to store all BankAccount objects

Methods:
1 - addAccount(account) → adds a new account to the bank
2 -findAccount(owner) → returns the account with that owner’s name
3 - transfer(fromOwner, toOwner, amount) →
- Finds both accounts
- Withdraws from one and deposits into the other
- Shows "Transfer of $[amount] from [fromOwner] to [toOwner] completed."

💡 Example Output
Transfer of $100 from Jefferson to Maria completed.

*/

class BankAccount {
  constructor(owner = "", balance = 0, transactions = []) {
    this.owner = owner;
    this.balance = balance;
    this.transactions = transactions;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Deposit amount must be a positive number.");
      return this.balance;
    }
    this.balance += amount;
    this.transactions.push({ type: "deposit", amount: amount });
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    return this.balance;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Withdraw amount must be a positive number.");
      return false;
    }
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return false;
    }
    this.balance -= amount;
    this.transactions.push({ type: "withdraw", amount: amount });
    console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    return true;
  }

  checkBalance() {
    console.log(`Current balance: $${this.balance}`);
    return this.balance;
  }

  showTransactions() {
    if (this.transactions.length === 0) {
      console.log("No transactions.");
      return;
    }
    console.log("Transactions");
    this.transactions.forEach((t, i) => {
      console.log(`${i + 1}. ${t.type} - $${t.amount}`);
    });
  }
}

class Bank {
  constructor() {
    this.accounts = [];
  }

  addAccount(account) {
    // Evita contas com o mesmo nome
    if (this.findAccount(account.owner)) {
      console.log(`Account for ${account.owner} already exists.`);
      return false;
    }
    this.accounts.push(account);
    console.log(`Account for ${account.owner} added successfully.`);
    return true;
  }

  findAccount(owner) {
    return this.accounts.find((acc) => acc.owner === owner);
  }

  transfer(fromOwner, toOwner, amount) {
    const fromAcc = this.findAccount(fromOwner);
    const toAcc = this.findAccount(toOwner);

    if (!fromAcc) {
      console.log(`From account "${fromOwner}" not found.`);
      return false;
    }

    if (!toAcc) {
      console.log(`From account "${toOwner}" not found.`);
      return false;
    }

    if (typeof amount !== "number" || amount <= 0) {
      console.log("Transfer amount must be a positive number.");
      return false;
    }

    const withdraw = fromAcc.withdraw(amount);
    if (!withdraw) {
      console.log("Transfer failed: insufficient funds or invalid amount.");
      return false;
    }

    toAcc.deposit(amount);

    console.log(
      `Transfer of $${amount} from ${fromOwner} to ${toOwner} completed.`
    );
    return true;
  }
}

const bank = new Bank();

const accJeff = new BankAccount("Jefferson", 500);
const accMaria = new BankAccount("Maria", 300);

bank.addAccount(accJeff);
bank.addAccount(accMaria);

bank.transfer("Jefferson", "Maria", 100);

accJeff.checkBalance();
accMaria.checkBalance();

accJeff.showTransactions();
accMaria.showTransactions();

bank.transfer("Jefferson", "Maria", 1000);
bank.transfer("Someone", "Maria", 50);
bank.transfer("Jefferson", "Maria", -10);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

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

// class BankAccount {
//   constructor(owner = "", balance = 0, transactions = []) {
//     this.owner = owner;
//     this.balance = balance;
//     this.transactions = transactions;
//   }
//   deposit(amount) {
//     this.transactions.push({ type: "deposit", amount: amount });
//     this.balance += amount;
//     console.log(`Deposited $${amount}. New balance: $${this.balance}`);
//   }
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("The founds is not enough.");
//       return;
//     }
//     this.transactions.push({ type: "withdraw", amount: amount });
//     this.balance -= amount;
//     console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
//   }
//   checkBalance() {
//     console.log(`Current balance: $${this.balance}`);
//   }
//   showTransactions() {
//     console.log(this.transactions);
//   }
// }

// const account1 = new BankAccount("Jefferson", 500);
// account1.deposit(200);
// account1.withdraw(300);
// account1.checkBalance();
// account1.showTransactions();

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
