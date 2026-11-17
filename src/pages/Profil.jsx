import React from 'react';
import { Shield, Award, Sparkles, Target, Compass } from 'lucide-react';

export default function Profil() {
  return (
    <div style={styles.container}>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .profile-hero-anim { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        /* Efek Gradasi Emas Mewah */
        .gradient-gold-title {
          background: linear-gradient(135deg, #ffffff 20%, #fde047 60%, #e11d48 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 20px rgba(251, 191, 36, 0.2);
        }

        .card-profile-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #1e3a5f;
          background: linear-gradient(145deg, #10223b 0%, #0d1b30 100%);
        }
        .card-profile-hover:hover {
          transform: translateY(-5px);
          border-color: rgba(249, 115, 22, 0.6) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.45);
        }

        /* PENGATURAN RESPONSIF UNTUK HP */
        @media (max-width: 768px) {
          .profile-hero-section {
            padding: 3rem 1.25rem 1.5rem 1.25rem !important;
            text-align: center !important;
          }
          .subHeadingWrapper {
            justify-content: center !important;
          }
          .profile-title {
            font-size: 1.75rem !important;
            line-height: 1.25 !important;
          }
          .profile-desc {
            font-size: 0.9rem !important;
          }
          .profile-section {
            padding: 1.5rem 1.25rem 3rem 1.25rem !important;
          }
          .profile-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .profile-card {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>

      {/* HERO / HEADER SECTION */}
      <header style={styles.hero} className="profile-hero-section">
        <div style={styles.heroContent} className="profile-hero-anim">
          <div style={styles.subHeadingWrapper} className="subHeadingWrapper">
            <Sparkles size={16} color="#fb923c" />
            <span style={styles.heroSubTag}>Tentang Organisasi</span>
          </div>
          <h1 style={styles.heroTitle} className="profile-title gradient-gold-title">
            Profil PSHT Ranting Kosambi
          </h1>
          <p style={styles.heroDesc} className="profile-desc">
            Mengenal lebih dekat visi, misi, serta landasan moral Persaudaraan Setia Hati Terate Ranting Kosambi, Cabang Kota Tangerang.
          </p>
        </div>
      </header>

      {/* KONTEN UTAMA (VISI & MISI) */}
      <section style={styles.sectionDark} className="profile-section">
        <div style={styles.sectionInner}>
          <div style={styles.cardsGrid} className="profile-cards-grid">
            
            {/* KARTU VISI */}
            <div style={styles.cardProfile} className="card-profile-hover profile-card">
              <div style={styles.cardHeaderFlex}>
                <div style={styles.cardIcon}>
                  <Compass size={26} color="#fb923c" />
                </div>
                <span style={styles.cardBadge}>Pilar Utama</span>
              </div>
              <h3 style={styles.cardTitle}>Visi Organisasi</h3>
              <p style={styles.cardText}>
                Membentuk manusia berbudi luhur tahu benar dan salah, berjiwa kesatria, serta melestarikan seni beladiri pencak silat warisan budaya bangsa yang berlandaskan persaudaraan kekeluargaan.
              </p>
            </div>

            {/* KARTU MISI */}
            <div style={styles.cardProfile} className="card-profile-hover profile-card">
              <div style={styles.cardHeaderFlex}>
                <div style={styles.cardIcon}>
                  <Target size={26} color="#38bdf8" />
                </div>
                <span style={{ ...styles.cardBadge, backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>Aksi Nyata</span>
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
    padding: '5rem 4rem 2.5rem 4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    borderBottom: '1px solid #1e3a5f'
  },
  heroContent: { maxWidth: '1200px', width: '100%', textAlign: 'left' },
  subHeadingWrapper: { display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' },
  heroSubTag: { fontSize: '0.8rem', fontWeight: '700', color: '#fb923c', textTransform: 'uppercase', letterSpacing: '1.5px' },
  heroTitle: { fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1rem' },
  heroDesc: { color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '800px' },

  sectionDark: { padding: '4rem 4rem 6rem 4rem', width: '100%', boxSizing: 'border-box', backgroundColor: '#09182c' },
  sectionInner: { maxWidth: '1200px', margin: '0 auto', width: '100%' },

  cardsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2.5rem', width: '100%' },
  cardProfile: { 
    borderRadius: '20px', 
    padding: '2.5rem', 
    display: 'flex', 
    flexDirection: 'column', 
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)' 
  },
  cardHeaderFlex: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' },
  cardIcon: { width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#070f1e', border: '1px solid #1e3a5f', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  cardBadge: { fontSize: '0.75rem', fontWeight: '700', padding: '0.35rem 0.85rem', borderRadius: '20px', backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#fb923c', border: '1px solid rgba(249, 115, 22, 0.2)' },
  cardTitle: { fontSize: '1.35rem', color: '#ffffff', fontWeight: '800', marginBottom: '0.75rem' },
  cardText: { color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }
};