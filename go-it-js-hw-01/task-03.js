const ADMIN_PASSWORD = "jqueryismyjam";
const passwordRequest = "Введите, пожалуйста, пароль:";
let password = prompt(passwordRequest);
let message;

if (password == ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (password == null) {
  message = "Отменено пользователем!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
