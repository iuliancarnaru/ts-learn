import express from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';

const app = express();

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieSession({ keys: ['secret'] }));

app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
