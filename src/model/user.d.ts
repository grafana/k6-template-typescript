import { ICredentials } from './credentials';

export interface IUser extends ICredentials {
  first_name: string;
  last_name: string;
}
