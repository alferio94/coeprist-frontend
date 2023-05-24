/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import TablePDF from "./TablePDF"
const MunicipiosTabla = ({ municipios }) =>
{
    return (
        <>
            <h1 style={{ fontSize: '2rem', color: '#444343', textAlign: 'center' }}>Reporte visitas totales por municipio</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                    <tr style={{ backgroundColor: '#9d174d', color: '#fff' }}>
                        <th style={{ border: '1px solid #ddd', paddinTop: '12px', paddingBottom: '12px' }}>Municipio</th>
                        <th style={{ border: '1px solid #ddd', paddinTop: '12px', paddingBottom: '12px' }}>Hospitales</th>
                        <th style={{ border: '1px solid #ddd', paddinTop: '12px', paddingBottom: '12px' }}>Bares</th>
                        <th style={{ border: '1px solid #ddd', paddinTop: '12px', paddingBottom: '12px' }}>Clinicas</th>
                        <th style={{ border: '1px solid #ddd', paddinTop: '12px', paddingBottom: '12px' }}>Farmacias</th>
                        <th style={{ border: '1px solid #ddd', paddinTop: '12px', paddingBottom: '12px' }}>Restaurantes</th>
                    </tr>
                </thead>
                <tbody>
                    {municipios.length > 0 && municipios.map(muni =>
                    {
                        const { giros } = muni

                        return (

                            <tr key={`${muni._id}`}>
                                <td style={{ border: '1px solid #ddd', paddinTop: '12px', paddingBottom: '12px' }}>{muni.municipio}</td>
                                {
                                    giros.map(giro =>
                                    {
                                        return <td key={Math.random().toString(32).substring(2) + Date.now().toString(32)} style={{ border: '1px solid #ddd', paddinTop: '12px', paddingBottom: '12px' }}>{giro.visitas}</td>
                                    })
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table >
            <TablePDF municipios={municipios} />
        </>
    )
}

export default MunicipiosTabla