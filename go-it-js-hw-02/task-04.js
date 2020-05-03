const formatString = function (string) {
  const nominalLength = 40;
  let stringArr = string.split("");
  let totalLength = 0;
  let newString;

  if (stringArr.length >= nominalLength) {
    stringArr = stringArr.slice(0, 40);
    stringArr.splice(40, 0, "...");
    newString = stringArr.join("");
  } else {
    newString = string;
  }

  return newString;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
