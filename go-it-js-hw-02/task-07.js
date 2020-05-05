const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

let message;

const isLoginValid = function (login) {
  let length = login.length;
  let lengthValid = false;
  if (length <= 16 && length >= 4) {
    lengthValid = true;
  }
  return lengthValid;
};

const isLoginUnique = function (allLogins, login) {
  let content = allLogins.includes(login);
  let loginUnique = true;
  if (content === true) {
    loginUnique = false;
  }
  return loginUnique;
};

const addLogin = function (allLogins, login) {
  let message;
  if (isLoginValid(login) === false) {
    message = "Ошибка! Логин должен быть от 4 до 16 символов";
    //   return;
  } else if (isLoginUnique(allLogins, login) === false) {
    message = "Такой логин уже используется!";
  } else {
    allLogins.push(login);
    message = "Логин успешно добавлен!";
  }
  console.log(allLogins);
  return message;
};

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
