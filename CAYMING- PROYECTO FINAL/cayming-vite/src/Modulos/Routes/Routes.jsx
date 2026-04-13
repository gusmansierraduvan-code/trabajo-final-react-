import { Routes, Route } from "react-router-dom";
import Layout from "../Layaout/Pages/Layaout";
import Home from "../Home/Componentes/Home";
import Login from "../Auth/Pages/Login";
import Registro from "../Auth/Pages/Registro";
import Dashboard from "../Home/Pages/Dashboard";
import GestionJuegos from "../Home/Pages/GestionJuegos";
import GestionUsuarios from "../Home/Pages/GestionUsuarios";
import GestionVentas from "../Home/Pages/GestionVentas";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Registro" element={<Registro />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="GestionJuegos" element={<GestionJuegos />} />
        <Route path="GestionUsuarios" element={<GestionUsuarios />} />
        <Route path="GestionVentas" element={<GestionVentas />} />
      </Route>
    </Routes>
  );
};

export default Rutas;