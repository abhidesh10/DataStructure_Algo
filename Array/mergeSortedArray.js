// My solution
let mergeSortedArray = (arr1, arr2) => {
  let sortedArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] <= arr2[j]) {
        sortedArr.push(arr1[i]);
        break;
      } else if (arr1[i] > arr2[j]) {
        sortedArr.push(arr2[j]);
      } else {
        break;
      }
    }
  }
  //   Failed to bring exact outbut
  //   console.log("sortedArr", sortedArr);
};

mergeSortedArray([0, 3, 4, 31], [4, 6, 30]);

// Solution from video
let mergeSortedArray2 = (array1, array2) => {
  if (array1.length < 1) {
    return array2;
  }
  if (array2.length < 1) {
    return array1;
  }

  let array1Item = array1[0];
  let array2Item = array2[0];
  let sortedArray = [];
  let i = 1;
  let j = 1;
  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      sortedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      sortedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  console.log(sortedArray);
};

mergeSortedArray2([0, 3, 4, 31], [4, 6, 30]);
