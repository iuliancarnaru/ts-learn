const profile = {
  name: 'Alex',
  age: 35,
  coords: {
    lat: 0,
    lng: 12,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// const { age } = profile;
const { age }: { age: number } = profile;

// const { coords: { lat, lng }} = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
