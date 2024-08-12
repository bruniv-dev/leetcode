const isPalindrome = (x) => {
  const numStr = x.toString();
  return numStr === numStr.split("").reverse().join("");
};

isPalindrome(10); //returns false

// let x = 10;
// let num = x.toString();
// let revNum = num.split("").reverse().join("");
// console.log(num);
// console.log(revNum);
// let isPalindrome = () => {
//   if (num === revNum) {
//     console.log("true");
//     return true;
//   }
//   return false;
// };

// isPalindrome();

// const isPalindrome = x => {
//   const numStr = x.toString();
//   let left = 0;
//   let right = numStr.length - 1;

//   while (left < right) {
//     if (numStr[left] !== numStr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// };
