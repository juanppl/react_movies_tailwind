import axios from "axios";

const Axios = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

Axios.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        api_key: process.env.REACT_APP_API_KEY
    };
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default Axios;