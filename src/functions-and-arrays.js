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

console.log(sumNumbers(numbers)); // 87
console.log(sumNumbers([])); // 0
console.log(typeof sumNumbers); //function
console.log(sumNumbers([4])); // 4
console.log(sumNumbers([0, 0, 0, 0, 0])); // 0
console.log(sumNumbers([10, 5, 4, 32, 8])); // 59


// Iteration #3.1 Bonus:
function sum() {}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength() {}

// Bonus - Iteration #4.1
function avg() {}

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

function doesWordExist() {}

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
