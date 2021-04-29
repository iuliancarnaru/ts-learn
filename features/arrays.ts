const carMakers: string[] = ['ford', 'toyota', 'tesla'];
const dates: Date[] = [new Date(), new Date()];

// two dimensional array
const carsByMake: string[][] = [['focus'], ['corolla'], ['x']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(5); --> Argument of type 'number' is not assignable to parameter of type 'string'
carMakers.push('3');

// help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (string | Date)[] = ['2020-04-08', new Date()];
importantDates.push('1984-07-31');
importantDates.push(new Date());
