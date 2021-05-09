class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: string): string {
    return this.collection[index];
  }
}

// using generic class
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);
new ArrayOfAnything<number>([1, 2, 3, 4]);

// using type inference (omitting to declare the type)
const arr = new ArrayOfAnything([true, false]);
// const arr: ArrayOfAnything<boolean>

// ----------------------------------------------------------------
// EXAMPLE OF GENERIC WITH FUNCTIONS

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// using generic function
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);

printAnything([false, true]);
// printAnything<boolean>(arr: boolean[]): void

// ----------------------------------------------------------------
// GENERIC CONSTRAINS

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

// function printHousesOrCars<T>(arr: T[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].print(); // Property 'print' does not exist on type 'T'
//   }
// }

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

// printHousesOrCars([1, 2, 3]); // Type 'number' is not assignable to type 'Printable'

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
