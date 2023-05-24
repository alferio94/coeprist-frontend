import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Navbar from "../components/Navbar";
const RutaProtegida = () =>
{
    const { auth, loading } = useAuth();

    if (loading) return 'Cargando'


    return (
        <>
            {auth._id ?
                (
                    <div>
                        <Navbar />
                        <div className="md:p-9 p-7 mt-12 placeholder:md:min-h-[91vh]">
                            <main >
                                <Outlet />
                            </main>
                        </div>
                    </div>
                )
                : <Navigate to="/" replace />}
        </>
    )
}

export default RutaProtegida