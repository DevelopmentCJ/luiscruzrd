import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  // baseURL: "https://be-luiscruzrd.com/api/",
  baseURL: "http://localhost:3000/api",

  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
