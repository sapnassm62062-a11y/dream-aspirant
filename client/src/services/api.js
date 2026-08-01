import axios from "axios";

const API = axios.create({
    baseURL: "https://dream-aspirant.onrender.com"
});

export default API;