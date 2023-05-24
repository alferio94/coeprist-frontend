import { Link } from "react-router-dom"
import { useState } from "react"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"
import useAuth from "../hooks/useAuth"
const Login = () =>
{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})
    const { msg } = alerta
    const { setAuth } = useAuth()
    const handleSubmit = async e =>
    {
        e.preventDefault();

        if ([email, password].includes(''))
        {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        try
        {
            const { data } = await clienteAxios.post('usuarios/login', { email, password })
            localStorage.setItem('token', data.token)
            setAuth(data);
            window.location.reload(true)
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
            <h1 className="font-black text-pink-900  text-6xl capitalize text-center">Inicia sesion</h1>
            {msg && <Alerta alerta={alerta} />}
            <form className="my-10 bg-white shadow-xl rounded-lg px-10 py-10" onSubmit={handleSubmit}>
                <div className="my-5">
                    <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Correo"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="my-5">
                    <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    value="Iniciar Sesion"
                    className="mb-5 w-full bg-pink-800 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-pink-900 transition-colors"
                />
            </form>
            <nav className="md:flex md:justify-between">
                <Link
                    to="olvide-password"
                    className="block text-center my-5 text-slate-500 uppercase text-sm"
                >
                    Olvide Password
                </Link>
            </nav>
        </>
    )
}

export default Login