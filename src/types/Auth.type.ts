export interface LoginBody {
  email: string;
  password: string;
}

export interface RegisterBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserResponse {
  name: string;
  email: string;
  token: string;
}
