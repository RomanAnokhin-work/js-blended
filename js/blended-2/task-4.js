// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

function calcSum(arr) {
    let sum = 0;
    const sumArr = [];
    for (let i = 0; i < arr.length; i++){
        sum = arr[i] + arr[i + 1];
        sumArr.push(sum);
        if (sumArr.length === arr.length - 1) {
           return sumArr; 
        }
    }
}

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
console.log(calcSum(someArr));