import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";

// Обираю поле форми
const form = document.querySelector(".feedback-form");

// Відстежую на формі подію інпут
const formAction = form.addEventListener('input', throttle(saveToLocalStorage, 500));

// Створення змінних email and message
let email = form.querySelector('input[name="email"]');
let message = form.querySelector('textarea[ name="message"]');


// Створюємо функцію яка буде створювати об'єкт email and message
function saveToLocalStorage() {
const feedback = {
    email: email.value,
    message: message.value,
}
// Зберігаю значення полів форми в LocalStorrage (ставлю в функцію так як feedback повинно бути видно)
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
};


//  Перевіряю чи є збереженні дані у LocalStorage
const savedFeedback = localStorage.getItem(LOCALSTORAGE_KEY);

if(savedFeedback){

  const savedFormData = JSON.parse(savedFeedback);
  email.value = savedFormData.email;
  message.value = savedFormData.message;
};


// // Під час сабміту форми очищую сховище і поля форми, 
// а також виводь у консоль об'єкт з полями email, 
// message та їхніми поточними значеннями.

form.addEventListener('submit', (event) => {
event.preventDefault();


// Виводимо об'єкт з полями email та message в консоль
const feedback = {
    email: email.value,
    message: message.value,
  };


localStorage.removeItem(LOCALSTORAGE_KEY);
email.value = '';
message.value = '';

console.log(feedback);


});

