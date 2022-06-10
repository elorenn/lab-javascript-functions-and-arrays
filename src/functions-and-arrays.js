// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arrWords) {
  if (arrWords.length === 0) {
    return null;
  }
  let longest = "";
  for (let i = 0; i < arrWords.length; i++) {
    if (arrWords[i].length > longest.length) {
      longest = arrWords[i];
    } 
  }
  return longest;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNum) {
  if (arrNum.length === 0) {
    return 0;
  }
  let sum = 0;
  arrNum.forEach(number => {
    sum += number;
  });
  return sum;   
}

// Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10]; 

function sum(mixArr) {
  if (mixArr.length === 0) {
    return 0;
  }
  let sum = 0;
  mixArr.forEach(item => {
    if (typeof item === 'object') {
      throw `Unsupported data type sir or ma'am`;
    }
    else if (typeof item === 'string') {
      sum += item.length;
    } else {
      sum += item;
    }
  });
  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr) {
  if (numArr.length === 0) {
    return null;
  }
  let sum = sumNumbers(numArr);
  return Math.round(sum/numArr.length);
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordArr) {
  if (wordArr.length === 0) {
    return null;
  }
  let totalLength = sum(wordArr);
  return Math.round(totalLength/wordArr.length);
}

// Bonus - Iteration #4.1
const mixedArr2 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10]; // should return: 5.7

function avg(arr) {
  if (arr.length === 0) {
    return null;
  }
  let total = sum(arr);
  return Math.round((total/arr.length) * 100) / 100;
}


// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(wordArr) {
  if (wordArr.length === 0) {
    return null;
  }
  let filtered = [];
    for (let i=0; i < wordArr.length; i++) {
      if (filtered.indexOf(wordArr[i]) === -1) {
        filtered.push(wordArr[i]);
      }
    } 
  return filtered;
}

// Bonus - Iteration #5.1: Unique arrays using Set

// function uniquifyArrayWithSet(wordArr) {
//   let set = new Set(wordArr);
//   return [...set];  
// }

function uniquifyArrayWithSet(wordArr) {
  if (wordArr.length === 0) {
    return null;
  }
  return [...(new Set(wordArr))];
}


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordArr, word) {
  if (wordArr.length === 0) {
    return null;
  }
  return wordArr.includes(word);
}


// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordArr, word) {
  if (wordArr.length === 0)  {
    return 0;
  }
  let counter = 0;
  wordArr.forEach(item => {
    if (item === word ) {
      counter++;
    }
  });
  return counter;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    uniquifyArrayWithSet
  };
}
