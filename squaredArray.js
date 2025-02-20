// CODING INTERVIEW Q1 (Easy): Sorted Squared Array
// Question

// You are given an array of Integers in which each subsequent value is
// not less than the previous value. Write a function that takes this array as
//  an input and returns a new array with the squares of each number sorted in ascending order.



////1 - BRUTE FORCE METHOD : TRAVERSE, SQUARE AND SORT -> TC : O(NLOGN)  SC:O(N)
// function sortedSquarredArray(array) {
//   //write code here.make sure to return desired array
  
//   //make new array that has same size as input array and evey cell is filled with 0 in it.
//   let newArray = new Array(array.length).fill(0); 
   
//   //push elements and iterate to square
//     for(let i=0; i<array.length;i++){
//         newArray[i] = array[i]*array[i];
//     }
    
//     //sort array
//     newArray.sort((a,b) => a-b);
//     return newArray;
// }


// 2 -USING POINTER APPROACH TO TRAVERSE ARRAY AS IP ARRAY IS ASCEMDING ALREADY,
//  COMPARING TWO VALUES FROM POINTERS.

//TC: o(n) -> one transverse    SC: o(n) -> one new array

function sortedSquarredArray(array){
  //initialize array and fill 0
  const newArray = new Array(array.length).fill(0);
  
  //POINTERS
  let pointerLeft = 0;
  let pointerRight = array.length -1;
  
  //interate starting with last index
  
  for(let i=array.length-1; i>=0; i--){
      const leftSquared = Math.pow(array[pointerLeft],2);
      const rightSquared = Math.pow(array[pointerRight],2);
      
      if(leftSquared > rightSquared){
          newArray[i] = leftSquared;
          pointerLeft++;
      }else{
          newArray[i] = rightSquared;
          pointerRight--;
      }
  }
  return newArray;
}

console.log(sortedSquarredArray([3, 2, 3]));
