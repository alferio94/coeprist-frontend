import { Outlet, Navigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Navbar from "../components/Navbar";
import useAdmin from "../hooks/useAdmin";
const RutaProtegida = () =>
{
    const { auth, loading } = useAuth();
    const location = useLocation();
    const { checkAdmin } = useAdmin();

    if (loading) return 'Cargando'
    checkAdmin(auth);

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
                : <Navigate to="/" replace state={{ from: location }} />}
        </>
    )
}

export default RutaProtegida