/* eslint-disable react/prop-types */
const VisitaCard = ({ visita }) =>
{
    return (
        <div className="bg-white rounded-xl shadow-xl border w-full p-4 my-3">
            <h1 className='text-3xl font-black text-pink-800'>{visita.comercio}</h1>
            {visita.comentarios && (<>
                <h1 className='text-xl font-black text-gray-800 mt-2'>Observaciones</h1>
                <p className='text-md font-bold text-gray-600'>{visita.comentarios}</p>
            </>)}
            <div className='grid grid-cols-4 gap-4 mt-2'>
                <p className='text-md font-bold text-gray-600'><span className="font-black text-red-700">Giro:</span> {visita.giro}</p>
                <p className='text-md font-bold text-gray-600'><span className="font-black text-red-700">Status:</span> {visita.status}</p>
                {visita.visitor && <p className='text-md font-bold text-gray-600'><span className="font-black text-red-700">Supervisor:</span> {visita.visitor.nombre}</p>}
                {visita.municipio && <p className='text-md font-bold text-gray-600'><span className="font-black text-red-700">Municipio:</span> {visita.municipio.name}</p>}
            </div>
        </div>
    )
}

export default VisitaCard