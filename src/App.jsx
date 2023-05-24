import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import RutaProtegida from "./layouts/RutaProtegida"
import Login from "./pages/Login"
import Registrar from "./pages/Registrar"
import OlvidePassword from "./pages/OlvidePassword"
import NuevoPassword from "./pages/NuevoPassword"
import ConfirmarCuenta from "./pages/ConfirmarCuenta"
import Dashboard from "./pages/Dashboard"
import NuevaVisita from "./pages/NuevaVisita"
import { AuthProvider } from "./context/AuthProvider"
import { AdminProvider } from "./context/AdminProvider"
import Visitas from "./pages/Visitas"
import MunicipiosReport from "./pages/MunicipiosReport"
function App()
{

  return (
    <BrowserRouter>
      <AuthProvider>
        <AdminProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="nuevo-password/:token" element={<NuevoPassword />} />
              <Route path="confirmar/:token" element={<ConfirmarCuenta />} />
            </Route>
            <Route path="/dashboard" element={<RutaProtegida />}>
              <Route index element={<Dashboard />} />
              <Route path="reporte" element={<MunicipiosReport />} />
              <Route path="nueva-visita" element={<NuevaVisita />} />
              <Route path="registrar" element={<Registrar />} />
            </Route>
            <Route path="/visitas" element={<RutaProtegida />}>
              <Route index element={<Visitas />} />
              <Route path="nueva-visita" element={<NuevaVisita />} />
            </Route>
          </Routes>
        </AdminProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
