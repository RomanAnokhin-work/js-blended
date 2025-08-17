// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((preValue, num) => preValue + num, 0);
console.log(sum);


// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.

const products = [
  { name: 'Milk', price: 20 },
  { name: 'Bread', price: 10 },
  { name: 'Eggs', price: 15 },
];

const sumProducts = products
    .filter(product => product.price > 10)
    .reduce((prevValue, product) => prevValue + product.price, 0);

console.log(sumProducts);

// Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.

const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
]

const femaleFriends = friends
    .filter(friend => friend.sex === 'f')
    .map(friend => friend.passport);

console.log(femaleFriends);

// Маємо масив об'єктів, який представляє список замовлень:
// Завдання:  Поверніть список товарів з усіх виконаних замовлень.

const orders = [
  { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
  { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
  { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
];

const completedOrders = orders
    .filter(order => order.status === 'completed')
    .flatMap(order => order.products);

console.log(completedOrders);

//Напиши клас Rectangle який створює об'єкт
//з властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calculateArea() {
        return this.height * this.width;
    }
}

const rectangle1 = new Rectangle(10, 12);

console.log(rectangle1.calculateArea());
