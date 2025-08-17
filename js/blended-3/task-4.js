// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers = [2, 4, 6, 8, 10];

const isPair = numbers.every(item => !(item % 2));
console.log(isPair);
