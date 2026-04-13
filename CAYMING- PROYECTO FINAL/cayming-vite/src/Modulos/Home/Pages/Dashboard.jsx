import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem('autenticado');
    navigate('/Login');
  };

  return (
    <div style={{ backgroundColor: '#0d0f12', minHeight: '100vh', color: 'white', padding: '50px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #3d3a2e', paddingBottom: '20px' }}>
        <h1 style={{ color: '#f0d486' }}>PANEL DE ADMINISTRACIÓN</h1>
        <button onClick={cerrarSesion} style={{ background: 'red', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>Cerrar Sesión</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}>
        {/* BOTONES A LOS MÓDULOS CRUD */}
        <Link to="/GestionJuegos" style={cardLink}>🎮 GESTIÓN DE JUEGOS</Link>
        <Link to="/GestionUsuarios" style={cardLink}>👥 GESTIÓN DE USUARIOS</Link>
        <Link to="/GestionVentas" style={cardLink}>💰 GESTIÓN DE VENTAS</Link>
      </div>
    </div>
  );
};



const cardLink = {
  backgroundColor: '#1a1d23',       
  padding: '50px 20px',              
  textAlign: 'center',
  borderRadius: '12px',              
  border: '2px solid #3d3a2e',      
  color: '#f0d486',                 
  textDecoration: 'none',           
  fontSize: '1.2rem',
  fontWeight: 'bold',
  letterSpacing: '2px',
  transition: 'all 0.3s ease',       
  boxShadow: '0 8px 15px rgba(0,0,0,0.4)', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
};


export default Dashboard;