import axios from "axios";

const instance = axios.create({
  baseURL: "http://ec2-13-124-193-99.ap-northeast-2.compute.amazonaws.com:8081",
  withCredentials: true,
});

export default instance;
