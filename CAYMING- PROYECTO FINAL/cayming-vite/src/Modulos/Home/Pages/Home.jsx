import React from 'react';

const Home = () => {
  const catalogoJuegos = [
    { id: 1, titulo: "Halo Combat Evolved", precio: 85000, img: "https://shared.akamai.steamstatic.com/store_apps/1064221/header.jpg" },
    { id: 2, titulo: "GTA San Andreas", precio: 45000, img: "https://shared.akamai.steamstatic.com/store_apps/1240440/header.jpg" },
    { id: 3, titulo: "Resident Evil 4", precio: 120000, img: "https://shared.akamai.steamstatic.com/store_apps/2050650/header.jpg" },
    { id: 4, titulo: "Need For Speed Most Wanted", precio: 65000, img: "https://shared.akamai.steamstatic.com/store_apps/1262560/header.jpg" },
  ];

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh' }}>
      
      {/* HERO SECTION REDISEÑADO */}
      <section style={newHeroStyle}>
        <div style={overlayStyle}>
          <h1 style={mainTitleStyle}>CAY<span style={{color: '#646cff'}}>MING</span></h1>
          <p style={subtitleStyle}>LA NOSTALGIA DE LA EDAD DE ORO (2000 - 2020)</p>
          <div style={dividerStyle}></div>
          <button 
            onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
            style={ctaButtonStyle}
          >
            EXPLORAR CATÁLOGO
          </button>
        </div>
      </section>

      {/* SECCIÓN DE JUEGOS */}
      <div style={{ padding: '60px 10%' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ width: '40px', height: '4px', backgroundColor: '#646cff', marginRight: '15px' }}></div>
          <h2 style={{ fontSize: '2rem', letterSpacing: '2px' }}>TÍTULOS DESTACADOS</h2>
        </div>
        
        <div style={gridStyle}>
          {catalogoJuegos.map((juego) => (
            <div key={juego.id} style={newCardStyle} className="game-card">
              <div style={{ position: 'relative' }}>
                <img src={juego.img} alt={juego.titulo} style={imgStyle} />
                <div style={priceTagStyle}>$ {new Intl.NumberFormat('es-CO').format(juego.precio)}</div>
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '15px' }}>{juego.titulo}</h3>
                <button style={buyBtnStyle}>ADQUIRIR AHORA</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- NUEVOS ESTILOS IMPACTANTES ---
const newHeroStyle = {
  height: '70vh',
  background: 'url("https://shared.akamai.steamstatic.com/store_apps/1145360/library_600x900_2x.jpg") no-repeat center center',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '4px solid #646cff'
};

const overlayStyle = {
  backgroundColor: 'rgba(0,0,0,0.85)',
  padding: '50px',
  textAlign: 'center',
  borderRadius: '2px',
  border: '1px solid rgba(100, 108, 255, 0.3)',
  backdropFilter: 'blur(5px)'
};

const mainTitleStyle = { fontSize: '5rem', margin: 0, letterSpacing: '8px', fontWeight: '900' };
const subtitleStyle = { fontSize: '1.2rem', color: '#888', letterSpacing: '4px', marginTop: '10px' };
const dividerStyle = { width: '60px', height: '4px', backgroundColor: '#646cff', margin: '20px auto' };

const ctaButtonStyle = {
  backgroundColor: '#646cff',
  color: 'white',
  border: 'none',
  padding: '15px 40px',
  fontSize: '1rem',
  fontWeight: 'bold',
  letterSpacing: '2px',
  cursor: 'pointer',
  marginTop: '20px',
  transition: '0.3s'
};

const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' };

const newCardStyle = {
  backgroundColor: '#161616',
  borderRadius: '4px',
  overflow: 'hidden',
  border: '1px solid #222',
  boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
};

const imgStyle = { width: '100%', height: '180px', objectFit: 'cover', opacity: '0.8' };

const priceTagStyle = {
  position: 'absolute', bottom: '10px', right: '10px',
  backgroundColor: '#646cff', padding: '5px 12px', fontWeight: 'bold', fontSize: '1.1rem'
};

const buyBtnStyle = {
  width: '100%', backgroundColor: 'transparent', color: 'white',
  border: '1px solid #444', padding: '10px', cursor: 'pointer', fontWeight: 'bold'
};

export default Home;