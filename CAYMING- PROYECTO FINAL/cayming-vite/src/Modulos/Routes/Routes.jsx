import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layaout/Pages/Layaout";
import Home from "../Home/Componentes/Home";
import Login from "../Auth/Pages/Login";
import Registro from "../Auth/Pages/Registro";
import Dashboard from "../Home/Pages/Dashboard";
import Perfil from "../Home/Pages/Perfil";
import GestionJuegos from "../Home/Pages/GestionJuegos";
import GestionUsuarios from "../Home/Pages/GestionUsuarios";
import GestionVentas from "../Home/Pages/GestionVentas";

// Componente protegido para rutas que requieren autenticación
const ProtectedRoute = ({ element }) => {
  const autenticado = localStorage.getItem('autenticado') === 'true';
  return autenticado ? element : <Navigate to="/login" />;
};

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
        <Route path="dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="perfil" element={<ProtectedRoute element={<Perfil />} />} />
        <Route path="gestionjuegos" element={<ProtectedRoute element={<GestionJuegos />} />} />
        <Route path="gestionusuarios" element={<ProtectedRoute element={<GestionUsuarios />} />} />
        <Route path="gestionventas" element={<ProtectedRoute element={<GestionVentas />} />} />
      </Route>
    </Routes>
  );
};

export default Rutas;