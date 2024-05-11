import axios from "axios";

const httpClient = axios.create({
  baseURL: "/api",
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("User is unauthorized. Logging out...");
    }
    return Promise.reject(error);
  }
);

export default httpClient;
