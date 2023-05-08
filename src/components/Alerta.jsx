import PropTypes from 'prop-types';

const Alerta = ({ alerta }) =>
{
    return (
        <div className={`${alerta.error ? 'from-red-600 to-red-800' : 'from-green-800 to-green-900'} bg-gradient-to-r 
        text-center p-2 rounded-xl uppercase text-white font-bold text-sm my-10`}>
            {alerta.msg}
        </div >
    )
}

Alerta.propTypes = {
    alerta: PropTypes.object
}


export default Alerta