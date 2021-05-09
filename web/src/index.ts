import { User } from './models/User';

const user = new User({});

user.set({ name: 'Iulian', age: 36 });

console.log(user.get('name'));
console.log(user.get('age'));
