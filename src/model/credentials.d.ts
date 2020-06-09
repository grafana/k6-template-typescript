import { StructuredRequestBody } from 'k6/http';

export interface ICredentials extends StructuredRequestBody {
  username: string;
  password: string;
}
