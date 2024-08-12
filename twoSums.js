var twoSum = function (nums, target) {
  let arr = [];
  let dupNums = nums;
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i; j <= dupNums.length - 1; j++) {
      if (arr.length < 2) {
        if (nums[i] + dupNums[j + 1] === target) {
          arr.push(i, j + 1);
        }
      }
    }
  }
  console.log(arr);
  return arr;
};

twoSum([1, 2, 3], 3);

//node twoSums.js
