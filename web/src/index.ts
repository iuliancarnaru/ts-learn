import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'Carnaru', age: 37 });
user.save();

const user2 = new User({ name: 'Aneta', age: 28 });
user2.save();
