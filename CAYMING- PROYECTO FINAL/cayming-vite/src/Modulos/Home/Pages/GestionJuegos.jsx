import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GestionJuegos = () => {
  const navigate = useNavigate();
  const [juegos, setJuegos] = useState([]);
  const [nuevoJuego, setNuevoJuego] = useState({ titulo: '', precio: '', img: '' });

  useEffect(() => {
    const datosGuardados = localStorage.getItem('catalogo_juegos');
    if (datosGuardados) {
      setJuegos(JSON.parse(datosGuardados));
    }
  }, []);

  const agregarJuego = (e) => {
    e.preventDefault();
    if (!nuevoJuego.titulo || !nuevoJuego.precio || !nuevoJuego.img) {
      return alert("Por favor, llena todos los campos incluyendo el nombre de la imagen");
    }
    
    const juegoFinal = { ...nuevoJuego, id: Date.now() };
    const nuevaLista = [...juegos, juegoFinal];
    setJuegos(nuevaLista);
    localStorage.setItem('catalogo_juegos', JSON.stringify(nuevaLista));
    setNuevoJuego({ titulo: '', precio: '', img: '' });
  };

  const eliminarJuego = (id) => {
    const filtrados = juegos.filter(j => j.id !== id);
    setJuegos(filtrados);
    localStorage.setItem('catalogo_juegos', JSON.stringify(filtrados));
  };

  return (
    <div style={containerStyle}>
      <button onClick={() => navigate('/dashboard')} style={backBtnStyle} title="Volver atrás">
        ← ATRÁS
      </button>
      <div style={headerContainer}>
        <h2 style={headerStyle}>🎮 GESTOR DE INVENTARIO - CAYMING</h2>
      </div>

      {/* FORMULARIO MEJORADO */}
      <form onSubmit={agregarJuego} style={formStyle}>
        <div style={inputGroup}>
          <label style={labelStyle}>Título del Videojuego</label>
          <input 
            type="text" placeholder="Ej: GTA SAN ANDREAS" 
            value={nuevoJuego.titulo}
            onChange={(e) => setNuevoJuego({...nuevoJuego, titulo: e.target.value.toUpperCase()})}
            style={inputStyle}
          />
        </div>
        <div style={inputGroup}>
          <label style={labelStyle}>Precio (COP)</label>
          <input 
            type="number" placeholder="Ej: 45000" 
            value={nuevoJuego.precio}
            onChange={(e) => setNuevoJuego({...nuevoJuego, precio: e.target.value})}
            style={inputStyle}
          />
        </div>
        <div style={inputGroup}>
          <label style={labelStyle}>Nombre de Imagen (en public)</label>
          <input 
            type="text" placeholder="Ej: gta.webp" 
            value={nuevoJuego.img}
            onChange={(e) => setNuevoJuego({...nuevoJuego, img: e.target.value})}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={btnStyle}>REGISTRAR JUEGO</button>
      </form>

      {/* TABLA FORMATEADA */}
      <div style={tableWrapper}>
        <table style={tableStyle}>
          <thead>
            <tr style={headerRowStyle}>
              <th style={thStyle}>Vista Previa</th>
              <th style={thStyle}>Título del Juego</th>
              <th style={thStyle}>Precio</th>
              <th style={thStyle}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {juegos.length > 0 ? (
              juegos.map(j => (
                <tr key={j.id} style={trStyle}>
                  <td style={tdStyle}>
                    <img src={`/${j.img}`} width="60" height="60" style={{objectFit: 'cover', borderRadius: '4px'}} alt="juego" />
                  </td>
                  <td style={tdStyle}>{j.titulo}</td>
                  <td style={tdStyle}>${new Intl.NumberFormat('es-CO').format(j.precio)}</td>
                  <td style={tdStyle}>
                    <button onClick={() => eliminarJuego(j.id)} style={deleteBtn}>ELIMINAR</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{textAlign: 'center', padding: '20px', color: '#888'}}>No hay juegos registrados aún.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- ESTILOS MEJORADOS ---
const containerStyle = { padding: '40px 10%', backgroundColor: '#0d0f12', minHeight: '100vh', color: 'white', position: 'relative' };
const backBtnStyle = { position: 'fixed', top: '80px', left: '20px', backgroundColor: 'transparent', color: '#c9b68d', border: '1px solid #3d3a2e', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px', fontSize: '1.1rem', transition: 'all 0.3s ease', zIndex: 999, fontWeight: '500', letterSpacing: '1px' };
const headerContainer = { marginBottom: '40px', marginTop: '20px' };
const headerStyle = { color: '#f0d486', marginBottom: 0, fontFamily: 'Cinzel, serif', letterSpacing: '2px', fontSize: '1.8rem' };
const formStyle = { display: 'flex', gap: '20px', backgroundColor: '#1a1d23', padding: '25px', borderRadius: '8px', marginBottom: '40px', alignItems: 'flex-end', border: '1px solid #3d3a2e' };
const inputGroup = { display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 };
const labelStyle = { fontSize: '0.8rem', color: '#888', textTransform: 'uppercase' };
const inputStyle = { padding: '12px', borderRadius: '4px', border: '1px solid #3d3a2e', backgroundColor: '#0d0f12', color: 'white', width: '100%' };
const btnStyle = { backgroundColor: '#646cff', color: 'white', border: 'none', padding: '12px 25px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold', height: '45px' };
const tableWrapper = { backgroundColor: '#1a1d23', borderRadius: '8px', overflow: 'hidden', border: '1px solid #3d3a2e' };
const tableStyle = { width: '100%', borderCollapse: 'collapse' };
const headerRowStyle = { backgroundColor: '#2a2e35' };
const thStyle = { padding: '15px', textAlign: 'left', color: '#f0d486', borderBottom: '2px solid #3d3a2e' };
const tdStyle = { padding: '15px', borderBottom: '1px solid #3d3a2e' };
const trStyle = { transition: 'background 0.3s' };
const deleteBtn = { backgroundColor: '#ff4b4b', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' };

export default GestionJuegos;