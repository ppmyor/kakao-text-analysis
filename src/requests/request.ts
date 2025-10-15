import axios from "axios";

const baseConfig = {
  baseURL: process.env.baseUrl,
};

const request = axios.create(baseConfig);

export default request;
