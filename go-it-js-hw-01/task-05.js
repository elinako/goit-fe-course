const china = "Китай";
const chile = "Чили";
const australia = "Австралию";
const india = "Индию";
const jamaica = "Ямайку";

const chinaCost = 100;
const chileCost = 250;
const australiaCost = 170;
const indiaCost = 80;
const jamaicaCost = 120;

const promptMessage = "Укажите, пожалуйста, страну доставки";
let country = prompt(promptMessage);
let message;

if (country === null) {
  message = "Вы отменили доставку";
} else {
  let countryName = country.toLowerCase(country);

  switch (countryName) {
    case "китай":
      message = `Доставка в ${china} будет стоить ${chinaCost} кредитов`;
      break;

    case "чили":
      message = `Доставка в ${chile} будет стоить ${chileCost} кредитов`;
      break;
    case "австралия":
      message = `Доставка в ${australia} будет стоить ${australiaCost} кредитов`;
      break;
    case "индия":
      message = `Доставка в ${india} будет стоить ${indiaCost} кредитов`;
      break;
    case "ямайка":
      message = `Доставка в ${jamaica} будет стоить ${jamaicaCost} кредитов`;
      break;

    default:
      message = "В вашей стране доставка не доступна";
  }
}

alert(message);
