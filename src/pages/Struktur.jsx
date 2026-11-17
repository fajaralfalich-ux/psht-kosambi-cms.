import React, { useState } from 'react';
import { Users, Building2, X, Sparkles, ArrowRight } from 'lucide-react';

export default function Struktur() {
  const [activeModal, setActiveModal] = useState(null); // 'ranting' atau 'cabang'

  return (
    <div style={styles.pageContainer}>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .struktur-header-anim { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        /* Efek Gradasi Emas Mewah */
        .gradient-gold-title {
          background: linear-gradient(135deg, #ffffff 20%, #fde047 60%, #e11d48 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 20px rgba(251, 191, 36, 0.2);
        }

        .struktur-card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #1e3a5f;
          background: linear-gradient(145deg, #10223b 0%, #0d1b30 100%);
        }
        .struktur-card-hover:hover {
          transform: translateY(-5px);
          border-color: rgba(249, 115, 22, 0.6) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.45);
        }

        /* PENGATURAN RESPONSIF UNTUK HP */
        @media (max-width: 768px) {
          .struktur-container {
            padding: 3rem 1.25rem !important;
          }
          .struktur-header-box {
            margin-bottom: 2rem !important;
            text-align: center !important;
          }
          .subHeadingWrapper {
            justify-content: center !important;
          }
          .struktur-title {
            font-size: 1.75rem !important;
            line-height: 1.25 !important;
          }
          .struktur-subtitle {
            font-size: 0.9rem !important;
          }
          .struktur-card-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .struktur-card {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>

      {/* Header Halaman */}
      <div style={styles.headerBox} className="struktur-header-box struktur-header-anim">
        <div style={styles.subHeadingWrapper} className="subHeadingWrapper">
          <Sparkles size={16} color="#fb923c" />
          <span style={styles.tag}>STRUKTUR ORGANISASI</span>
        </div>
        <h1 style={styles.title} className="struktur-title gradient-gold-title">
          Kepengurusan Ranting & Cabang
        </h1>
        <p style={styles.subtitle} className="struktur-subtitle">
          Informasi lengkap mengenai susunan pengurus PSHT Ranting Kosambi serta tingkat Cabang.
        </p>
      </div>

      {/* Grid Kartu Full Width */}
      <div style={styles.cardGrid} className="struktur-card-grid">
        
        {/* Kartu 1: Struktur Pengurus Ranting */}
        <div style={styles.card} className="struktur-card-hover struktur-card">
          <div style={styles.cardHeaderFlex}>
            <div style={styles.iconBox}>
              <Users size={26} color="#fb923c" />
            </div>
            <span style={styles.cardBadge}>Tingkat Ranting</span>
          </div>
          <h3 style={styles.cardTitle}>Pengurus Ranting Kosambi</h3>
          <p style={styles.cardText}>
            Bagan susunan pengurus lengkap beserta bidang kepelatihan dan pelatih prestasi PSHT Ranting Kosambi.
          </p>
          <button 
            style={styles.button} 
            onClick={() => setActiveModal('ranting')}
          >
            <span>Lihat Bagan Struktur</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Kartu 2: Struktur Kepengurusan Cabang */}
        <div style={styles.card} className="struktur-card-hover struktur-card">
          <div style={styles.cardHeaderFlex}>
            <div style={styles.iconBox}>
              <Building2 size={26} color="#38bdf8" />
            </div>
            <span style={{ ...styles.cardBadge, backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.2)' }}>Tingkat Cabang</span>
          </div>
          <h3 style={styles.cardTitle}>Pengurus Cabang Kota Tangerang</h3>
          <p style={styles.cardText}>
            Bagan susunan pengurus tingkat Cabang yang menaungi wilayah koordinasi PSHT Ranting Kosambi.
          </p>
          <button 
            style={styles.button} 
            onClick={() => setActiveModal('cabang')}
          >
            <span>Lihat Bagan Struktur</span>
            <ArrowRight size={16} />
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
                <X size={20} color="#070f1e" />
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
                <X size={20} color="#070f1e" />
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
    padding: '5rem 4rem 6rem 4rem', 
    width: '100%', 
    boxSizing: 'border-box',
    backgroundColor: '#070f1e', 
    minHeight: 'calc(100vh - 80px)'
  },
  headerBox: { marginBottom: '3rem', textAlign: 'left', maxWidth: '1200px', margin: '0 auto 3rem auto' },
  subHeadingWrapper: { display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' },
  tag: { color: '#fb923c', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px' },
  title: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.75rem', lineHeight: '1.2' },
  subtitle: { color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.6' },

  cardGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
    gap: '2.5rem', 
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: { 
    borderRadius: '20px', 
    padding: '2.5rem', 
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left'
  },
  cardHeaderFlex: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', width: '100%' },
  iconBox: { 
    width: '52px', 
    height: '52px', 
    borderRadius: '14px', 
    backgroundColor: '#070f1e', 
    border: '1px solid #1e3a5f', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  cardBadge: { fontSize: '0.75rem', fontWeight: '700', padding: '0.35rem 0.85rem', borderRadius: '20px', backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#fb923c', border: '1px solid rgba(249, 115, 22, 0.2)' },
  cardTitle: { fontSize: '1.35rem', color: '#ffffff', fontWeight: '800', marginBottom: '0.75rem' },
  cardText: { color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem', flex: 1 },
  button: { 
    backgroundColor: '#c2410c', 
    color: '#ffffff', 
    border: 'none', 
    borderRadius: '10px', 
    padding: '0.85rem 1.75rem', 
    fontSize: '0.95rem', 
    fontWeight: '700', 
    cursor: 'pointer', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 15px rgba(194, 65, 12, 0.3)'
  },

  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
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
    borderRadius: '20px',
    width: '100%',
    maxWidth: '900px',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 1.75rem',
    borderBottom: '1px solid #e2e8f0',
    flexShrink: 0
  },
  modalTitle: { fontSize: '1.2rem', fontWeight: '800', color: '#070f1e', margin: 0 },
  closeButton: {
    backgroundColor: '#f1f5f9',
    border: 'none',
    cursor: 'pointer',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'background-color 0.2s'
  },
  imageWrapper: {
    flex: 1,
    padding: '1.5rem',
    overflowY: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc'
  },
  modalImage: {
    maxWidth: '100%',
    maxHeight: '75vh',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '10px',
    display: 'block',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
  }
};