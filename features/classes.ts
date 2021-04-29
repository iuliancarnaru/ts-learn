class Vehicle {
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}

  public blink(): void {
    console.log('blink blink');
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
// vehicle.drive();
// vehicle.honk(); --> Property 'honk' is protected and only accessible within class 'Vehicle' and its subclasses

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('chaga chaga');
  }

  startDrivingProcess(): void {
    this.blink();
    this.drive();
    this.honk();
  }
}

const car2 = new Car(4, 'red');
// car2.drive(); --> Property 'drive' is private and only accessible within class 'Car'
car2.startDrivingProcess();
