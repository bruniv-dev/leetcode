//Write a function that takes a sorted array and returns the first pair that sums to zero

function sumZero(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) return [array[left], array[right]];
    if (sum > 0) right--;
    else left++;
  }
}

console.log(sumZero([-3, 3, 0]));
console.log(sumZero([-4, -2, 2, 3]));
