// Given an integer num, repeatedly add all its digits until
//the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0

var addDigits = function (num) {
  let sum = num;

  while (sum >= 10) {
    let tempSum = 0;
    while (sum > 0) {
      let digit = sum % 10;
      tempSum += digit;
      sum = Math.floor(sum / 10);
      console.log(`digit: ${digit}, tempSum: ${tempSum}, num: ${sum}`);
    }
    sum = tempSum;
    console.log(`Intermediate sum: ${sum}`);
  }

  console.log(`final-sum: ${sum}`);
  return sum;
};

console.log(addDigits(38));
