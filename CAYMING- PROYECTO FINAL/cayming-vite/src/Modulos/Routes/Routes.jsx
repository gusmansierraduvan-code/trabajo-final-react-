import { Routes, Route } from "react-router-dom";
import Layout from "../Layaout/Pages/Layaout";
import Home from "../Home/Componentes/Home";
import Login from "../Auth/Pages/Login";
import Registro from "../Auth/Pages/Registro";
import Dashboard from "../Home/Pages/Dashboard";
import Perfil from "../Home/Pages/Perfil";
import GestionJuegos from "../Home/Pages/GestionJuegos";
import GestionUsuarios from "../Home/Pages/GestionUsuarios";
import GestionVentas from "../Home/Pages/GestionVentas";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="gestionjuegos" element={<GestionJuegos />} />
        <Route path="gestionusuarios" element={<GestionUsuarios />} />
        <Route path="gestionventas" element={<GestionVentas />} />
      </Route>
    </Routes>
  );
};

export default Rutas;