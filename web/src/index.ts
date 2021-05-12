import { User } from './models/User';

const user = new User({ id: 1, name: 'Iulian', age: 36 });

user.on('save', () => {
  console.log(user);
});

user.save();
