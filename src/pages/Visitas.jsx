import { useEffect } from "react";
import useUser from "../hooks/useUser"
import VisitaCard from "../components/VisitaCard"
const Visitas = () =>
{
    const { visitas, loading, getVistas } = useUser();

    useEffect(() =>
    {
        getVistas();
    }, [])
    return (
        <>
            {loading ? 'cargando' : (
                <>
                    <h1 className="text-4xl font-black">Dashboard</h1>
                    <ul>
                        {visitas.length > 0 ? visitas.map(visita =>
                        {
                            return (
                                <li key={Math.random().toString(32).substring(2) + Date.now().toString(32)}>
                                    <VisitaCard visita={visita} />
                                </li>
                            )
                        })
                            : 'No hay visitas que mostrar'}
                    </ul>
                </>
            )}
        </>
    )
}

export default Visitas