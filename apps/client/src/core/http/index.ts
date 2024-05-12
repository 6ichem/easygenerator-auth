import { getAuthToken } from "../utils";
import httpClient from "./client";
import { LoginPayload, LoginResponse, RegisterPayload } from "./types";

export const Login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { data } = await httpClient.post("/auth/login", payload);

  return data;
};

export const Register = async (payload: RegisterPayload) => {
  const { data } = await httpClient.post("/auth/register", payload);

  return data;
};

export const FetchUser = async () => {
  const { data } = await httpClient.get("/users", {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

  return data;
};
