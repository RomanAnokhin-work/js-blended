// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++){
        if (isNaN(args[i]) || typeof args[i] === 'string' ) {
            return "is NaN";
        } else {
            sum += args[i];
        }    
    }
    return sum / args.length;
}

console.log(caclculateAverage(1, 3, 676, 767, 54));
console.log(caclculateAverage(1, 3, 676, '767', 54));