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
