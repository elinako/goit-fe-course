const credits = 23580;
const pricePerDroid = 3000;
const promptMessage = "Сколько Вы хотите купить дроидов?";
let droidAmount = prompt(promptMessage);
let message;
let totalPrice = Number(droidAmount) * pricePerDroid;
let balance;

if (droidAmount === null) {
  message = "Отменено пользователем";
} else if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
} else if (droidAmount === "0") {
  message = "Вы не выбрали ни одного дроида";
} else {
  balance = credits % totalPrice;
  message = `Вы купили ${droidAmount} дроидов, на счету осталось ${balance} кредитов`;
}

alert(message);
