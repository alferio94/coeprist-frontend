import { Outlet, Navigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Navbar from "../components/Navbar";
const RutaProtegida = () =>
{
    const { auth, loading } = useAuth();
    const location = useLocation();

    if (loading) return 'Cargando'

    return (
        <>
            {auth._id ?
                (
                    <div>
                        <Navbar />
                        <div className="md:p-9 p-7 mt-12 placeholder:md:min-h-[91vh]">
                            <h3 className="text-xl font-normal mb-5">Hola {auth.nombre}</h3>
                            <main >
                                <Outlet />
                            </main>
                        </div>
                    </div>
                )
                : <Navigate to="/" replace state={{ from: location }} />}
        </>
    )
}

export default RutaProtegida