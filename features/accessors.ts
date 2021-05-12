// quick reminder on accessors
class Person {
  constructor(public firstName: string, public lastName: string) {}

  // adding GET we don't need to call the fullName method
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Iulian', 'Carnaru');
console.log(person.fullName);
