/**
 * CODING INTERVIEW Q1: Sorted Squared Array
 * 
 *  You are given an array of Integers in which each subsequent value is not less than the previous value.
    (meaning Ascending order)
    Write a function that takes this array as an input and returns a new array with the
    squares of each number sorted in ascending order.
 *
 * Qs clarified:
 * - Are all numbers positive? → No
 * - Are all numbers distinct? → No
 * - Empty array input? → Yes
 *
 * Approaches:
 * 1. Brute Force: Square then sort → O(n log n), O(n)
 * 2. Two-Pointer: Compare |left| vs |right|, fill from end → O(n), O(n)
 */

////1 - BRUTE FORCE METHOD : TRAVERSE through araay to SQUARE AND SORT
//  -> TC : O(NLOGN)  SC:O(N)

function sortedSquaredArray1(array) {
  //write code here.make sure to return desired array

  //make new array that has same size as input array and evey cell is filled with 0 in it.
  let newArray = new Array(array.length).fill(0);

  //push elements and iterate to square
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] * array[i];
  }

  //sort array
  newArray.sort((a, b) => a - b);
  return newArray;
}

// 2 -USING POINTER APPROACH TO TRAVERSE ARRAY AS IP ARRAY IS ASCEMDING ALREADY,
//  COMPARING TWO VALUES FROM POINTERS.

//TC: o(n) -> one transverse    SC: o(n) -> one new array

function sortedSquaredArray2(array) {
  //initialize array and fill 0
  const newArray = new Array(array.length).fill(0);

  //POINTERS
  let pointerLeft = 0;
  let pointerRight = array.length - 1;

  //interate starting with last index

  for (let i = array.length - 1; i >= 0; i--) {
    const leftSquared = Math.pow(array[pointerLeft], 2);
    const rightSquared = Math.pow(array[pointerRight], 2);

    if (leftSquared > rightSquared) {
      newArray[i] = leftSquared;
      pointerLeft++;
    } else {
      newArray[i] = rightSquared;
      pointerRight--;
    }
  }
  return newArray;
}

console.log(sortedSquaredArray1([3, 2, 3]));
console.log(sortedSquaredArray2([-3, 2, 3]));
