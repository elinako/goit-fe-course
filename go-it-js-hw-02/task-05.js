const SPAM = "spam";
const SALE = "sale";

const checkForSpam = function (message) {
  const newMessage = message.toLowerCase();
  const messageArr = newMessage.split(" ");
  let result = false;
  for (const element of messageArr) {
    if (element.includes(SPAM) || element.includes(SALE)) {
      result = true;
    }
  }

  return result;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get  best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
