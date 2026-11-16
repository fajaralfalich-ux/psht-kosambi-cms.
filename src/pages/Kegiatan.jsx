import React, { useState } from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';

export default function Kegiatan() {
  const [filter, setFilter] = useState('Semua');

  const rayonList = [
    { nama: 'Ranting Kosambi', hari: 'Minggu', jam: '20.00 - selesai', tempat: 'Halaman Kantor Kecamatan Kosambi' },
    { nama: 'Rayon Salembaran Jaya', hari: 'Selasa & Jumat', jam: '20.00 - 23.30 WIB', tempat: 'Halaman Kantor Kecamatan Kosambi' },
    { nama: 'Rayon Jatimulya', hari: 'Rabu & Sabtu', jam: '20.00 - 23.30 WIB', tempat: 'SDN Jatimulya 2' }
  ];

  const filteredRayon = filter === 'Semua' ? rayonList : rayonList.filter(r => r.nama === filter);

  return (
    <div style={styles.pageContainer}>
      <style>{`
        .card-hover {
          transition: all 0.25s ease-in-out;
          border: 1px solid #1e293b;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          border-color: rgba(194, 65, 12, 0.6) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .filter-btn-effect {
          transition: all 0.2s ease-in-out;
        }
        .filter-btn-effect:hover {
          border-color: #c2410c !important;
          color: #ffffff !important;
          background-color: #0e1d32 !important;
        }
      `}</style>

      <div style={styles.innerWrapper}>
        <span style={styles.tag}>KEGIATAN & JADWAL</span>
        <h1 style={styles.title}>Jadwal Latihan Rutin Rayon</h1>

        {/* Filter Button */}
        <div style={styles.filterGroup}>
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

        {/* Grid Cards dengan ukuran yang dibatasi agar tidak terlalu panjang */}
        <div style={styles.cardsGrid}>
          {filteredRayon.map((rayon, idx) => (
            <div key={idx} style={styles.card} className="card-hover">
              <h3 style={styles.cardTitle}>{rayon.nama}</h3>
              <p style={styles.infoRow}><Calendar size={16} color="#c2410c" /> <strong>Hari:</strong> {rayon.hari}</p>
              <p style={styles.infoRow}><Clock size={16} color="#c2410c" /> <strong>Waktu:</strong> {rayon.jam}</p>
              <p style={styles.infoRow}><MapPin size={16} color="#c2410c" /> <strong>Lokasi:</strong> {rayon.tempat}</p>
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
    boxSizing: 'border-box'
  },
  innerWrapper: {
    padding: '6rem 4rem', 
    maxWidth: '1400px', 
    margin: '0 auto', 
    width: '100%', 
    boxSizing: 'border-box'
  },
  tag: { color: '#c2410c', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block', letterSpacing: '0.5px' },
  title: { fontSize: '2.8rem', color: '#ffffff', fontWeight: '800', marginBottom: '2rem' },
  filterGroup: { display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' },
  filterBtn: { padding: '0.6rem 1.25rem', borderRadius: '10px', border: '1px solid #1e293b', background: '#0e1d32', cursor: 'pointer', fontWeight: '600', color: '#94a3b8' },
  filterBtnActive: { padding: '0.6rem 1.25rem', borderRadius: '10px', border: '1px solid #c2410c', background: '#c2410c', cursor: 'pointer', fontWeight: '700', color: '#ffffff', boxShadow: '0 4px 12px rgba(194, 65, 12, 0.3)' },
  cardsGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 380px))', 
    gap: '2rem', 
    width: '100%' 
  },
  card: { 
    background: '#0e1d32', 
    borderRadius: '20px', 
    padding: '2.5rem', 
    boxSizing: 'border-box', 
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' 
  },
  cardTitle: { fontSize: '1.3rem', color: '#ffffff', fontWeight: '800', marginBottom: '1.25rem' },
  infoRow: { display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8', fontSize: '0.95rem', marginBottom: '0.8rem' }
};