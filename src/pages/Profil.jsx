import React from 'react';
import { Shield, Award, Sparkles } from 'lucide-react';

export default function Profil() {
  return (
    <div style={styles.container}>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .profile-hero-anim { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .card-profile-hover {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #1e293b;
        }
        .card-profile-hover:hover {
          transform: translateY(-6px);
          border-color: rgba(194, 65, 12, 0.6) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        /* PENGATURAN RESPONSIF UNTUK HP */
        @media (max-width: 768px) {
          .profile-hero-section {
            padding: 3rem 1.25rem 1.5rem 1.25rem !important;
          }
          .profile-title {
            font-size: 1.85rem !important;
            line-height: 1.2 !important;
          }
          .profile-desc {
            font-size: 0.95rem !important;
          }
          .profile-section {
            padding: 1.5rem 1.25rem 3rem 1.25rem !important;
          }
          .profile-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .profile-card {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>

      {/* HERO / HEADER SECTION */}
      <header style={styles.hero} className="profile-hero-section">
        <div style={styles.heroContent} className="profile-hero-anim">
          <div style={styles.subHeadingWrapper}>
            <Sparkles size={16} color="#c2410c" />
            <span style={styles.heroSubTag}>Tentang Kami</span>
          </div>
          <h1 style={styles.heroTitle} className="profile-title">Profil PSHT Ranting Kosambi</h1>
          <p style={styles.heroDesc} className="profile-desc">
            Mengenal lebih dekat visi serta misi Persaudaraan Setia Hati Terate Ranting Kosambi, Cabang Kota Tangerang.
          </p>
        </div>
      </header>

      {/* KONTEN UTAMA (VISI & MISI) */}
      <section style={styles.sectionDark} className="profile-section">
        <div style={styles.sectionInner}>
          <div style={styles.cardsGrid} className="profile-cards-grid">
            
            {/* KARTU VISI */}
            <div style={styles.cardProfile} className="card-profile-hover profile-card">
              <div style={styles.cardIcon}>
                <Shield size={28} color="#c2410c" />
              </div>
              <h3 style={styles.cardTitle}>Visi Organisasi</h3>
              <p style={styles.cardText}>
                Membentuk manusia berbudi luhur tahu benar dan salah, berjiwa kesatria, serta melestarikan seni beladiri pencak silat warisan budaya bangsa yang berlandaskan persaudaraan kekeluargaan.
              </p>
            </div>

            {/* KARTU MISI */}
            <div style={styles.cardProfile} className="card-profile-hover profile-card">
              <div style={styles.cardIcon}>
                <Award size={28} color="#c2410c" />
              </div>
              <h3 style={styles.cardTitle}>Misi Organisasi</h3>
              <p style={styles.cardText}>
                Menyelenggarakan latihan pencak silat yang berkualitas, menanamkan nilai-nilai luhur moral dan spiritual kepada anggota, serta aktif berpartisipasi dalam kegiatan sosial dan kemasyarakatan di wilayah Kosambi.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: { 
    width: '100%', 
    boxSizing: 'border-box', 
    backgroundColor: '#070f1e', 
    minHeight: 'calc(100vh - 80px)' 
  },
  
  hero: {
    backgroundColor: '#070f1e',
    padding: '6rem 4rem 3rem 4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box'
  },
  heroContent: { maxWidth: '1400px', width: '100%', textAlign: 'left' },
  subHeadingWrapper: { display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' },
  heroSubTag: { fontSize: '0.85rem', fontWeight: '700', color: '#c2410c', textTransform: 'uppercase', letterSpacing: '0.5px' },
  heroTitle: { fontSize: '2.8rem', color: '#ffffff', fontWeight: '800', lineHeight: '1.15', marginBottom: '1rem' },
  heroDesc: { color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '800px' },

  sectionDark: { padding: '2rem 4rem 6rem 4rem', width: '100%', boxSizing: 'border-box', backgroundColor: '#070f1e' },
  sectionInner: { maxWidth: '1400px', margin: '0 auto', width: '100%' },

  cardsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2.5rem', width: '100%' },
  cardProfile: { 
    backgroundColor: '#0e1d32', 
    borderRadius: '20px', 
    padding: '3rem 2.5rem', 
    display: 'flex', 
    flexDirection: 'column', 
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' 
  },
  cardIcon: { width: '60px', height: '60px', borderRadius: '12px', backgroundColor: '#070f1e', border: '1px solid #1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' },
  cardTitle: { fontSize: '1.3rem', color: '#ffffff', fontWeight: '800', marginBottom: '0.75rem' },
  cardText: { color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }
};