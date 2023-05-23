/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const AdminContext = createContext();
const AdminProvider = ({ children }) =>
{
    const [loading, setLoading] = useState(true)
    const [municipiosData, setMunicipiosData] = useState([]);
    const getMunicipiosData = async () =>
    {
        const token = localStorage.getItem('token');
        if (!token)
        {
            setLoading(false)
            return
        }
        const config = {
            headers: {
                "Content-Type": "aplication/json",
                Authorization: `Bearer ${token}`
            }
        }
        try
        {
            const { data } = await clienteAxios.get('/visitas/municipios', config)
            setMunicipiosData(data);
            setLoading(false)
        } catch (error)
        {
            console.log(error.response.data)
        }
    }
    return (
        <AdminContext.Provider
            value={{
                getMunicipiosData,
                municipiosData,
                loading
            }}
        >
            {children}
        </AdminContext.Provider>
    )
}

export
{
    AdminProvider
}
export default AdminContext;