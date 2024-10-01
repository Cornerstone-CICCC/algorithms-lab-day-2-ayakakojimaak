// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

const countWordOccurrences = (string, word) => {
  const regex = new RegExp(word, "g");
  return string.match(regex).length;
};
console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2
