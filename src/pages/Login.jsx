import { Link } from "react-router-dom"
const Login = () =>
{
    return (
        <>
            <h1 className="font-black text-pink-900  text-6xl capitalize text-center">Inicia sesion</h1>

            <form className="my-10 bg-white shadow-xl rounded-lg px-10 py-10">
                <div className="my-5">
                    <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Correo"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                    />
                </div>
                <div className="my-5">
                    <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
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
                    to="registrar"
                    className="block text-center my-5 text-slate-500 uppercase text-sm"
                >
                    Nuevo usuario
                </Link>
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