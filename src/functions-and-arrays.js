// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// console.log(maxOfTwoNumbers(2, 1)); // 2
// console.log(maxOfTwoNumbers(5, -7)); // 5
// console.log(maxOfTwoNumbers(1, 3)); // 3
// console.log(maxOfTwoNumbers(-5, 3)); // 3
// console.log(maxOfTwoNumbers(4, 4)); // 4

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arrWords) {
  let longest = "";
  for (let i = 0; i < arrWords.length; i++) {
    if (arrWords[i].length > longest.length) {
      longest = arrWords[i];
    } 
  }
  return longest;
}

// console.log(findLongestWord(words)); // crocodile
// console.log(findLongestWord([])); // null
// console.log(findLongestWord(['foo'])); // foo
// console.log(findLongestWord(['foo', 'bar'])); // foo
// console.log(findLongestWord(['bar', 'foo'])); // bar
// console.log(findLongestWord(['a', 'zab', '12abc', '$$abcd', 'abcde', 'ironhack'])); // ironhack


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNum) {
  let sum = 0;
  arrNum.forEach(number => {
    sum += number;
  });
  return sum;   
}

// console.log(sumNumbers(numbers)); // 87
// console.log(sumNumbers([])); // 0
// console.log(typeof sumNumbers); //function
// console.log(sumNumbers([4])); // 4
// console.log(sumNumbers([0, 0, 0, 0, 0])); // 0
// console.log(sumNumbers([10, 5, 4, 32, 8])); // 59


// Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10]; 

function sum(mixArr) {
  let sum = 0;
  mixArr.forEach(item => {
    if (typeof item === 'string') {
      sum += item.length;
    } else {
      sum += item;
    }
  });
  return sum;
}

// console.log(sum(mixedArr)); // 57
// console.log(sum([4])); // 4
// console.log(sum([10, 5, 4, 32, 8])); //59
// console.log(sum(['ana', 'marco', 'nicolas', 'tania', 'ptwd'])); // 24
// console.log(sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, 10])); // 56
// console.log(sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false])); // 46
// console.log(sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true])); // 47


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr) {
  let sum = sumNumbers(numArr);
  return Math.round(sum/numArr.length);
}

// console.log(averageNumbers(numbersAvg)); // 6
// console.log(averageNumbers([9, -3, -4, 6])); // 2
// console.log(averageNumbers([9, 10, 82, 92, 32, 102, 58])); // 55

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordArr) {
  let totalLength = sum(wordArr);
  return Math.round(totalLength/wordArr.length);
}

// console.log(averageWordLength(wordsArr)); // 5
// console.log(averageWordLength(['ironhack'])); // 8
// console.log(averageWordLength(['Ironhack', 'Madrid', 'Barcelona', 'Paris', 'Miami', 'Mexico', 'Berlin', 'Programmers'])); // 7

// Bonus - Iteration #4.1
const mixedArr2 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10]; // should return: 5.7

function avg(arr) {
  let total = sum(arr);
  return Math.round((total/arr.length) * 100) / 100;
}

// console.log(avg(mixedArr2)); // 5.7
// console.log(avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false])); // 5.11
// console.log(avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true])); // 5.22


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

function uniquifyArray() {}

// Bonus - Iteration #5.1: Unique arrays using Set

function uniquifyArrayWithSet() {}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordArr, word) {
  return wordArr.includes(word);
}

// console.log(doesWordExist(wordsFind, 'nope')); // false
// console.log(doesWordExist(wordsFind, 'matter')); // true
// console.log(doesWordExist([])); // null ??
// console.log(doesWordExist(['machine'], 'machine')); // true
// console.log(doesWordExist(['machine', 'poison', 'eat', 'apple', 'horse'], 'ratatouille')); // false
// console.log(doesWordExist(['pizza', 'sandwich', 'snack', 'soda', 'book', 'computer'], 'book')); // true

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

function howManyTimes() {}

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
