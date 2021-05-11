import { User } from './models/User';

const user = new User({ name: 'Carnaru', age: 37 });

user.set({ name: 'Carnaru', age: 37 });
user.save();

user.events.on('change', () => {
  console.log('change');
});

// const user2 = new User({ name: 'Aneta', age: 28 });
// user2.save();
