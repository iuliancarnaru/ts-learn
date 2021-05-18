@classDecorator
class Boat {
  @testDecorator
  // property
  color: string = 'red';

  @testDecorator
  // accessor
  getFormattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Oops, something happened!')
  // method
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('vroom');
    }
  }
}

// constructor: Function
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.log(errorMessage);
      }
    };
  };
}
