import axios from "axios";

const clientRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

clientRequest.interceptors.request.use(
  (config) => {
    if (config.method?.toUpperCase() === "POST") {
      config.data = {
        ...config.data,
        // ...config
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

clientRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // handle error
    return Promise.reject(error);
  }
);

export default clientRequest;
