import axios from "axios";

export const signin = (obj) => {
    let response =  axios.post("https://localhost:44355/api/User/Login", obj);
    return response;
}


export const signup = (obj) => {
    let response = axios.post('https://localhost:44355/api/User/Register', obj);
    return response;
}