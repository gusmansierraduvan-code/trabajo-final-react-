import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>CAY<span style={{color: '#646cff'}}>MING</span></div>
      
      <div style={linksContainer}>
        <Link to="/" style={linkStyle}>INICIO</Link>
        <Link to="/Login" style={linkStyle}>INGRESAR</Link>
        <Link to="/Registro" style={linkStyle}>REGISTRARSE</Link>
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

export default Navbar;