import React, { useState } from 'react';

const Hero = () => {
  
  const [isHovered, setIsHovered] = useState(false);

  
  const catalogoJuegos = [
    { id: 1, titulo: "HALO COMBAT EVOLVED", img: "/halo.jpg" },
    { id: 2, titulo: "GTA SAN ANDREAS", img: "/gta.webp" },
    { id: 3, titulo: "RESIDENT EVIL 4", img: "/re4.avif" },
    { id: 4, titulo: "NEED FOR SPEED MW", img: "/nfs.webp" },
  ];

  return (
    <div style={pageContainer}>
      
      <section style={heroBanner}>
        
        <div style={overlayStyle}></div>

        <div style={heroContent}>
          <h1 style={titleStyle}>
            CAY<span style={{color: '#646cff', textShadow: '0 0 15px #646cff'}}>MING</span>
          </h1>
          <p style={subtitleStyle}>LA NOSTALGIA DE LA EDAD DE ORO (2000 - 2020)</p>

         
          <button 
            style={{...btnGamer, ...(isHovered ? btnGamerHover : {})}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
           
            <div style={scanLineStyle}></div>
            <span style={btnTextStyle}>EXPLORAR CATÁLOGO</span>
          </button>
        </div>
      </section>

      
      <div style={{ padding: '60px 10%' }}>
        <h2 style={sectionHeader}>— TÍTULOS DESTACADOS —</h2>
        
        <div style={gridStyle}>
          {catalogoJuegos.map((j) => (
            <div key={j.id} style={cardStyle}>
              <div style={imgContainer}>
                <img src={j.img} alt={j.titulo} style={imgStyle} />
              </div>
              <div style={infoContainer}>
                <h3 style={gameTitleStyle}>{j.titulo}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// 1. Contenedor General
const pageContainer = { 
  backgroundColor: '#0d0f12', 
  minHeight: '100vh', 
  color: 'white',
  fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
};


const heroBanner = { 
  height: '75vh', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
  position: 'relative',
  backgroundImage: 'url("https://images.alphacoders.com/517/517034.jpg")', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderBottom: '2px solid #3d3a2e',
  overflow: 'hidden'
};

const overlayStyle = {
  position: 'absolute',
  top: 0, left: 0, width: '100%', height: '100%',
  background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5))',
  zIndex: 1
};


const heroContent = {
  textAlign: 'center',
  zIndex: 2, 
  position: 'relative'
};


const titleStyle = { 
  fontSize: '5rem', 
  margin: '0 0 10px 0',
  fontWeight: '900',
  letterSpacing: '10px',
  color: '#f0d486', // Tu dorado
  textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
  fontFamily: "'Cinzel', serif" 
};

// Subtítulo
const subtitleStyle = { 
  color: '#c9b68d', 
  letterSpacing: '4px',
  fontSize: '1.1rem',
  marginTop: '20px',    
  marginBottom: '60px', 
  textTransform: 'uppercase'
};



const btnGamer = {
  backgroundColor: 'transparent',
  color: 'white',
  border: '2px solid #646cff', 
  padding: '15px 50px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  position: 'relative', 
  overflow: 'hidden',  
  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)', 
  boxShadow: '0 0 20px rgba(100, 108, 255, 0.4)', 
  textTransform: 'uppercase',
  letterSpacing: '3px',
  clipPath: 'polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)', 
  marginTop: '10px',
};


const btnGamerHover = {
  backgroundColor: '#646cff', 
  color: '#1a1d23',         
  boxShadow: '0 0 40px rgba(100, 108, 255, 0.8)', 
  transform: 'translateY(-3px)', 
};

// Texto dentro del botón
const btnTextStyle = {
  position: 'relative',
  zIndex: 3 
};

const scanLineStyle = {
  content: '""',
  position: 'absolute',
  top: '-100%',
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
  zIndex: 2,
  animation: 'scan 1.5s linear infinite',
  display: 'none' 
};



const sectionHeader = { 
  color: '#f0d486', 
  textAlign: 'center', 
  fontSize: '2.5rem',
  marginBottom: '50px',
  fontFamily: "'Cinzel', serif",
  letterSpacing: '5px'
};

const gridStyle = { 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
  gap: '40px' 
};

const cardStyle = { 
  backgroundColor: '#1a1d23', 
  borderRadius: '8px', 
  overflow: 'hidden',
  boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
  border: '1px solid #3d3a2e',
  transition: 'transform 0.3s',
  cursor: 'pointer'
};



const imgContainer = { 
  width: '100%', 
  height: '380px' 
};

const imgStyle = { 
  width: '100%', 
  height: '100%', 
  objectFit: 'cover' 
};

const infoContainer = { 
  padding: '20px', 
  textAlign: 'center' 
};

const gameTitleStyle = { 
  color: '#c9b68d', 
  fontSize: '1.2rem', 
  margin: 0,
  letterSpacing: '1px'
};

export default Hero;