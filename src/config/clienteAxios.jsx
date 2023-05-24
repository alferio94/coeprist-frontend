import axios from "axios";
const token = localStorage.getItem('token');

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
})
export const clienteAxiosHeaders = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
    headers: { Authorization: `Bearer ${token}` }
})

export default clienteAxios;