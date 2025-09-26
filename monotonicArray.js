// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array is monotone increasing if all its elements from left to right are non-decreasing.
//  An array is monotone decreasing if all  its elements from left to right are non-increasing.
//  Given an integer array return true if the given array is monotonic, or false otherwise.

const checkMonotonic = function (array) {
  //write code here to return either true or false

  //empty array is yes checkMonotonic

  // if (array.length === 0) {
  //   return true;
  // }

  if (array.length <= 1) return true;

  const first = array[0];
  const last = array[array.length - 1];

  //scenarios

  if (first === last) {
    //[3,_,_,_,3] -> mono - all equal
    // we know it be fully equalif mono
    //so check equal or not

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] !== array[i]) return false;
    }
  } else if (first < last) {
    //[3,_,_,_,6] -> non-dec mi
    // we know it will inc or be equal if true.  i <= i+1
    //so check big nor not

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] < array[i]) return false;
    }
  } else {
    //first>last
    //[6,_,_,_,3] -> non-increasing (md) ?
    // we know it will dec or be equal if true.  i >= i+1
    //so check small or not

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] > array[i]) return false;
    }
  }

  return true;
};

console.log(checkMonotonic([3, 3, 3]));

//approach2

function isMonotonic(array) {
  let monDec = true;
  let monInc = true;

  //to return empty array and array with one element as monotonic
  if (array.length <= 1) return true;

  for (let index = 0; index < array.length; index++) {
    if (array[index] < array[index + 1]) {
      monDec = false;
    }

    if (array[index] > array[index + 1]) {
      monInc = false;
    }
  }
  return monDec || monInc; //returns false only when both are false
}

console.log(isMonotonic([]));
console.log(isMonotonic([1]));
console.log(isMonotonic([2, 2, 2]));
console.log(isMonotonic([4, 5, 6]));
console.log(isMonotonic([7, 3, 1]));
console.log(isMonotonic([7, 10, 3, 1]));
