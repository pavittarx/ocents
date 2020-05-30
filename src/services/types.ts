export interface Login{
  email: string,
  password: string
}

export interface Signup extends Login{
  name: string;
}

export interface AuthToken{
  token: string
}