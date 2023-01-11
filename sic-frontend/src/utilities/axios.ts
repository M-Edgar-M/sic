import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5050/'
})

axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';