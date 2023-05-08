import { Link } from "react-router-dom"
const OlvidePassword = () =>
{
    return (
        <>
            <h1 className="font-black text-pink-900  text-6xl capitalize text-center">Recuperar Password</h1>

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

                <input
                    type="submit"
                    value="Recuperar Password"
                    className="mb-5 w-full bg-pink-800 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-pink-900 transition-colors"
                />
            </form>
            <nav className="md:flex md:justify-center">
                <Link
                    to="/"
                    className="block text-center my-5 text-slate-500 uppercase text-sm"
                >
                    iniciar Sesion
                </Link>
            </nav>
        </>
    )
}

export default OlvidePassword