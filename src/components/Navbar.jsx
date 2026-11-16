import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import pshtLogo from '/flower.png';

export default function Navbar() {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Beranda' },
    { path: '/profil', label: 'Profil' },
    { path: '/struktur', label: 'Struktur' },
    { path: '/sejarah', label: 'Sejarah' },
    { path: '/falsafah', label: 'Falsafah' },
    { path: '/kesh-an', label: 'Ke-SH-an' },
    { path: '/kegiatan', label: 'Kegiatan & Jadwal' },
  ];

  return (
    <>
      {/* Top Announcement Bar dengan Kecepatan Cepat & Sambungan Sempurna */}
      <div style={styles.topBar}>
        <div style={styles.topBarInner}>
          <style>{`
            @keyframes marqueeSeamless {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
            .marquee-wrapper {
              display: flex;
              width: 100%;
              overflow: hidden;
              white-space: nowrap;
            }
            .marquee-track {
              display: inline-flex;
              white-space: nowrap;
              will-change: transform;
              animation: marqueeSeamless 6s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
            .menu-item-card {
              transition: all 0.25s ease-in-out;
              border: 1px solid transparent;
              border-radius: 6px;
            }
            .menu-item-card:hover {
              transform: translateY(-2px);
              border-color: #94a3b8 !important;
              background-color: #ffffff !important;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
            }
          `}</style>
          
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {/* Kelompok Teks 1 */}
              <div style={styles.marqueeGroup}>
                <span style={styles.textItem}>PERSAUDARAAN SETIA HATI TERATE</span>
                <span style={styles.topDot}>•</span>
                <span style={styles.textItem}>MEMAYU HAYUNING BAWONO</span>
                <span style={styles.topDot}>•</span>
                <span style={styles.textItem}>MENDIDIK MANUSIA BERBUDI LUHUR TAHU BENAR DAN SALAH</span>
                <span style={styles.topDot}>•</span>
              </div>
              {/* Kelompok Teks 2 (Duplikat Persis untuk Loop Sambung) */}
              <div style={styles.marqueeGroup}>
                <span style={styles.textItem}>PERSAUDARAAN SETIA HATI TERATE</span>
                <span style={styles.topDot}>•</span>
                <span style={styles.textItem}>MEMAYU HAYUNING BAWONO</span>
                <span style={styles.topDot}>•</span>
                <span style={styles.textItem}>MENDIDIK MANUSIA BERBUDI LUHUR TAHU BENAR DAN SALAH</span>
                <span style={styles.topDot}>•</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <div style={styles.brand}>
            <div style={styles.logoWrapper}>
              <img src={pshtLogo} alt="Logo PSHT Ranting Kosambi" style={styles.brandLogoImg} />
            </div>
            <div style={styles.brandText}>
              <h1 style={styles.brandTitle}>PSHT Ranting Kosambi</h1>
              <p style={styles.brandSub}>Cabang Kota Tangerang</p>
            </div>
          </div>

          <div style={styles.menuWrapper}>
            <ul style={styles.navMenu}>
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={index} className="menu-item-card" style={isActive ? styles.activeCardWrapper : {}}>
                    <Link 
                      to={item.path} 
                      style={isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

const styles = {
  topBar: {
    backgroundColor: '#070f1e',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  topBarInner: {
    width: '100%',
    maxWidth: '1400px',
    overflow: 'hidden',
    padding: '0.4rem 1rem',
    boxSizing: 'border-box'
  },
  marqueeGroup: {
    display: 'inline-flex',
    alignItems: 'center',
    whiteSpace: 'nowrap'
  },
  textItem: {
    color: '#94a3b8',
    fontSize: '0.7rem',
    fontWeight: '600',
    letterSpacing: '0.8px',
    whiteSpace: 'nowrap'
  },
  topDot: {
    color: '#c2410c',
    fontSize: '0.8rem',
    margin: '0 1rem',
    display: 'inline-block'
  },
  navbar: {
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 2px 15px rgba(0, 0, 0, 0.04)',
    borderBottom: '1px solid #e2e8f0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
    boxSizing: 'border-box'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 2.5rem',
    maxWidth: '1500px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    flexShrink: 0
  },
  logoWrapper: {
    width: '34px',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
  },
  brandLogoImg: {
    width: '22px',
    height: '22px',
    objectFit: 'contain'
  },
  brandText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px'
  },
  brandTitle: {
    fontSize: '0.88rem',
    color: '#0f172a',
    fontWeight: '800',
    margin: 0,
    letterSpacing: '-0.2px'
  },
  brandSub: {
    fontSize: '0.62rem',
    color: '#64748b',
    margin: 0,
    fontWeight: '600'
  },
  menuWrapper: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    padding: '0.2rem',
    backgroundColor: '#f8fafc',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.01)'
  },
  navMenu: {
    display: 'flex',
    gap: '0.1rem',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  navLink: {
    textDecoration: 'none',
    color: '#334155',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '0.35rem 0.6rem',
    borderRadius: '6px',
    display: 'block',
    whiteSpace: 'nowrap',
    transition: 'color 0.2s ease'
  },
  activeCardWrapper: {
    backgroundColor: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)'
  },
  activeLink: {
    color: '#c2410c'
  }
};