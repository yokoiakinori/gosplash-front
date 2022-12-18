import axios from "axios"
export const BaseAxios = axios.create({
    baseURL: 'http://localhost/v1/',
    timeout: 5000,
    withCredentials: true,
})