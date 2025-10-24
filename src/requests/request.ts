import axios from "axios";

const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
};

const request = axios.create(baseConfig);

export default request;
