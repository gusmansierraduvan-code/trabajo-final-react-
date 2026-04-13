import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [autenticado, setAutenticado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAutenticado(localStorage.getItem('autenticado') === 'true');
    const handleStorageChange = () => {
      setAutenticado(localStorage.getItem('autenticado') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem('autenticado');
    localStorage.removeItem('autenticado_usuario');
    setAutenticado(false);
    navigate('/login');
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>CAY<span style={{color: '#646cff'}}>MING</span></div>
      
      <div style={linksContainer}>
        <Link to="/" style={linkStyle}>INICIO</Link>
        {!autenticado && <Link to="/login" style={linkStyle}>INGRESAR</Link>}
        {!autenticado && <Link to="/registro" style={linkStyle}>REGISTRARSE</Link>}
        {autenticado && <Link to="/perfil" style={linkStyle}>MI PERFIL</Link>}
        {autenticado && <button onClick={cerrarSesion} style={logoutBtn}>CERRAR SESIÓN</button>}
      </div>
    </nav>
  );
};

// Estilos para que combine con tu diseño oscuro
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 5%',
  backgroundColor: '#0d0f12',
  borderBottom: '1px solid #3d3a2e'
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#f0d486',
  letterSpacing: '2px'
};

const linksContainer = {
  display: 'flex',
  gap: '30px'
};

const linkStyle = {
  color: '#c9b68d',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  letterSpacing: '1px',
  transition: '0.3s'
};

const logoutBtn = {
  background: 'transparent',
  border: '1px solid #646cff',
  color: '#c9b68d',
  borderRadius: '4px',
  padding: '8px 12px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  fontWeight: 'bold'
};

export default Navbar;