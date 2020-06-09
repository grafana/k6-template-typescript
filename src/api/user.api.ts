import { baseURL } from '../globals';
import { IUser } from '../model/user';
import http, { Response } from 'k6/http';

export class UserApi {
  private url = `${baseURL}/user`;

  register(user: IUser): Response {
    return http.post(`${this.url}/register/`, user);
  }
}
