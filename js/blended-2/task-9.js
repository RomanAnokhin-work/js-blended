// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  read(a, b) {
    this.firstValue = a;
    this.secondValue = b;
  },
  sum() {
    if (this.exist()) {
      return this.firstValue + this.secondValue;
    } else {
      return "No such propeties";
    }
  },
  mult() {
    if (this.exist()) {
      return this.firstValue * this.secondValue;
    } else {
      return "No such propeties";
    }
  },
  exist() {
    if (this.firstValue && this.secondValue) {
      return true;
    } else {
      return false;
    }
  },
};

calculator.read(1, 2);
console.log(calculator.mult());
console.log(calculator.sum());

calculator.read(1);
console.log(calculator.mult());
console.log(calculator.sum());
