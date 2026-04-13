import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GestionUsuarios = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', email: '', rol: 'Cliente' });

  // Cargar usuarios al iniciar
  useEffect(() => {
    const datosGuardados = localStorage.getItem('lista_usuarios');
    if (datosGuardados) {
      setUsuarios(JSON.parse(datosGuardados));
    }
  }, []);

  const agregarUsuario = (e) => {
    e.preventDefault();
    if (!nuevoUsuario.nombre || !nuevoUsuario.email) return alert("Llena los campos obligatorios");

    const usuarioFinal = { ...nuevoUsuario, id: Date.now() };
    const nuevaLista = [...usuarios, usuarioFinal];
    setUsuarios(nuevaLista);
    localStorage.setItem('lista_usuarios', JSON.stringify(nuevaLista));
    setNuevoUsuario({ nombre: '', email: '', rol: 'Cliente' });
  };

  const eliminarUsuario = (id) => {
    const filtrados = usuarios.filter(u => u.id !== id);
    setUsuarios(filtrados);
    localStorage.setItem('lista_usuarios', JSON.stringify(filtrados));
  };

  return (
    <div style={containerStyle}>
      <button onClick={() => navigate('/dashboard')} style={backBtnStyle} title="Volver atrás">
        ← ATRÁS
      </button>
      <div style={headerContainer}>
        <h2 style={headerStyle}>👥 GESTIÓN DE USUARIOS - CAYMING</h2>
      </div>

      <form onSubmit={agregarUsuario} style={formStyle}>
        <div style={inputGroup}>
          <label style={labelStyle}>Nombre Completo</label>
          <input 
            type="text" placeholder="Ej: Juan Pérez" 
            value={nuevoUsuario.nombre}
            onChange={(e) => setNuevoUsuario({...nuevoUsuario, nombre: e.target.value})}
            style={inputStyle}
          />
        </div>
        <div style={inputGroup}>
          <label style={labelStyle}>Correo Electrónico</label>
          <input 
            type="email" placeholder="ejemplo@correo.com" 
            value={nuevoUsuario.email}
            onChange={(e) => setNuevoUsuario({...nuevoUsuario, email: e.target.value})}
            style={inputStyle}
          />
        </div>
        <div style={inputGroup}>
          <label style={labelStyle}>Rol del Usuario</label>
          <select 
            value={nuevoUsuario.rol}
            onChange={(e) => setNuevoUsuario({...nuevoUsuario, rol: e.target.value})}
            style={inputStyle}
          >
            <option value="Cliente">Cliente</option>
            <option value="Administrador">Administrador</option>
          </select>
        </div>
        <button type="submit" style={btnStyle}>REGISTRAR</button>
      </form>

      <div style={tableWrapper}>
        <table style={tableStyle}>
          <thead>
            <tr style={headerRowStyle}>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Nombre</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Rol</th>
              <th style={thStyle}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map(u => (
                <tr key={u.id} style={trStyle}>
                  <td style={tdStyle}>{u.id.toString().slice(-5)}</td>
                  <td style={tdStyle}>{u.nombre}</td>
                  <td style={tdStyle}>{u.email}</td>
                  <td style={tdStyle}>
                    <span style={{
                      backgroundColor: u.rol === 'Administrador' ? '#646cff' : '#2a2e35',
                      padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem'
                    }}>
                      {u.rol}
                    </span>
                  </td>
                  <td style={tdStyle}>
                    <button onClick={() => eliminarUsuario(u.id)} style={deleteBtn}>ELIMINAR</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="5" style={{textAlign: 'center', padding: '20px', color: '#888'}}>No hay usuarios registrados.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- REUTILIZAMOS LOS ESTILOS DEL MÓDULO ANTERIOR PARA MANTENER LA ESTÉTICA ---
const containerStyle = { padding: '40px 10%', backgroundColor: '#0d0f12', minHeight: '100vh', color: 'white', position: 'relative' };
const backBtnStyle = { position: 'fixed', top: '80px', left: '20px', backgroundColor: 'transparent', color: '#c9b68d', border: '1px solid #3d3a2e', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px', fontSize: '1.1rem', transition: 'all 0.3s ease', zIndex: 999, fontWeight: '500', letterSpacing: '1px' };
const headerContainer = { marginBottom: '40px', marginTop: '20px' };
const headerStyle = { color: '#f0d486', marginBottom: 0, fontFamily: 'Cinzel, serif', fontSize: '1.8rem' };
const formStyle = { display: 'flex', gap: '20px', backgroundColor: '#1a1d23', padding: '25px', borderRadius: '8px', marginBottom: '40px', alignItems: 'flex-end', border: '1px solid #3d3a2e' };
const inputGroup = { display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 };
const labelStyle = { fontSize: '0.8rem', color: '#888' };
const inputStyle = { padding: '12px', borderRadius: '4px', border: '1px solid #3d3a2e', backgroundColor: '#0d0f12', color: 'white' };
const btnStyle = { backgroundColor: '#646cff', color: 'white', border: 'none', padding: '12px 25px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' };
const tableWrapper = { backgroundColor: '#1a1d23', borderRadius: '8px', overflow: 'hidden', border: '1px solid #3d3a2e' };
const tableStyle = { width: '100%', borderCollapse: 'collapse' };
const headerRowStyle = { backgroundColor: '#2a2e35' };
const thStyle = { padding: '15px', textAlign: 'left', color: '#f0d486', borderBottom: '2px solid #3d3a2e' };
const tdStyle = { padding: '15px', borderBottom: '1px solid #3d3a2e' };
const trStyle = { transition: 'background 0.3s' };
const deleteBtn = { backgroundColor: '#ff4b4b', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '4px' };

export default GestionUsuarios;