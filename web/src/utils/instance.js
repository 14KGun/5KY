import axios from "axios";

const instance = axios.create({
  baseURL: "https://test-api.qaing.co:444",
  withCredentials: true,
});

export default instance;
