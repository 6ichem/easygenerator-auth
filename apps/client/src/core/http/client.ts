import axios from "axios";
import { logOut } from "../utils";

const httpClient = axios.create({
  baseURL: "/api",
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      logOut();
    }
    return Promise.reject(error);
  }
);

export default httpClient;
