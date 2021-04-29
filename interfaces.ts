const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken? ${vehicle.broken}`);
// };

// printVehicle(oldCivic);

interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printReport = (item: Reportable): void => {
  console.log(item.summary());
};

printReport(oldCivic);
printReport(drink2);
