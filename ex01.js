// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

const capitalizeWords = (string) => {
  const array = string.split(" ");
  let result = "";
  for (let index = 0; index < array.length; index++) {
    if (index !== 0) result += " ";
    result += array[index].charAt(0).toUpperCase() + array[index].slice(1);
  }
  return result;
};
console.log(capitalizeWords("hello world")); // Expected output: "Hello World"
