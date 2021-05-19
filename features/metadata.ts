import 'reflect-metadata';

// is adding Reflect to global scope
// and let us attach little information to the object
const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('hight', 162, plane);

// you can't see the metadata in console
console.log(plane);

// now you can see it
const note = Reflect.getMetadata('note', plane);
const hight = Reflect.getMetadata('hight', plane);

console.log(note);
console.log(hight);

// attach metadata to an object property
Reflect.defineMetadata('note', 'hi there', plane, 'color');
const note2 = Reflect.getMetadata('note', plane, 'color');

// METADATA and DECORATORS on CLASSES

class Plane {
  color: string = 'red';

  @markFunction
  fly(): void {
    console.log('Vrr');
  }
}

function markFunction(target: Plane, key: string) {
  Reflect.defineMetadata('secret', 123, target, key);
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
