import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [autenticado, setAutenticado] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navigate = useNavigate();

  // Función para verificar autenticación
  const verificarAutenticacion = useCallback(() => {
    setAutenticado(localStorage.getItem('autenticado') === 'true');
  }, []);

  useEffect(() => {
    // Verificar al cargar
    verificarAutenticacion();

    // Escuchar cambios de storage (desde otras pestañas)
    const handleStorageChange = () => {
      verificarAutenticacion();
    };

    // Escuchar cambios cuando la página vuelve a estar activa
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        verificarAutenticacion();
      }
    };

    // Escuchar cambios personalizados en la misma pestaña
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('authChanged', verificarAutenticacion);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('authChanged', verificarAutenticacion);
    };
  }, [verificarAutenticacion]);

  const cerrarSesion = () => {
    localStorage.removeItem('autenticado');
    localStorage.removeItem('autenticado_usuario');
    setAutenticado(false);
    navigate('/');
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoLinkStyle}>
        <div style={logoStyle}>CAY<span style={{color: '#646cff'}}>MING</span></div>
      </Link>
      
      <div style={linksContainer}>
        {!autenticado && <Link to="/" style={linkStyle}>INICIO</Link>}
        {!autenticado && <Link to="/login" style={linkStyle}>INGRESAR</Link>}
        {!autenticado && <Link to="/registro" style={linkStyle}>REGISTRARSE</Link>}
        {autenticado && (
          <div style={modulosMenuContainer}>
            <button 
              style={{...linkStyle, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0}}
              onMouseEnter={() => setMenuAbierto(true)}
              onMouseLeave={() => setMenuAbierto(false)}
            >
              🎮 MÓDULOS ▼
            </button>
            {menuAbierto && (
              <div style={dropdownMenu} onMouseEnter={() => setMenuAbierto(true)} onMouseLeave={() => setMenuAbierto(false)}>
                <Link to="/" style={dropdownLink}>🏠 Inicio</Link>
                <Link to="/dashboard" style={dropdownLink}>📊 Dashboard</Link>
                <Link to="/gestionjuegos" style={dropdownLink}>🎮 Gestión de Juegos</Link>
                <Link to="/gestionusuarios" style={dropdownLink}>👥 Gestión de Usuarios</Link>
                <Link to="/gestionventas" style={dropdownLink}>💰 Gestión de Ventas</Link>
                <Link to="/perfil" style={dropdownLink}>👤 Mi Perfil</Link>
              </div>
            )}
          </div>
        )}
        {autenticado && <button onClick={cerrarSesion} style={logoutBtn}>🚪 SALIR</button>}
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
  borderBottom: '1px solid #3d3a2e',
  position: 'relative'
};

const logoLinkStyle = {
  textDecoration: 'none',
  cursor: 'pointer'
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#f0d486',
  letterSpacing: '2px'
};

const linksContainer = {
  display: 'flex',
  gap: '30px',
  alignItems: 'center'
};

const linkStyle = {
  color: '#c9b68d',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  letterSpacing: '1px',
  transition: '0.3s'
};

const modulosMenuContainer = {
  position: 'relative',
  display: 'inline-block'
};

const dropdownMenu = {
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#1a1d23',
  border: '1px solid #3d3a2e',
  borderRadius: '4px',
  minWidth: '200px',
  zIndex: 1000,
  marginTop: '5px',
  boxShadow: '0 8px 15px rgba(0,0,0,0.4)'
};

const dropdownLink = {
  display: 'block',
  color: '#c9b68d',
  textDecoration: 'none',
  fontSize: '0.85rem',
  fontWeight: 'bold',
  letterSpacing: '1px',
  padding: '12px 15px',
  transition: 'all 0.3s ease',
  borderBottom: '1px solid #3d3a2e',
  ':hover': {
    backgroundColor: '#646cff',
    color: '#f0d486'
  }
};

const logoutBtn = {
  background: 'transparent',
  color: '#c9b68d',
  border: '1px solid #3d3a2e',
  borderRadius: '4px',
  padding: '8px 12px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  fontWeight: '500',
  transition: '0.3s ease',
  letterSpacing: '1px'
};

export default Navbar;