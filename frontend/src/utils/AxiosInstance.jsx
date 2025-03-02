import axios from "axios";

const AxiosInstance = axios.create({
    // baseURL: 'http://localhost:4000',
    baseURL: 'https://e-commerce-gules-six.vercel.app',
    headers: {
        'Content-Type': 'application/json',
    },
})
export default AxiosInstance