import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const SendMessageService = (userMessage) => {
  return axios.post(
    "http://localhost:1337/create-tests",
    JSON.stringify(userMessage)
  );
};

export const SendRegisterService = (user) => {
  return axios.post(
    "http://localhost:1337/auth/local/register",
    JSON.stringify(user)
  );
};

export const SendLoginService = (values) => {
  return axios.post("http://localhost:1337/auth/local", JSON.stringify(values));
};
