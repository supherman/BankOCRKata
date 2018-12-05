const fs = require('fs');

const ZERO = [
  " _ ",
  "| |",
  "|_|",
]

const ONE = [
  "   ",
  "  |",
  "  |",
]

const TWO = [
  " _ ",
  " _|",
  "|_ ",
]

const THREE = [
  " _ ",
  " _|",
  " _|",
]

const FOUR = [
  "   ",
  "|_|",
  "  |",
]

const FIVE = [
  " _ ",
  "|_ ",
  " _|",
]

const SIX = [
  " _ ",
  "|_ ",
  "|_|",
]

const SEVEN = [
  " _ ",
  "  |",
  "  |",
]

const EIGHT = [
  " _ ",
  "|_|",
  "|_|",
];

const NINE = [
  " _ ",
  "|_|",
  " _|",
];

const DIGIT_MAP = {};
DIGIT_MAP[ZERO] = 0;
DIGIT_MAP[ONE] = 1;
DIGIT_MAP[TWO] = 2;
DIGIT_MAP[THREE] = 3;
DIGIT_MAP[FOUR] = 4;
DIGIT_MAP[FIVE] = 5;
DIGIT_MAP[SIX] = 6;
DIGIT_MAP[SEVEN] = 7;
DIGIT_MAP[EIGHT] = 8;
DIGIT_MAP[NINE] = 9;

function eachSlice(array, size){
  let newArray = [];
  for (var i = 0, l = array.length; i < l; i += size){
    newArray.push(array.slice(i, i + size))
  }
  return newArray;
};

function extractLines(file) {
  const fileContent = fs.readFileSync(file);
  const lines = eachSlice(fileContent.toString().split("\n"), 4);
  return lines.map((entry) => {
    entry.pop();
    return entry;
  });
}

function transpose(array) {
  if (array === null || array.length === 0) return [];
  return array[0].map((_, i) => array.map(row => row[i]));
}

function extractDigits(line) {
  const splittedLines = line.map((lineRow) => {
    return lineRow.match(/.../g);
  });

  return transpose(splittedLines).map((digitArray) => {
    return DIGIT_MAP[digitArray];
  });
}

const accountNumbers = extractLines("use_case_1_in.txt").map((line) => {
  return extractDigits(line).join('');
});

accountNumbers.forEach((accountNumber) => {
  console.log(accountNumber);
});