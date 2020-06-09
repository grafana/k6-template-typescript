import { sleep, check, group } from 'k6';
import { AuthApi } from './api/auth.api';
import { UserApi } from './api/user.api';
import { getRandomUsername } from './helpers/random-username';

export { options } from './options';

const auth = new AuthApi();
const users = new UserApi();

export default () => {
  const credentials = {
    username: getRandomUsername(),
    password: 'a-topsecret-password',
  };

  group('register user', () => {
    const registrationResponse = users.register({
      ...credentials,
      email: `${credentials.username}@example.com`,
      first_name: 'Bert',
      last_name: 'Crocson',
    });

    check(registrationResponse, {
      'registration was successful': (r) => r.status === 201,
      'response contain the username': (r) =>
        r.json('username') === credentials.username,
      'response does not contain the password': (r) => !r.json('password'),
    });
  });

  group('login as user', () => {
    const authResponse = auth.login(credentials);
    const token = authResponse.json('access');

    check(token, {
      'login was successful': () => authResponse.status === 200,
      'received a token': () => !!token,
    });
  });

  sleep(1);
};
