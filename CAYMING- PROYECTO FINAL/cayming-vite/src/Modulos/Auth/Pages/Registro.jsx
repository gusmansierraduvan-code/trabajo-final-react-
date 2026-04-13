import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const manejarRegistro = (e) => {
        e.preventDefault();
        
        const nuevoUsuario = { nombre, email, password };

        const usuariosExistentes = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuariosExistentes.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosExistentes));

        alert("¡Cuenta creada con éxito! Ahora puedes iniciar sesión.");
        navigate('/login'); 
    };

    return (
        <div style={pageWrapper}>
            <form style={formContainer} onSubmit={manejarRegistro}> 
                <h2 style={formTitle}>CREAR CUENTA</h2>
                
                <input 
                    type="text" 
                    placeholder="Nombre completo" 
                    style={inputStyle} 
                    onChange={(e) => setNombre(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    style={inputStyle} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    style={inputStyle} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                
                <button type="submit" style={btnBlue}>REGISTRARSE</button>
                
                <p style={{ color: '#888', fontSize: '12px', marginTop: '15px', textAlign: 'center' }}>
                    ¿Ya tienes cuenta? <span style={{ color: '#646cff', cursor: 'pointer' }} onClick={() => navigate('/login')}>Inicia sesión</span>
                </p>
            </form>
        </div>
    );
};

// --- ESTILOS (Esto es lo que faltaba para que no de error) ---
const pageWrapper = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0f12'
};

const formContainer = {
    backgroundColor: '#1a1d23',
    padding: '40px',
    borderRadius: '8px',
    border: '1px solid #3d3a2e',
    display: 'flex',
    flexDirection: 'column',
    width: '350px'
};

const formTitle = {
    color: '#f0d486',
    fontFamily: 'Cinzel, serif',
    textAlign: 'center',
    marginBottom: '20px'
};

const inputStyle = {
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #3d3a2e',
    backgroundColor: '#0d0f12',
    color: 'white'
};

const btnBlue = {
    backgroundColor: '#646cff',
    color: 'white',
    border: 'none',
    padding: '12px',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px'
};

export default Registro;