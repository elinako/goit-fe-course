let input;
let total = 0;
let numbers = [];
let arr;
let message;
const promptMessage = "Введите, пожалуйста, любое число:";

while (input !== null) {
  input = prompt(promptMessage);
  numbers.push(Number(input));
  // arr = numbers;
  console.log(numbers);
}

for (let i = 0; i < numbers.length; i += 1) {
  total = total + numbers[i];
}

message = `Общая сумма чисел равна ${total}`;

alert(message);
