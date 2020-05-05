let input;
let total = 0;
let numbers = [];
let arr;
let message;

while (input !== null) {
  const promptMessage = "Введите, пожалуйста, любое число:";
  input = prompt(promptMessage);
  numbers.push(Number(input));
  arr = numbers;
  console.log(arr);
}

for (let i = 0; i < arr.length; i += 1) {
  total = total + arr[i];
  message = `Общая сумма чисел равна ${total}`;
}

alert(message);
