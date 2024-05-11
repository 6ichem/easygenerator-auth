export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  success: boolean;
}

export interface RegisterPayload extends LoginPayload {
  name: string;
}

export interface RegisterResponse {
  message: string;
  success: boolean;
}
