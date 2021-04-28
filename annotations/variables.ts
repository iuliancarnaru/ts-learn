let apples: number = 5;
// apples = 'apple'; --> Type 'string' is not assignable to type 'number'

let speed: string = 'fast';
// speed = 5; --> Type 'number' is not assignable to type 'string'

let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'blue', 'orange'];
let numbers: number[] = [1, 3, 4];
let truths: boolean[] = [true, true, false];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function (i: number) => void
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// WHEN TO USE ANNOTATIONS

// 1. Function that returns 'any' type
const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2. When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
// let foundWord; --> Variable 'foundWord' implicitly has an 'any' type, but a better type may be inferred from usage.
let foundWord: boolean;
// or
// let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. When we have variables whose type cannot be inferred correctly
let newNumbers = [-10, -1, 12];

// let numberAboveZero = false; --> Type 'number' is not assignable to type 'boolean'
let numberAboveZero: boolean | number = false;

for (let i = 0; i < newNumbers.length; i++) {
  if (newNumbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
