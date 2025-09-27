/* Given a string, return the count of each character. */

/* a and A and "space" ; treat different */

/* char => key  */
/* obj[char] => value */

// tc = o(n)
//sc : o(k) => no of unique values

function countChars(str) {
  let charCountObj = {}; // object to hold key and value
  // loop through each char of str, str is an interable so for of
  for (let char of str) {
    //check if a value for the key(char) exists,
    if (charCountObj[char]) {
      // if yes -> increment
      charCountObj[char]++;
    } else {
      // if no -> add 1
      charCountObj[char] = 1;
    }
  }
  return charCountObj;
}
console.log(countChars("hi hello, HOW are YOU ?"));

/* All lowercase */
function countAllChars(str) {
  let charCountObj = {};
  // let sstr = str.toLowerCase(); do not chnage to lowercase here.this makes sc: o(n)
  // for (let char of sstr) {
  for (let char of str) {
    if (char === " ") continue;
    let ch = char.toLowerCase(); // the space complexity remains o(k) This still allocates tiny temporary strings each iteration, but they don’t accumulate
    if (charCountObj[ch]) {
      charCountObj[ch]++;
    } else {
      charCountObj[ch] = 1;
    }
  }
  return charCountObj;
}
console.log(countAllChars("hi hello, HOW are YOU ?"));

/* BEST WAY*/
function countEachChar(str) {
  let charCountObj = {};
  for (let char of str) {
    if (char === " ") continue;
    charCountObj[char] = (charCountObj[char] || 0) + 1;
  }
  return charCountObj;
}
console.log.countEachChar("hi hello");
