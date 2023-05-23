import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import Alerta from "../components/Alerta"
const NuevoPassword = () =>
{
    const params = useParams();
    const [tokenValido, setTokenValido] = useState(false);
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})
    const [passwordChanged, setPasswordChanged] = useState(false)
    const { token } = params;
    const { msg } = alerta
    useEffect(() =>
    {
        const comprobarToken = async () =>
        {
            try
            {
                await clienteAxios.get(`/usuarios/olvide-password/${token}`)
                setTokenValido(true);
            } catch (error)
            {
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                })
            }
        }
        comprobarToken()
    }, [])
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        if (password.length < 6)
        {
            setAlerta({
                msg: 'El password es muy corto',
                error: true
            })
            return
        }

        try
        {
            const { data } = await clienteAxios.post(`/usuarios/olvide-password/${token}`, { password })
            setAlerta({
                msg: data.msg,
                error: false
            })
            setPasswordChanged(true)
        } catch (error)
        {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }

    }
    return (
        <>
            <h1 className="font-black text-pink-900  text-6xl capitalize text-center">Restablecer Password</h1>
            {msg && <Alerta alerta={alerta} />}
            {tokenValido && (
                <form
                    className="my-5 bg-white shadow-xl rounded-lg px-10 py-10"
                    onSubmit={handleSubmit}
                >

                    <div className="my-5">
                        <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Nuevo Password"
                            className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Restablecer Password"
                        className="mb-5 w-full bg-pink-800 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-pink-900 transition-colors"
                    />
                </form>
            )}
            {passwordChanged && <Link
                to="/"
                className="block text-center my-5 text-slate-500 uppercase text-sm"
            >
                Iniciar Sesion
            </Link>}

        </>
    )
}

export default NuevoPassword