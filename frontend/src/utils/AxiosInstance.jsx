import axios from "axios";

const AxiosInstance = axios.create({
    // baseURL: 'http://localhost:4000',
    baseURL: 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json',
    },
})
export default AxiosInstance