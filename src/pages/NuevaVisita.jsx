import { useState } from "react";
import useUser from "../hooks/useUser"
import Alerta from "../components/Alerta";
import { clienteAxiosHeaders } from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";


const NuevaVisita = () =>
{
    const { auth } = useAuth();
    const [inputs, setInputs] = useState({
        comercio: '',
        municipio: '',
        comentarios: '',
        giro: '',
        status: '',
        images: []
    })
    const [alerta, setAlerta] = useState({})
    const giros = ['Farmacia', 'Clinica', 'Hospital', 'Bar', 'Restaurante'];
    const status = ['Suspendido', 'En revisión', 'Todo en orden'];
    const { municipios } = useUser();
    const validateForm = () =>
    {
        const { comercio, municipio, giro, status, } = inputs
        if ([comercio, municipio, giro, status,].includes(''))
        {
            setAlerta({
                msg: 'Rellena los campos obligatorios',
                error: true
            })
            return false
        }
        return true
    }
    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,

        });
    }
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const { comercio, municipio, giro, status, comentarios } = inputs
        const config = {
            headers: {
                "Content-Type": "aplication/json",
                Authorization: `Bearer ${token}`
            }
        }
        const data = { comercio, municipio, giro, status, comentarios, visitor: auth._id }
        if (!validateForm())
        {
            return
        }

        try
        {
            const response = await clienteAxiosHeaders.post(`/visitas`, data)
            setAlerta({
                msg: response.data.msg,
                error: false
            })

            setInputs({
                comercio: '',
                municipio: '',
                comentarios: '',
                giro: '',
                status: '',
                images: []
            })
            setTimeout(() =>
            {
                setAlerta({})
            }, 1000);
        } catch (error)
        {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }
    return (
        <>
            <h1 className="font-black text-pink-900  text-6xl capitalize text-center">Nueva Visita</h1>
            {alerta.msg && <Alerta alerta={alerta} />}
            <form className="my-5 bg-white shadow-xl rounded-lg px-10 py-10"
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label htmlFor="comercio" className="uppercase text-gray-600 block text-xl font-bold">Comercio<sup>*</sup></label>
                    <input
                        id="comercio"
                        type="text"
                        placeholder="Comercio"
                        name="comercio"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                        value={inputs.comercio}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className="my-5">
                    <label htmlFor="municipio" className="uppercase text-gray-600 block text-xl font-bold">Municipio<sup>*</sup></label>

                    <select
                        name="municipio"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                        value={inputs.municipio}
                        onChange={e => handleChange(e)}>
                        <option value="">Selecciona uno</option>
                        {municipios.length > 0 && municipios.map(municipio =>
                        {
                            return <option key={municipio._id} value={municipio._id}>{municipio.name}</option>
                        })
                        }
                    </select>
                </div>
                <div className="my-5">
                    <label htmlFor="comentarios" className="uppercase text-gray-600 block text-xl font-bold">Comentarios</label>
                    <textarea
                        id="comentarios"
                        type="text"
                        placeholder="Comentarios"
                        name="comentarios"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                        value={inputs.comentarios}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className="my-5">
                    <label htmlFor="grio" className="uppercase text-gray-600 block text-xl font-bold">Grio<sup>*</sup></label>

                    <select
                        name="giro"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                        value={inputs.giro}
                        onChange={e => handleChange(e)}>
                        <option value="">Selecciona uno</option>
                        {giros.map(giro =>
                        {
                            return <option key={Math.random().toString(32).substring(2) + Date.now().toString(32)} value={giro}>{giro}</option>
                        })
                        }
                    </select>
                </div>
                <div className="my-5">
                    <label htmlFor="status" className="uppercase text-gray-600 block text-xl font-bold">Status<sup>*</sup></label>

                    <select
                        name="status"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                        value={inputs.status}
                        onChange={e => handleChange(e)}>
                        <option value="">Selecciona uno</option>
                        {status.map(status =>
                        {
                            return <option key={Math.random().toString(32).substring(2) + Date.now().toString(32)} value={status}>{status}</option>
                        })
                        }
                    </select>
                </div>

                <input
                    type="submit"
                    value="Registrar Visita"
                    className="mb-5 w-full bg-pink-800 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-pink-900 transition-colors"
                    onClick={handleSubmit}
                />
            </form>

        </>
    )
}

export default NuevaVisita