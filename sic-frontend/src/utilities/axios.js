import axios from "axios";


const AxiosInstance = axios.create({
    baseURL: 'http://localhost:5050/',
    timeout: 1000,
  });

//   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.defaults.headers.post['Content-Type'] = 'application/application/json';

  export default AxiosInstance;