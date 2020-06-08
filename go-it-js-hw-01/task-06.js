let input;
let total = 0;
let message;
const array = [];

while (input !== null) {
  const promptMessage = "Введите, пожалуйста, любое число:";
  input = prompt(promptMessage);
  total = Number(input) + total;
  message = `Общая сумма чисел равна ${total}`;
}
