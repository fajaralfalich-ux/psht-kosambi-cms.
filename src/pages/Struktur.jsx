import React, { useState } from 'react';
import { Users, Building2, X } from 'lucide-react';

export default function Struktur() {
  const [activeModal, setActiveModal] = useState(null); // 'ranting' atau 'cabang'

  return (
    <div style={styles.pageContainer}>
      {/* Header Halaman */}
      <div style={styles.headerBox}>
        <span style={styles.tag}>STRUKTUR ORGANISASI</span>
        <h1 style={styles.title}>Kepengurusan Ranting & Cabang</h1>
        <p style={styles.subtitle}>
          Informasi mengenai susunan pengurus PSHT Ranting Kosambi & Cabang.
        </p>
      </div>

      {/* Grid Kartu Full Width (2 Kolom melebar proporsional) */}
      <div style={styles.cardGrid}>
        
        {/* Kartu 1: Struktur Pengurus Ranting */}
        <div style={styles.card}>
          <div style={styles.iconBox}>
            <Users size={28} color="#c2410c" />
          </div>
          <h3 style={styles.cardTitle}>STRUKTUR KEPENGURUSAN RANTING</h3>
          <p style={styles.cardText}>
            Bagan susunan pengurus lengkap beserta bidang kepelatihan dan pelatih prestasi PSHT Ranting Kosambi...
          </p>
          <button 
            style={styles.button} 
            onClick={() => setActiveModal('ranting')}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#9a3412'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#c2410c'}
          >
            Baca selengkapnya
          </button>
        </div>

        {/* Kartu 2: Struktur Kepengurusan Cabang */}
        <div style={styles.card}>
          <div style={styles.iconBox}>
            <Building2 size={28} color="#c2410c" />
          </div>
          <h3 style={styles.cardTitle}>STRUKTUR KEPENGURUSAN CABANG</h3>
          <p style={styles.cardText}>
            Bagan susunan pengurus tingkat Cabang yang menaungi wilayah koordinasi PSHT Ranting Kosambi...
          </p>
          <button 
            style={styles.button} 
            onClick={() => setActiveModal('cabang')}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#9a3412'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#c2410c'}
          >
            Baca selengkapnya
          </button>
        </div>

      </div>

      {/* Modal Popup untuk Ranting */}
      {activeModal === 'ranting' && (
        <div style={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Bagan Struktur Kepengurusan Ranting</h2>
              <button style={styles.closeButton} onClick={() => setActiveModal(null)}>
                <X size={24} color="#070f1e" />
              </button>
            </div>
            <div style={styles.imageWrapper}>
              <img 
                src="/struktur_organisasi.png" 
                alt="Struktur Pengurus Ranting" 
                style={styles.modalImage} 
              />
            </div>
          </div>
        </div>
      )}

      {/* Modal Popup untuk Cabang */}
      {activeModal === 'cabang' && (
        <div style={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Bagan Struktur Kepengurusan Cabang</h2>
              <button style={styles.closeButton} onClick={() => setActiveModal(null)}>
                <X size={24} color="#070f1e" />
              </button>
            </div>
            <div style={styles.imageWrapper}>
              <img 
                src="/struktur_cabang.png" 
                alt="Struktur Pengurus Cabang" 
                style={styles.modalImage} 
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

const styles = {
  pageContainer: { 
    padding: '6rem 4rem', 
    width: '100%', 
    boxSizing: 'border-box',
    backgroundColor: '#070f1e', // Latar belakang navy gelap full layar
    minHeight: 'calc(100vh - 80px)'
  },
  headerBox: { marginBottom: '3.5rem', textAlign: 'left', maxWidth: '1400px', margin: '0 auto 3.5rem auto' },
  tag: { color: '#c2410c', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block', letterSpacing: '0.5px' },
  title: { fontSize: '2.8rem', color: '#ffffff', fontWeight: '800', marginBottom: '0.75rem' },
  subtitle: { color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.6' },

  cardGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
    gap: '2.5rem', 
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  card: { 
    background: '#0e1d32', 
    border: '1px solid #1e293b', 
    borderRadius: '20px', 
    padding: '3rem 2.5rem', 
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left'
  },
  iconBox: { 
    width: '60px', 
    height: '60px', 
    borderRadius: '12px', 
    background: '#070f1e', 
    border: '1px solid #1e293b', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: '1.5rem' 
  },
  cardTitle: { fontSize: '1.3rem', color: '#ffffff', fontWeight: '800', marginBottom: '0.75rem', letterSpacing: '-0.2px' },
  cardText: { color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem' },
  button: { 
    backgroundColor: '#c2410c', 
    color: '#ffffff', 
    border: 'none', 
    borderRadius: '10px', 
    padding: '0.9rem 2rem', 
    fontSize: '1rem', 
    fontWeight: '700', 
    cursor: 'pointer', 
    width: '100%',
    transition: 'background-color 0.2s ease',
    boxShadow: '0 4px 12px rgba(194, 65, 12, 0.3)',
    marginTop: 'auto'
  },

  // Styling Modal Pop-up
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(7, 15, 30, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
    padding: '1rem',
    boxSizing: 'border-box',
    backdropFilter: 'blur(6px)'
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '920px',
    maxHeight: '94vh',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.5rem',
    borderBottom: '1px solid #e2e8f0',
    flexShrink: 0
  },
  modalTitle: { fontSize: '1.25rem', fontWeight: '800', color: '#070f1e', margin: 0 },
  closeButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
    transition: 'background-color 0.2s'
  },
  imageWrapper: {
    flex: 1,
    padding: '1.25rem',
    overflowY: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc'
  },
  modalImage: {
    maxWidth: '100%',
    maxHeight: '82vh',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '8px',
    display: 'block',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
  }
};