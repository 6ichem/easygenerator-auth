import axios from "axios";
import { logOut } from "../utils";
import { COMMON_ERRORS } from "../constants";

const httpClient = axios.create({
  baseURL: "/api",
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const responseData = error.response.data;
      if (
        responseData &&
        responseData.message === COMMON_ERRORS.INVALID_TOKEN
      ) {
        logOut();
      }
    }
    return Promise.reject(error);
  }
);

export default httpClient;
