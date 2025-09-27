//Accept two arrays, the second array must have the sqaured vales of the first array, then return true
// ex: [1,2,2] [1,4,4]

//use frequency counter pattern
//loop through array 1 to count the frequency  of each key
//loop through array 2 to count the frequency  of each key
//ex: Obj1:{1:1, 2:2} ; Obj1:{1:1, 4:2}
//logic
// =>loop obj1 (for-in)
// =>if key in array 1 is not a square as key in array 2 => return false
// =>value a key in obj 1 needs to be the same in the same key of array 2 or return false

//if parameters
function twoArraysFc(array1, array2) {
  if (array1.length !== array2.length) return false;
  // if (array1.length === 0 || array2.length === 0) return false; WRONG! EMPTY STRINGS ARE ANAGRAMS
  let obj1 = {};
  let obj2 = {};
  for (let val of array1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of array2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  console.log(obj1);
  console.log(obj2);

  for (let key in obj1) {
    //key is key
    //obj[key] => val

    if (!(key * key in obj2)) {
      return false;
    }

    if (obj1[key] !== obj2[key]) {
      return false;
    }
    return true;
  }
}

console.log(twoArraysFc([], [])); //false
console.log(twoArraysFc([1, 1], [1, 3, 9])); //false
console.log(twoArraysFc([1, 2, 2], [1, 4, 4])); //true
console.log(twoArraysFc([3, 3, 7], [9, 5, 25])); //false
