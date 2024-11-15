function sortedSquarredArray(array) {
  //write code here.make sure to return desired array
  const newArray = new Array(array.length).fill(0);
  for (let i = 0; i <= array.length - 1; i++) {
    newArray[i] = array[i] * array[i];
  }
  newArray.sort((a, b) => a - b);
  return newArray;
}

console.log(sortedSquarredArray([3, 2, 3]));
