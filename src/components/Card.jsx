import PropTypes from 'prop-types';
const Card = ({ municipio }) =>
{
    const { giros } = municipio
    return (
        <div className="bg-white rounded-xl shadow-md border w-80 p-4 my-3">
            <h1 className='text-2xl font-black text-pink-900'>{municipio.municipio}</h1>
            <p className='text-md font-bold text-gray-600'>Giros: </p>
            <div className='flex justify-between flex-wrap mt-2'>
                {giros.map(giro =>
                {
                    return <p key={Math.random().toString(32).substring(2) + Date.now().toString(32)} className='text-sm font-semibold text-gray-400 mt-2'>{giro.giro}: <span className='font-normal'>{giro.visitas}</span></p>
                })}
            </div>
        </div>
    )
}


Card.propTypes = {
    municipio: PropTypes.object
}

export default Card