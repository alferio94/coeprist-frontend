import { NavLink } from "react-router-dom"
import { useState } from "react"
import useAuth from "../hooks/useAuth";
const Navbar = () =>
{
    const [open, setOpen] = useState(false);
    const { auth } = useAuth();
    const admin = [{
        to: '/dashboard',
        name: 'Dashboard'
    }, {
        to: 'visitas',
        name: 'Visitas'
    }, {
        to: 'reporte',
        name: 'Reportes'
    }, {
        to: 'registrar',
        name: 'Nuevo usuario'
    }]
    const visitor = [{
        to: '/visitas',
        name: 'Visitas'
    }, {
        to: 'nueva-visita',
        name: 'Nueva visita'
    }]
    return (
        <header className='shadow-md w-full md:z-auto z-[2] fixed top-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <h2 className="text-3xl text-pink-900 font-black">COEPRIST</h2>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:gap-4 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[0] left-0 w-full md:w-auto md:h-auto h-[92vh] md:pl-0 pl-9 transition-all duration-300 ease-in top-[4.3rem] ${open ? '' : 'left-[100%]'}`}>
                    {auth.admin && admin.map(link =>
                    {
                        return <li className="className='md:ml-0 text-xl md:my-0 my-10'" key={link.name}>
                            <NavLink
                                to={link.to}
                                className="font-bold uppercase"
                                onClick={() => setOpen(false)}
                                style={({ isActive }) =>
                                {
                                    return {
                                        color: isActive && "#9d174d"
                                    }
                                }}
                                end
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    })}
                    {!auth.admin && visitor.map(link =>
                    {
                        return <li className="className='md:ml-0 text-xl md:my-0 my-10'" key={link.name}>
                            <NavLink
                                to={link.to}
                                className="font-bold uppercase"
                                onClick={() => setOpen(false)}
                                style={({ isActive }) =>
                                {
                                    return {
                                        color: isActive && "#9d174d"
                                    }
                                }}
                                end
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    })}

                    <button
                        type="button"
                        className="text-sm bg-pink-800 p-3 text-white uppercase font-bold rounded-md hover:cursor-pointer hover:bg-pink-900 transition-colors md:mt-0 mt-3"
                    >Cerrar Sesion</button>
                </ul>
            </div>
        </header>

    )
}

export default Navbar