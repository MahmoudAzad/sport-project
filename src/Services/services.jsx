import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";


export const sendMessageService = userMessage => {
    return axios.post('http://localhost:1337/create-tests' , JSON.stringify(userMessage));
};
