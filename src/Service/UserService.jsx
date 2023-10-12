import axios from "axios";

export const signin =async (obj) => {
    const response = await  axios.post("https://localhost:44355/api/User/Login", obj);
    console.log("signIn api ",response);
    return response;
}

export const signup = async(obj) => {
    const response =await axios.post('https://localhost:44355/api/User/Register', obj);
    console.log("signUp api ",response);
    return response;
}


