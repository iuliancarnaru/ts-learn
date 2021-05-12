import { User } from './models/User';

const user = new User({ name: 'Carnaru', age: 37 });

user.on('change', () => console.log('user changed'));
