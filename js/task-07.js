'use strict'
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
let transactionID = 0;


const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
      const transactionItem = {
      id: ++transactionID,
      amount: amount,
      type: type,
    }
    // this.transactions.push(transactionItem);
    return transactionItem;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    let transaction = account.createTransaction(amount, Transaction.DEPOSIT);
    account.transactions.push(transaction);
    this.balance += amount;
    // this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    // this.balance >= amount ? ((let transaction = account.createTransaction(amount, Transaction.WITHDRAW)) && (account.transactions.push(transaction))) : alert('Not enough funds')
    if (this.balance >= amount) {
      let transaction = account.createTransaction(amount, Transaction.WITHDRAW);
    account.transactions.push(transaction);
    this.balance -= amount;
      //  this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
    } else {      
      alert('Not enough funds')
    }
      
    
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    // return this.transactions[id]
    for (const item of account.transactions) {
      if (item.id === id) {
        return item
      } 
      
      //  item.id === id ? item : console.log(item);
    }
    return 'sorry, no such ID found';
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalSum = 0;
    for (const item of this.transactions) {
      if (item.type === type) {
        totalSum += item.amount;
      } else {
        continue
      }      
    }
    return totalSum;
   },

  getTransactions() {
    return this.transactions;
  }
};
console.group('account')
account.deposit(20000);
account.withdraw(15000);
account.deposit(10000);
account.deposit(55000);
account.withdraw(15000);
account.withdraw(15000);
console.log('balance: ', account.getBalance()); 
// account.createTransaction(2000, 'deposit')
console.table(account.getTransactions());
console.log(account.getTransactionDetails(2));
console.log('Deposit total: ', account.getTransactionTotal(Transaction.DEPOSIT));
console.log('Withdraw total: ', account.getTransactionTotal(Transaction.WITHDRAW));
console.groupEnd()