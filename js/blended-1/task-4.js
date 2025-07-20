// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples
const minutes = prompt("Введіть кількість хвилин:");
const hours = Math.floor(minutes / 60);
const remainingMinutes = minutes % 60;
const formatHours = String(hours).padStart(2, '0');
const formatMinutes = String(remainingMinutes).padStart(2, '0');
console.log(`${formatHours}:${formatMinutes}`);