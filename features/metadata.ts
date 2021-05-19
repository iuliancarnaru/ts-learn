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

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('Vrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);
    // router.get(path, middleware, target.prototype[key]);
  }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
