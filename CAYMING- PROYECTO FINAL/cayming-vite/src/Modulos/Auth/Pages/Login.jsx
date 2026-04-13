import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState(''); // Usamos email para coincidir con el registro
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();
    
    // 1. Traer la lista de usuarios registrados del navegador
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // 2. Buscar si el correo y la contraseña coinciden con alguno
    const usuarioValido = usuariosGuardados.find(u => u.email === email && u.password === password);

    // 3. También dejamos el 'admin' por si acaso
    // Cambia lo que tienes en el if (línea 19 a 22) por esto:
    if (usuarioValido || (email === 'admin@gmail.com' && password === '1234')) {
      const datosUsuario = usuarioValido || { nombre: 'Administrador', email: 'admin@gmail.com' };
      
      localStorage.setItem('autenticado', 'true');
      // Esta línea es la que necesita el componente Perfil:
      localStorage.setItem('autenticado_usuario', JSON.stringify(datosUsuario)); 
      
      // Notificar al Navbar que la autenticación cambió
      window.dispatchEvent(new Event('authChanged'));
      
      alert('¡Bienvenido a CAYMING!');
      navigate('/dashboard');
    } else {
      alert('Usuario no encontrado o datos incorrectos. ¡Regístrate primero!');
    }
  };

  return (
    <div style={authContainer}>
      <form onSubmit={manejarLogin} style={authCard}>
        <h2 style={{ color: '#f0d486', fontFamily: 'Cinzel' }}>INICIAR SESIÓN</h2>
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          style={authInput} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          style={authInput} 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={authBtn}>INGRESAR AL SISTEMA</button>
        <p style={{ color: '#888', fontSize: '12px', marginTop: '10px' }}>
          ¿No tienes cuenta? <span style={{ color: '#646cff', cursor: 'pointer' }} onClick={() => navigate('/registro')}>Regístrate aquí</span>
        </p>
      </form>
    </div>
  );
};

// Estilos que ya tenías
const authContainer = { height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d0f12' };
const authCard = { backgroundColor: '#1a1d23', padding: '40px', borderRadius: '8px', border: '1px solid #3d3a2e', display: 'flex', flexDirection: 'column', gap: '20px', width: '350px', textAlign: 'center' };
const authInput = { padding: '12px', borderRadius: '4px', border: '1px solid #3d3a2e', backgroundColor: '#0d0f12', color: 'white' };
const authBtn = { backgroundColor: '#646cff', color: 'white', border: 'none', padding: '12px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' };

export default Login;