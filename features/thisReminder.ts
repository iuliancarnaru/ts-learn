// Reminder of how 'this' keyword works in JS
const colors = {
  color: 'red',
  printColor() {
    console.log(this.color);
  },
};

// this is referencing on what is on the left of the dot when the method is called
colors.printColor();

const printColor = colors.printColor;
printColor(); // this is undefined
