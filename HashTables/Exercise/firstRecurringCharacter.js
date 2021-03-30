// Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

// Traditional Way
let firstRecurringChar = (array) => {
  const repeatNum = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (repeatNum.find((n) => n[array[i]])) {
        break;
      }

      if (array[i] === array[j]) {
        const index = j - i;
        const obj = {
          [array[i]]: index,
        };
        repeatNum.push(obj);
      }
    }
  }

  //   If there is no repeated number
  if (repeatNum) return undefined;

  //   Considering first number and indexVal to be repeated
  let number = Object.keys(repeatNum[0])[0];
  let indexVal = Object.values(repeatNum[0])[0];

  //   checking for the closest index between repeated numbers
  for (let i = 1; i < repeatNum.length; i++) {
    if (Object.values(repeatNum[i])[0] < indexVal) {
      number = Object.keys(repeatNum[i])[0];
      indexVal = Object.values(repeatNum[i])[0];
    }
  }
  return number;
};

// console.log(firstRecurringChar([2, 3, 4, 5]));

// secondApproach

let secondApproach = (array) => {
  let map = {};

  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      return array[i];
    } else {
      map[array[i]] = true;
    }
  }
};

console.log(secondApproach([2, 1, 1, 2, 3, 5, 1, 2, 4]));
