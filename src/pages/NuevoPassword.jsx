import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import Alerta from "../components/Alerta"
const NuevoPassword = () =>
{
    return (
        <>
            <h1 className="font-black text-pink-900  text-6xl capitalize text-center">Restablecer Password</h1>

            <form className="my-5 bg-white shadow-xl rounded-lg px-10 py-10">

                <div className="my-5">
                    <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Nuevo Password"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
                    />
                </div>

                <input
                    type="submit"
                    value="Restablecer Password"
                    className="mb-5 w-full bg-pink-800 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-pink-900 transition-colors"
                />
            </form>

        </>
    )
}

export default NuevoPassword