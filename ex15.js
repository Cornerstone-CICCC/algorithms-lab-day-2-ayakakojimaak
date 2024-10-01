// Exercise 15: Write a recursive function `findMax` that takes an array of numbers
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.
function findMax(array) {
  if (array.length === 1) {
    return array[0];
  }
  const max = findMax(array.slice(1));
  return array[0] > max ? array[0] : max;
}
console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9
