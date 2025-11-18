export interface LoginBody {
  email: string;
  password: string;
}

export interface RegisterBody {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
}

export interface UserResponse {
  id: string;
  fullName: string;
  email: string;
  token: string;
}
