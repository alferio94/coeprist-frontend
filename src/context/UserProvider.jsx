/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";
import { clienteAxiosHeaders } from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) =>
{
    const [loading, setLoading] = useState(true)
    const [municipios, setMunicipios] = useState([]);
    const [visitas, setVisitas] = useState([]);
    const navigate = useNavigate();
    useEffect(() =>
    {
        const getMunicipios = async () =>
        {
            try
            {
                const { data } = await clienteAxiosHeaders.get('/visitas/municipiosList')
                setMunicipios(data);
                setLoading(false)
            } catch (error)
            {
                console.log(error.response.data)
            }
        }
        getMunicipios();
    }, [])

    const checkUser = (auth) =>
    {
        if (auth.admin)
        {
            navigate("/dashboard")
        }
        return
    }
    const cerrarSesion = () =>
    {
        localStorage.removeItem("token");
        window.location.reload(true)
    }
    const getVistas = async () =>
    {
        try
        {
            const { data } = await clienteAxiosHeaders.get('/visitas')
            setVisitas(data.visitas);
            setLoading(false);
        } catch (error)
        {
            console.log(error.response.data)
        }
    }

    return (
        <UserContext.Provider
            value={{
                checkUser,
                municipios,
                loading,
                cerrarSesion,
                visitas,
                getVistas
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export
{
    UserProvider
}
export default UserContext;