// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

const countConsonants = (string) => {
  const vowel = ["a", "i", "u", "e", "o"];
  const targetArray = Array.from(string.replace(" ", ""));
  const result = targetArray.filter((item) => !vowel.includes(item));
  return result.length;
};

console.log(countConsonants("hello world")); // Expected output: 7
