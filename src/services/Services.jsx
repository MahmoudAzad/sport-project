import axios from "axios";

const baseUrl = "http://localhost:1337";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const SendMessageService = (userMessage) => {
  return axios.post(baseUrl, JSON.stringify(userMessage));
};

export const getProducts = (endPath) => {
  return axios.get(`${baseUrl}/${endPath}`);
};

export const fetchRegisterUser = (user) => {
  return axios.post(`${baseUrl}/auth/local/register`, JSON.stringify(user));
};

export const fetchLoginUser = (values) => {
  return axios.post(`${baseUrl}/auth/local`, JSON.stringify(values));
};
