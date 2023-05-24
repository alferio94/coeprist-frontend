import useAdmin from "../hooks/useAdmin"
import MunicipiosTabla from "../components/MunicipiosTabla"
const MunicipiosReport = () =>
{
    const { municipiosData, loading } = useAdmin()
    return (
        <>
            {loading && 'Cargando...'}
            <MunicipiosTabla municipios={municipiosData} />
        </>
    )
}

export default MunicipiosReport