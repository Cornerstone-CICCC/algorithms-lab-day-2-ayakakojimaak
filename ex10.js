// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

const convertToCamelCase = (string) => {
  const regexSpaces = /\s([a-z])/g;
  const regexUnderscores = /_([a-z])/g;
  const replaceString = (regex, str) => {
    return str.replace(regex, function (match) {
      return match.slice(1).toUpperCase();
    });
  };
  return replaceString(regexSpaces, replaceString(regexUnderscores, string));
};
console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"
