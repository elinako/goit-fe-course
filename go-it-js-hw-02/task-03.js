const findLongestWord = function (string) {
  const stringArr = string.split(" ");

  let longest = stringArr[0];

  for (let i = 0; i < stringArr.length; i += 1) {
    if (stringArr[i].length > longest.length) {
      longest = stringArr[i];
    }
  }

  return longest;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
