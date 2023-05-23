import { useEffect } from "react";
import useAdmin from "../hooks/useAdmin"
import Card from "../components/Card";
const Dashboard = () =>
{
    const { getMunicipiosData, loading, municipiosData } = useAdmin();
    useEffect(() =>
    {
        getMunicipiosData();
    }, [])
    return (
        <>
            <h1 className="text-4xl font-black">Dashboard</h1>
            {loading && 'Cargando...'}
            <div className="flex md:justify-start justify-center md:gap-9 flex-wrap">
                {municipiosData.length > 0 && municipiosData.map(municipio =>
                {
                    return (<Card key={municipio._id} municipio={municipio} />)
                })}
            </div>
        </>
    )
}

export default Dashboard