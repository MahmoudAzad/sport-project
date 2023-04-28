import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
const baseUrl = "http://localhost:1337";

export const SendMessageService = (userMessage) => {
  return axios.post(
    "http://localhost:1337/create-tests",
    JSON.stringify(userMessage)
  );
};

export const getProducts = (endPath) => {
  return axios.get(`${baseUrl}/${endPath}`);
};

export const fetchRegisterUser = (user) => {
  return axios.post(
    "http://localhost:1337/auth/local/register",
    JSON.stringify(user)
  );
};

export const fetchLoginUser = (values) => {
  return axios.post("http://localhost:1337/auth/local", JSON.stringify(values));
};
