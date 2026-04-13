import React from 'react';

const Registro = () => {
  return (
    <div style={pageWrapper}>
      <div style={formContainer}>
        <h2 style={formTitle}>CREAR CUENTA</h2>
        
        <input type="text" placeholder="Nombre completo" style={inputStyle} />
        <input type="email" placeholder="Correo electrónico" style={inputStyle} />
        <input type="password" placeholder="Contraseña" style={inputStyle} />
        <input type="password" placeholder="Confirmar contraseña" style={inputStyle} />
        
        <button style={btnBlue}>REGISTRARSE</button>
        <p style={{ color: '#888', fontSize: '12px', marginTop: '10px' }}>
          ¿Ya tienes una cuenta? <span style={{ color: '#646cff', cursor: 'pointer' }}>Inicia sesión</span>
        </p>
      </div>
    </div>
  );
};

const pageWrapper = {
  backgroundColor: '#0d0f12',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px'
};

const formContainer = {
  backgroundColor: '#15181b',
  border: '1px solid #646cff',
  padding: '50px 40px',
  width: '100%',
  maxWidth: '400px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px', 
  borderRadius: '8px'
};

const formTitle = { color: '#f0d486', fontFamily: 'Cinzel', marginBottom: '10px' };

const inputStyle = {
  backgroundColor: '#0d0f12',
  border: '1px solid #3d3a2e',
  padding: '12px',
  color: 'white',
  borderRadius: '4px',
  outline: 'none'
};

const btnBlue = {
  backgroundColor: '#646cff',
  color: 'white',
  border: 'none',
  padding: '12px',
  fontWeight: 'bold',
  cursor: 'pointer',
  borderRadius: '4px'
};

export default Registro;