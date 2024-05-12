import { AUTH_TOKEN } from "./constants";

export const getAuthToken = () => localStorage.getItem(AUTH_TOKEN);

export const setAuthToken = (token: string) =>
  localStorage.setItem(AUTH_TOKEN, token);

export const removeAuthToken = () => localStorage.removeItem(AUTH_TOKEN);

export const logOut = () => {
  removeAuthToken();
  setTimeout(() => {
    window.location.reload();
  }, 1500);
};
