import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
    const [userData, setUserData] = useState({ nombre: '', email: '', password: '' });
    const [originalEmail, setOriginalEmail] = useState('');
    const navigate = useNavigate();

    // 1. Cargar los datos del usuario que inició sesión
    useEffect(() => {
        const sesion = JSON.parse(localStorage.getItem('autenticado_usuario'));
        if (sesion) {
            setUserData(sesion);
            setOriginalEmail(sesion.email);
        } else {
            // Si no hay sesión, mandarlo al login
            navigate('/login');
        }
    }, [navigate]);

    const manejarCambio = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const guardarCambios = (e) => {
        e.preventDefault();

        // 2. Actualizar en la lista global de usuarios usando el correo original
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuariosActualizados = usuarios.map(u => 
            u.email === originalEmail ? userData : u
        );

        // 3. Guardar todo en LocalStorage
        localStorage.setItem('usuarios', JSON.stringify(usuariosActualizados));
        localStorage.setItem('autenticado_usuario', JSON.stringify(userData));
        setOriginalEmail(userData.email);

        alert("¡Perfil actualizado con éxito!");
    };

    return (
        <div style={pageWrapper}>
            <form style={formContainer} onSubmit={guardarCambios}>
                <h2 style={formTitle}>MI PERFIL</h2>
                
                <label style={labelStyle}>Nombre:</label>
                <input 
                    name="nombre"
                    type="text" 
                    value={userData.nombre} 
                    style={inputStyle} 
                    onChange={manejarCambio} 
                />

                <label style={labelStyle}>Correo electrónico:</label>
                <input 
                    name="email"
                    type="email" 
                    value={userData.email} 
                    style={inputStyle} 
                    onChange={manejarCambio}
                    placeholder="correo@ejemplo.com"
                    required
                />

                <label style={labelStyle}>Contraseña:</label>
                <input 
                    name="password"
                    type="password" 
                    placeholder="Nueva contraseña"
                    style={inputStyle} 
                    onChange={manejarCambio} 
                />
                
                <button type="submit" style={btnGold}>GUARDAR CAMBIOS</button>
                <button type="button" style={btnVolver} onClick={() => navigate('/dashboard')}>VOLVER AL DASHBOARD</button>
            </form>
        </div>
    );
};

// --- ESTILOS ---
const pageWrapper = { height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d0f12' };
const formContainer = {
  backgroundColor: '#1a1d23',
  padding: '40px',
  borderRadius: '12px',
  border: '1px solid #3d3a2e',
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  gap: '18px',
  boxShadow: '0 20px 40px rgba(0,0,0,0.35)'
};
const formTitle = {
  color: '#f0d486',
  textAlign: 'center',
  marginBottom: '10px',
  fontFamily: 'Cinzel',
  letterSpacing: '4px'
};
const labelStyle = { color: '#c9b68d', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' };
const inputStyle = {
  padding: '14px',
  marginBottom: '12px',
  borderRadius: '8px',
  border: '1px solid #3d3a2e',
  backgroundColor: '#0d0f12',
  color: 'white',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box'
};
const btnGold = { backgroundColor: '#f0d486', color: 'black', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' };
const btnVolver = { backgroundColor: 'transparent', color: '#c9b68d', border: 'none', marginTop: '10px', cursor: 'pointer', textDecoration: 'underline', alignSelf: 'center' };

export default Perfil;