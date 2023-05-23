import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) =>
{
    const [auth, setAuth] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() =>
    {
        const autenticarUsuario = async () =>
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
                const { data } = await clienteAxios.get('/usuarios/perfil', config)
                setAuth(data.usuario)
                if (data.usuario.admin)
                {
                    navigate('/dashboard', {
                        replace: true
                    })
                } if (data.usuario._id && !data.usuario.admin)
                {
                    navigate('/visitas', {
                        replace: true
                    })
                }
            } catch (error)
            {
                console.log(error.response.data)
            } finally
            {
                setLoading(false);
            }
        }

        autenticarUsuario();

    }, [])
    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export
{
    AuthProvider
}
export default AuthContext;