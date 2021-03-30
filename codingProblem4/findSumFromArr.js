// Find the set of pair from array whose sum equal to given number

/*
Example  1: [1,2,3,4] and sum 8
Output : false
Example  2: [1,2,3,7] and sum 8
Output : true
*/

// Navie

function hasPairWithSum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
}

function hasPairWithSum2(arr, sum) {
  // const mySet = new Set();
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return true;
    }
    map[sum - arr[i]] = true;
    console.log(map);
    // if (mySet.has(arr[i])) return true;
    // mySet.add(sum - arr[i]);
    // console.log(mySet);
  }

  return false;
}

console.log(hasPairWithSum2([1, 2, 3, 7], 5));
