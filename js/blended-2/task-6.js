// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

function findLongestWord(string) {
    let word = "";
    const arr = string.split(" ");
    for (const element of arr) {
        if (element.length > word.length) {
            word = element;
        }
    }
    return word;
}

console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'