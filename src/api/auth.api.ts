import http, { Response } from 'k6/http';
import { baseURL } from '../globals';
import { ICredentials } from '../model/credentials';

export class AuthApi {
  private url = `${baseURL}/auth`;

  login(credentials: ICredentials): Response {
    return http.post(`${this.url}/token/login/`, credentials);
  }
}
