 // Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
//
// Вимоги до класу Calculator
//
// - Метод number(value)
//
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

class Calculator {

    constructor() {
        this.result = 0
    }

    number(value) {
        this.result = value;
        return this;
    }

    getResult() {
        return this.result;
    }

    add(value) {
        this.result += value;
        return this;
    }

    substruct(value) {
        this.result -= value;
        return this;
    }

    divide(value) {
        if (value !== 0) {
            this.result /= value;
            return this;
        }
        return "Divide on 0";
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

}
// Приклад використання:
const calc = new Calculator();


const result = calc
    .number(10) // Встановлюємо початкове значення 10
    .add(5) // Додаємо 5 (10 + 5 = 15)
    .substruct(3) // Віднімаємо 3 (15 - 3 = 12)
    .multiply(4) // Множимо на 4 (12 * 4 = 48)
    .divide(2) // Ділимо на 2 (48 / 2 = 24)
.getResult(); // Отримуємо результат: 24


console.log(result); // 24

