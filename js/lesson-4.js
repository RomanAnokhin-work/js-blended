// 1 - отримай body елемент і виведи його в консоль;
const body = document.querySelector("body");
console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector("#title");
console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector(".list");
console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topic = document.querySelectorAll("[data-topic]");
console.log(topic);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(topic[0]);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(topic[topic.length - 1]);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const h1 = document.querySelector("h1");
console.log(h1.nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3 = document.querySelectorAll("h3");
console.log(h3);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
h3.forEach((title) => title.classList.add("active"));
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navigation = document.querySelector('[data-topic="navigation"]');
console.log(navigation);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navigation.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const navigationParagraph = navigation.querySelector("p");
navigationParagraph.textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const manipulation = document.querySelector(`[data-topic=${currentTopic}]`);
console.log(manipulation);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
manipulation.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completed = document.querySelector(".completed");
console.log(completed);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
completed.closest("li").remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newP = document.createElement("p");
newP.textContent = "Об'єктна модель документа (Document Object Model)";
title.insertAdjacentElement("afterend", newP);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const newLi = document.createElement("li");
const newH3 = document.createElement("h3");
const newPar = document.createElement("p");
newH3.textContent = "Властивість innerHTML";
newPar.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
newLi.insertAdjacentElement("afterbegin", newH3);
newLi.insertAdjacentElement("beforeend", newPar);
list.insertAdjacentElement("beforeend", newLi);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const newLiHTML = `<li>
<h3>Властивість innerHTML</h3>
<p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
</li>`;
list.insertAdjacentHTML("beforeend", newLiHTML);

// 20 - очисти список
list.innerHTML = "";

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const numberContainer = document.createElement("div");
numberContainer.classList.add("number-container");
body.insertAdjacentElement("beforeend", numberContainer);

for (let index = 0; index < 100; index++) {
  const num = randomNumber();
  const numEl = document.createElement("div");
  numEl.classList.add("number");
  numEl.textContent = num;
  if (num % 2 === 0) {
    numEl.classList.add("even");
  } else {
    numEl.classList.add("odd");
  }
  numberContainer.insertAdjacentElement("beforeend", numEl);
}

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const formInput = document.querySelector(".js-username-input");

formInput.addEventListener("input", inputHandler);
function inputHandler(event) {
  const value = event.target.value.trim();
  console.log(value);

  if (value.length < 6) {
    formInput.classList.remove("success");
    formInput.classList.add("error");
    return;
  } else {
    formInput.classList.remove("error");
    formInput.classList.add("success");
  }
}

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
formInput.addEventListener("focus", focusHandler);
function focusHandler(event) {
  const text = event.target.value.trim();
  if (text !== "") {
    formInput.style.outline = "3px solid green";
  } else {
    formInput.style.outline = "3px solid red";
  }
}

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
formInput.addEventListener("blur", blurHandler);
function blurHandler(event) {
  const text = event.target.value.trim();
  if (text !== "") {
    formInput.style.outline = "3px solid lime";
  } else {
    formInput.style.outline = "3px solid red";
  }
}

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector(".js-contact-form");
const checkbox = document.querySelector(".js-policy-checkbox");
const span = document.querySelector(".js-username-output");

form.addEventListener("submit", submitHandler);
function submitHandler(event) {
  event.preventDefault();
  const inputValue = formInput.value;
  const checkValue = checkbox.checked;

  if (inputValue.length !== 0 && checkValue) {
    const user = {
      userName: inputValue,
    };
    console.log(user);
  } else {
    alert("Заповніть форму");
  }
}
form.addEventListener("input", handlerInput);
function handlerInput(event) {
  const inputVal = formInput.value.trim();

  if (inputVal !== "") {
    span.textContent = inputVal;
  } else {
    span.textContent = "Anonymous";
  }
}

form.addEventListener("submit", clearForm);
function clearForm(event) {
  formInput.value = "";
  checkbox.checked = false;
    span.textContent = "Anonymous";
    formInput.classList.remove("success", "error");
    formInput.style.outline = "none";
}

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const square = document.querySelector(".box");
const decreaseBtn = document.querySelector(".js-decrease");
const increaseBtn = document.querySelector(".js-increase");

decreaseBtn.addEventListener("click", decreaseHendler);
function decreaseHendler() {
  const currentSize = parseInt(getComputedStyle(square).width);
  square.style.width = `${currentSize - 20}px`;
  square.style.height = `${currentSize - 20}px`;
}

increaseBtn.addEventListener("click", increaseHendler);
function increaseHendler() {
  const currentSize = parseInt(getComputedStyle(square).width);
  square.style.width = `${currentSize + 20}px`;
  square.style.height = `${currentSize + 20}px`;
}
