import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();
    
    // Simulación de validación (puedes poner lo que quieras)
    if (usuario === 'admin' && password === '1234') {
      localStorage.setItem('autenticado', 'true'); // Guardamos la sesión
      alert('¡Bienvenido a CAYMING!');
      navigate('/Dashboard'); // Te manda al panel
    } else {
      alert('Usuario o contraseña incorrectos. Prueba con admin / 1234');
    }
  };

  return (
    <div style={authContainer}>
      <form onSubmit={manejarLogin} style={authCard}>
        <h2 style={{ color: '#f0d486', fontFamily: 'Cinzel' }}>INICIAR SESIÓN</h2>
        <input 
          type="text" 
          placeholder="Usuario" 
          style={authInput} 
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          style={authInput} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={authBtn}>INGRESAR AL SISTEMA</button>
      </form>
    </div>
  );
};

// Estilos rápidos para que combine con tu tienda
const authContainer = { height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d0f12' };
const authCard = { backgroundColor: '#1a1d23', padding: '40px', borderRadius: '8px', border: '1px solid #3d3a2e', display: 'flex', flexDirection: 'column', gap: '20px', width: '350px', textAlign: 'center' };
const authInput = { padding: '12px', borderRadius: '4px', border: '1px solid #3d3a2e', backgroundColor: '#0d0f12', color: 'white' };
const authBtn = { backgroundColor: '#646cff', color: 'white', border: 'none', padding: '12px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' };

export default Login;