import PropTypes from 'prop-types';
const Card = ({ municipio }) =>
{
    return (
        <div className="bg-white rounded-xl shadow-md border w-80 p-4 my-3">
            <h1 className='text-2xl font-black text-pink-900'>{municipio.municipio}</h1>
            <p className='text-md font-bold text-gray-600'>Giros: </p>
            <div className='flex justify-between flex-wrap mt-2'>
                <p className='text-sm font-semibold text-gray-400 mt-2'>Hospital: <span className='font-normal'>{municipio.Hospital}</span></p>
                <p className='text-sm font-semibold text-gray-400 mt-2'>Bar: <span className='font-normal'>{municipio.Bar}</span></p>
                <p className='text-sm font-semibold text-gray-400 mt-2'>Clinica: <span className='font-normal'>{municipio.Clinica}</span></p>
                <p className='text-sm font-semibold text-gray-400 mt-2'>Restaurante: <span className='font-normal'>{municipio.Restaurante}</span></p>
                <p className='text-sm font-semibold text-gray-400 mt-2'>Farmacia: <span className='font-normal'>{municipio.Farmacia}</span></p>
            </div>
        </div>
    )
}


Card.propTypes = {
    municipio: PropTypes.object
}

export default Card