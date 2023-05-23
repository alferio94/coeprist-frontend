import { useState } from "react"
import Alerta from '../components/Alerta'
import clienteAxios from "../config/clienteAxios";


const Registrar = () =>
{
    const [inputs, setInputs] = useState({
        nombre: '',
        email: '',
        password: '',
        repetirPassword: ''
    });
    const [alerta, setAlerta] = useState({});
    const { msg } = alerta

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,

        });
    }
    const validateForm = () =>
    {
        const { nombre, email, password, repetirPassword } = inputs
        if ([nombre, email, password, repetirPassword].includes(''))
        {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return false
        }
        if (password.length < 7)
        {
            setAlerta({
                msg: 'El password es muy corto',
                error: true
            })
            return false
        }
        if (password !== repetirPassword)
        {
            setAlerta({
                msg: 'Los passwords no coinciden',
                error: true
            })
            return false
        }
        return true
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        if (!validateForm())
        {
            return
        }

        const { nombre, email, password } = inputs

        try
        {
            const { data } = await clienteAxios.post(`/usuarios`, {
                nombre,
                email,
                password
            })
            setAlerta({
                msg: data.msg,
                error: false
            })

            setInputs({
                nombre: '',
                email: '',
                password: '',
                repetirPassword: ''
            })
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
            <h1 className="font-black text-pink-900  text-6xl capitalize text-center">Nuevo Usuario</h1>
            {msg && <Alerta alerta={alerta} />}
            <form className="my-5 bg-white shadow-xl rounded-lg px-10 py-10"
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label htmlFor="nombre" className="uppercase text-gray-600 block text-xl font-bold">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                        value={inputs.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-5">
                    <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Correo"
                        name="email"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-5">
                    <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-5">
                    <label htmlFor="repetir-password" className="uppercase text-gray-600 block text-xl font-bold">Repetir Password</label>
                    <input
                        id="repetir-password"
                        type="password"
                        name="repetirPassword"
                        placeholder="Repetir Password"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                        value={inputs.repetirPassword}
                        onChange={handleChange}
                    />
                </div>

                <input
                    type="submit"
                    value="Crear Cuenta"
                    className="mb-5 w-full bg-pink-800 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-pink-900 transition-colors"
                />
            </form>

        </>
    )
}

export default Registrar