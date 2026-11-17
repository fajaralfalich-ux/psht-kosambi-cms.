import React, { useState } from 'react';
import { MapPin, Clock, Calendar, Sparkles } from 'lucide-react';

export default function Kegiatan() {
  const [filter, setFilter] = useState('Semua');

  const rayonList = [
    { nama: 'Ranting Kosambi', hari: 'Minggu', jam: '20.00 - selesai', tempat: 'Halaman Kantor Kecamatan Kosambi' },
    { nama: 'Rayon Salembaran Jaya', hari: 'Selasa & Jumat', jam: '20.00 - 23.30 WIB', tempat: 'Halaman Kantor Kecamatan Kosambi' },
    { nama: 'Rayon Jatimulya', hari: 'Rabu & Sabtu', jam: '20.00 - 23.30 WIB', tempat: 'SDN Jatimulya 2' }
  ];

  const filteredRayon = filter === 'Semua' ? rayonList : rayonList.filter(r => r.nama === filter);

  return (
    <div style={styles.pageContainer} className="kegiatan-page-container">
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .kegiatan-header-anim { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        /* Efek Gradasi Emas Mewah */
        .gradient-gold-title {
          background: linear-gradient(135deg, #ffffff 20%, #fde047 60%, #e11d48 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 20px rgba(251, 191, 36, 0.2);
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #1e3a5f;
          background: linear-gradient(145deg, #10223b 0%, #0d1b30 100%);
        }
        .card-hover:hover {
          transform: translateY(-5px);
          border-color: rgba(249, 115, 22, 0.6) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.45);
        }

        .filter-btn-effect {
          transition: all 0.2s ease-in-out;
        }
        .filter-btn-effect:hover {
          border-color: #fb923c !important;
          color: #ffffff !important;
          background-color: #10223b !important;
        }

        @media (max-width: 768px) {
          .kegiatan-page-container {
            padding: 3rem 1.25rem !important;
          }
          .kegiatan-inner {
            padding: 0 !important;
          }
          .kegiatan-subHeadingWrapper {
            justify-content: center !important;
          }
          .kegiatan-header-box {
            text-align: center !important;
            margin-bottom: 2rem !important;
          }
          .kegiatan-title {
            font-size: 1.75rem !important;
            line-height: 1.25 !important;
          }
          .kegiatan-subtitle {
            font-size: 0.9rem !important;
          }
          .kegiatan-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .kegiatan-card {
            padding: 2rem 1.5rem !important;
          }
          .kegiatan-filter-group {
            gap: 0.5rem !important;
            margin-bottom: 2rem !important;
            justify-content: center !important;
          }
        }
      `}</style>

      <div style={styles.innerWrapper} className="kegiatan-inner">
        <div style={styles.headerBox} className="kegiatan-header-box kegiatan-header-anim">
          <div style={styles.subHeadingWrapper} className="kegiatan-subHeadingWrapper">
            <Sparkles size={16} color="#fb923c" />
            <span style={styles.tag}>KEGIATAN & JADWAL</span>
          </div>
          <h1 style={styles.title} className="kegiatan-title gradient-gold-title">
            Jadwal Latihan Rutin Rayon
          </h1>
          <p style={styles.subtitle} className="kegiatan-subtitle">
            Informasi lengkap hari, waktu, serta lokasi pusat latihan rutin di bawah naungan Ranting Kosambi.
          </p>
        </div>

        {/* Filter Button */}
        <div style={styles.filterGroup} className="kegiatan-filter-group kegiatan-header-anim">
          {['Semua', 'Ranting Kosambi', 'Rayon Salembaran Jaya', 'Rayon Jatimulya'].map((item) => (
            <button 
              key={item}
              onClick={() => setFilter(item)}
              className="filter-btn-effect"
              style={filter === item ? styles.filterBtnActive : styles.filterBtn}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        <div style={styles.cardsGrid} className="kegiatan-cards-grid">
          {filteredRayon.map((rayon, idx) => (
            <div key={idx} style={styles.card} className="card-hover kegiatan-card">
              <h3 style={styles.cardTitle}>{rayon.nama}</h3>
              <div style={styles.infoList}>
                <p style={styles.infoRow}><Calendar size={16} color="#fb923c" /> <span><strong>Hari:</strong> {rayon.hari}</span></p>
                <p style={styles.infoRow}><Clock size={16} color="#fb923c" /> <span><strong>Waktu:</strong> {rayon.jam}</span></p>
                <p style={styles.infoRow}><MapPin size={16} color="#fb923c" /> <span><strong>Lokasi:</strong> {rayon.tempat}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: { 
    width: '100%', 
    minHeight: 'calc(100vh - 80px)',
    backgroundColor: '#070f1e',
    boxSizing: 'border-box',
    padding: '5rem 4rem 6rem 4rem'
  },
  innerWrapper: {
    maxWidth: '1200px', 
    margin: '0 auto', 
    width: '100%', 
    boxSizing: 'border-box'
  },
  headerBox: { marginBottom: '2.5rem', width: '100%', textAlign: 'left' },
  subHeadingWrapper: { display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' },
  tag: { color: '#fb923c', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px' },
  title: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.75rem', lineHeight: '1.2' },
  subtitle: { color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '800px' },

  filterGroup: { display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' },
  filterBtn: { padding: '0.6rem 1.25rem', borderRadius: '10px', border: '1px solid #1e3a5f', background: '#10223b', cursor: 'pointer', fontWeight: '600', color: '#94a3b8', fontSize: '0.9rem' },
  filterBtnActive: { padding: '0.6rem 1.25rem', borderRadius: '10px', border: '1px solid #c2410c', background: '#c2410c', cursor: 'pointer', fontWeight: '700', color: '#ffffff', boxShadow: '0 4px 15px rgba(194, 65, 12, 0.3)', fontSize: '0.9rem' },

  cardsGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
    gap: '2.5rem', 
    width: '100%' 
  },
  card: { 
    borderRadius: '20px', 
    padding: '2.5rem', 
    boxSizing: 'border-box', 
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column'
  },
  cardTitle: { fontSize: '1.35rem', color: '#ffffff', fontWeight: '800', marginBottom: '1.5rem' },
  infoList: { display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 },
  infoRow: { display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#94a3b8', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }
};