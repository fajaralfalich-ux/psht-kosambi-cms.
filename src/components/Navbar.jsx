import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import pshtLogo from '/flower.png';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              border: 1px solid #1e3a5f;
              border-radius: 10px;
              background: #0e1d32;
            }
            .menu-item-card:hover {
              transform: translateY(-2px);
              border-color: rgba(249, 115, 22, 0.6) !important;
              background-color: #10223b !important;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            }

            /* Responsive Media Queries untuk Navbar */
            @media (max-width: 900px) {
              .desktop-menu-wrapper {
                display: none !important;
              }
              .hamburger-btn {
                display: flex !important;
              }
            }
            @media (min-width: 901px) {
              .desktop-menu-wrapper {
                display: flex !important;
              }
              .hamburger-btn {
                display: none !important;
              }
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

          {/* Menu Desktop */}
          <div className="desktop-menu-wrapper" style={styles.menuWrapper}>
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

          {/* Tombol Hamburger Mobile */}
          <button 
            className="hamburger-btn" 
            onClick={() => setIsMobileMenuOpen(true)} 
            style={styles.hamburgerBtn}
            aria-label="Buka Menu"
          >
            <Menu size={24} color="#ffffff" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay & Sidebar */}
      {isMobileMenuOpen && (
        <div style={styles.mobileDrawerOverlay} onClick={() => setIsMobileMenuOpen(false)}>
          <div style={styles.mobileDrawerContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.mobileDrawerHeader}>
              <div style={styles.brand}>
                <div style={styles.logoWrapper}>
                  <img src={pshtLogo} alt="Logo" style={styles.brandLogoImg} />
                </div>
                <div style={styles.brandText}>
                  <span style={styles.brandTitle}>Menu Navigasi</span>
                  <span style={styles.brandSub}>PSHT Ranting Kosambi</span>
                </div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} style={styles.closeIconButton}>
                <X size={20} color="#94a3b8" />
              </button>
            </div>

            <div style={styles.mobileDrawerLinks}>
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={index}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={isActive ? { ...styles.mobileLink, ...styles.mobileLinkActive } : styles.mobileLink}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
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
    overflow: 'hidden',
    borderBottom: '1px solid #1e3a5f'
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
    color: '#fb923c',
    fontSize: '0.8rem',
    margin: '0 1rem',
    display: 'inline-block'
  },
  navbar: {
    backgroundColor: '#070f1e',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
    borderBottom: '1px solid #1e3a5f',
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
    padding: '0.75rem 2rem',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexShrink: 0
  },
  logoWrapper: {
    width: '38px',
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10223b',
    border: '1px solid #1e3a5f',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  },
  brandLogoImg: {
    width: '24px',
    height: '24px',
    objectFit: 'contain'
  },
  brandText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1px'
  },
  brandTitle: {
    fontSize: '0.95rem',
    color: '#ffffff',
    fontWeight: '800',
    margin: 0,
    letterSpacing: '-0.2px'
  },
  brandSub: {
    fontSize: '0.7rem',
    color: '#94a3b8',
    margin: 0,
    fontWeight: '600'
  },
  menuWrapper: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #1e3a5f',
    borderRadius: '12px',
    padding: '0.25rem',
    backgroundColor: '#0a1528',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)'
  },
  navMenu: {
    display: 'flex',
    gap: '0.25rem',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  navLink: {
    textDecoration: 'none',
    color: '#94a3b8',
    fontSize: '0.8rem',
    fontWeight: '600',
    padding: '0.45rem 0.85rem',
    borderRadius: '8px',
    display: 'block',
    whiteSpace: 'nowrap',
    transition: 'color 0.2s ease'
  },
  activeCardWrapper: {
    backgroundColor: '#10223b',
    border: '1px solid #fb923c',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(249, 115, 22, 0.25)'
  },
  activeLink: {
    color: '#ffffff',
    fontWeight: '700'
  },
  hamburgerBtn: {
    display: 'none',
    backgroundColor: '#10223b',
    border: '1px solid #1e3a5f',
    padding: '0.5rem',
    borderRadius: '10px',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mobileDrawerOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(7, 15, 30, 0.75)',
    backdropFilter: 'blur(6px)',
    zIndex: 2000,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  mobileDrawerContent: {
    width: '300px',
    height: '100%',
    backgroundColor: '#070f1e',
    borderLeft: '1px solid #1e3a5f',
    boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    boxSizing: 'border-box'
  },
  mobileDrawerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #1e3a5f'
  },
  closeIconButton: {
    backgroundColor: '#10223b',
    border: '1px solid #1e3a5f',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  mobileDrawerLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    flex: 1,
    overflowY: 'auto'
  },
  mobileLink: {
    textDecoration: 'none',
    color: '#94a3b8',
    fontSize: '0.95rem',
    fontWeight: '600',
    padding: '0.85rem 1rem',
    borderRadius: '10px',
    backgroundColor: '#0e1d32',
    border: '1px solid #1e3a5f',
    transition: 'all 0.2s ease'
  },
  mobileLinkActive: {
    backgroundColor: '#10223b',
    color: '#ffffff',
    borderColor: '#fb923c',
    fontWeight: '700',
    boxShadow: '0 4px 12px rgba(249, 115, 22, 0.2)'
  }
};