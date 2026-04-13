import React, { useState, useEffect } from 'react';

const GestionVentas = () => {
  const [ventas, setVentas] = useState([]);
  const [nuevaVenta, setNuevaVenta] = useState({ cliente: '', juego: '', monto: '' });

  // Cargar ventas al iniciar
  useEffect(() => {
    const datosGuardados = localStorage.getItem('historial_ventas');
    if (datosGuardados) {
      setVentas(JSON.parse(datosGuardados));
    }
  }, []);

  const registrarVenta = (e) => {
    e.preventDefault();
    if (!nuevaVenta.cliente || !nuevaVenta.juego || !nuevaVenta.monto) {
      return alert("Por favor completa los detalles de la venta");
    }

    const ventaFinal = { 
      ...nuevaVenta, 
      id: Date.now(), 
      fecha: new Date().toLocaleDateString() 
    };
    
    const nuevaLista = [...ventas, ventaFinal];
    setVentas(nuevaLista);
    localStorage.setItem('historial_ventas', JSON.stringify(nuevaLista));
    setNuevaVenta({ cliente: '', juego: '', monto: '' });
  };

  const eliminarRegistro = (id) => {
    const filtrados = ventas.filter(v => v.id !== id);
    setVentas(filtrados);
    localStorage.setItem('historial_ventas', JSON.stringify(filtrados));
  };

  // Calcular total de ingresos
  const totalIngresos = ventas.reduce((acc, v) => acc + Number(v.monto), 0);

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>💰 GESTIÓN DE VENTAS - CAYMING</h2>

      {/* RESUMEN RÁPIDO */}
      <div style={resumenStyle}>
        <h3>Total Ingresos: <span style={{color: '#646cff'}}>${new Intl.NumberFormat('es-CO').format(totalIngresos)}</span></h3>
      </div>

      <form onSubmit={registrarVenta} style={formStyle}>
        <div style={inputGroup}>
          <label style={labelStyle}>Nombre del Cliente</label>
          <input 
            type="text" placeholder="Ej: Duvan Sierra" 
            value={nuevaVenta.cliente}
            onChange={(e) => setNuevaVenta({...nuevaVenta, cliente: e.target.value})}
            style={inputStyle}
          />
        </div>
        <div style={inputGroup}>
          <label style={labelStyle}>Videojuego</label>
          <input 
            type="text" placeholder="Ej: HALO" 
            value={nuevaVenta.juego}
            onChange={(e) => setNuevaVenta({...nuevaVenta, juego: e.target.value})}
            style={inputStyle}
          />
        </div>
        <div style={inputGroup}>
          <label style={labelStyle}>Monto de Venta</label>
          <input 
            type="number" placeholder="Ej: 85000" 
            value={nuevaVenta.monto}
            onChange={(e) => setNuevaVenta({...nuevaVenta, monto: e.target.value})}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={btnStyle}>REGISTRAR VENTA</button>
      </form>

      <div style={tableWrapper}>
        <table style={tableStyle}>
          <thead>
            <tr style={headerRowStyle}>
              <th style={thStyle}>Fecha</th>
              <th style={thStyle}>Cliente</th>
              <th style={thStyle}>Videojuego</th>
              <th style={thStyle}>Monto</th>
              <th style={thStyle}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {ventas.length > 0 ? (
              ventas.map(v => (
                <tr key={v.id} style={trStyle}>
                  <td style={tdStyle}>{v.fecha}</td>
                  <td style={tdStyle}>{v.cliente}</td>
                  <td style={tdStyle}>{v.juego}</td>
                  <td style={tdStyle}>${new Intl.NumberFormat('es-CO').format(v.monto)}</td>
                  <td style={tdStyle}>
                    <button onClick={() => eliminarRegistro(v.id)} style={deleteBtn}>ANULAR</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="5" style={{textAlign: 'center', padding: '20px', color: '#888'}}>No hay ventas registradas.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- ESTILOS ---
const containerStyle = { padding: '40px 10%', backgroundColor: '#0d0f12', minHeight: '100vh', color: 'white' };
const headerStyle = { color: '#f0d486', textAlign: 'center', marginBottom: '20px', fontFamily: 'Cinzel, serif' };
const resumenStyle = { backgroundColor: '#1a1d23', padding: '15px', borderRadius: '8px', marginBottom: '30px', textAlign: 'center', border: '1px solid #3d3a2e' };
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

export default GestionVentas;