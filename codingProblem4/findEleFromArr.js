// Given two array, create a function that let's user know (true / fale) whether these two array contain items

/*
For Example 1
const array1 = ['a','b','c','x']
const array2 = ['z','y','i']
Should return false

For Example 2
const array1 = ['a','b','c','x']
const array2 = ['z','y','x']
Should return true
*/

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

function containsCommanItem2(array1, array2) {
  // Loop through first array and create obj where properties === items in arr
  let map = {};

  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      map[array1[i]] = true;
    }
  }
  // Loop through second array and check if item in second array exists on created object
  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(containsCommanItem2(array1, array2));
