// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

const mostFrequentChar = (string) => {
  const result = { maximum: 0, character: "" };
  const array = Array.from(string).filter((element, index) => {
    return Array.from(string).indexOf(element) === index;
  });
  for (let index = 0; index < array.length; index++) {
    const targetCharacter = array[index];
    const count = string.match(new RegExp(targetCharacter, "g"));
    if (count.length > result.maximum) {
      result.maximum = count.length;
      result.character = targetCharacter;
    }
  }
  return result.character;
};
console.log(mostFrequentChar("javascript")); // Expected output: "a"
