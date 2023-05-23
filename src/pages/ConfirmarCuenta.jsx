import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import Alerta from '../components/Alerta'

const ConfirmarCuenta = () =>
{
    const params = useParams();
    const { token } = params;
    const [alerta, setAlerta] = useState({})
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const { msg } = alerta

    //Use Effect ayuda a ejecutar una funcion cuando el componente se renderiza
    useEffect(() =>
    {
        const confirmarAcount = async () =>
        {
            try
            {
                const { data } = await clienteAxios.get(`/usuarios/confirmar/${token}`);
                setAlerta({
                    msg: data.msg,
                    error: false
                })
                setCuentaConfirmada(true)
            } catch (error)
            {
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                })
            }
        }
        confirmarAcount();
    }, [])
    return (
        <>
            <h1 className="font-black text-pink-900  text-6xl capitalize text-center">Confirma Tu Cuenta</h1>
            <div className="mt:20 md:mt-10 shadow-lg px-5 py-6 rounded-xl bg-white">
                {msg && <Alerta alerta={alerta} />}
                {cuentaConfirmada && <Link
                    to="/"
                    className="block text-center my-5 text-slate-500 uppercase text-sm"
                >
                    Iniciar Sesion
                </Link>}
            </div>
        </>
    )
}

export default ConfirmarCuenta