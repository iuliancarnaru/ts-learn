import { Request, Response } from 'express';
import { get, controller, post, bodyValidator } from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response) {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button>Submit</button>
      </form>
  `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'test@test.com' && password === '1234') {
      // mark person as logged in
      req.session = { loggedIn: true };
      // redirect to home page
      res.redirect('/');
    } else {
      res.send('Invalid username or password');
    }
  }
}
