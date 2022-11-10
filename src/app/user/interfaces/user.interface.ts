export interface User {
  id?:     number;
  name:   string;
  last_name:   string;
  email:   string;
  address:   string;
  age:   number;
  born_date:   Date;
  cellphone: number;
  document_type: number;
  document_number: number;
}
export interface UserLogin{
  email: string;
  password: string;
}
export class UserResponse {
  id: number | undefined;
  token: string | undefined;
  refreshToken: string | undefined;
}
