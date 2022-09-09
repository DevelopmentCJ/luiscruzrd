import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://be-datasamicj.herokuapp.com/api/",
  // baseURL: "localhost:3001/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
