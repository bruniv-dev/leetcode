// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// Time Complexity - O(n)
// Space Complexity - O(n)

//logic 1 => accprding to udemy video

//while
// function countUniqueValues(array) {
//   let left = 0;
//   let right = 1;
//   if (array.length === 0) return 0;
//   while (right < array.length) {
//     if (array[left] !== array[right]) {
//       left++;
//       array[left] = array[right];
//     }
//     right++;
//   }
//   return left + 1;
// }

//for
function countUniqueValues(array) {
  if (array.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

//logic-2 //myown
function uniqueValuesCount(array) {
  let left = 0;
  let right = 1;
  let uniqueValuesCount = 1;

  if (array.length === 0) return 0;

  while (right < array.length) {
    let leftVal = array[left];
    let rightVal = array[right];
    if (leftVal === rightVal) {
      right++;
    }
    if (leftVal !== rightVal) {
      uniqueValuesCount++;
      left = right;
    }
  }
  return uniqueValuesCount;
}

console.log(uniqueValuesCount([1, 2, 3])); //3
console.log(uniqueValuesCount([1, 1, 3])); //2
console.log(uniqueValuesCount([-2, 0, 5, 5])); //3
console.log(uniqueValuesCount([6, 6, 6, 6, 6, 6])); //1
console.log(uniqueValuesCount([])); //0
