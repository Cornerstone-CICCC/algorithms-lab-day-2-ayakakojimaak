// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

const findMissingNumber = (array) => {
  const max = array[array.length - 1];
  const referenceNumber = [...Array(max).keys()].map((i) => i + 1);
  return referenceNumber.filter((item) => !array.includes(item));
};
console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3
