import React from 'react';

export default function Falsafah() {
  return (
    <div style={styles.pageContainer} className="falsafah-page-container">
      <style>{`
        @media (max-width: 768px) {
          .falsafah-page-container {
            padding: 3rem 1.25rem !important;
          }
          .falsafah-title {
            font-size: 1.85rem !important;
            line-height: 1.2 !important;
            margin-bottom: 1.5rem !important;
          }
          .falsafah-card-box {
            padding: 2rem 1.25rem !important;
          }
          .falsafah-text {
            font-size: 0.95rem !important;
            line-height: 1.7 !important;
          }
        }
      `}</style>

      <div style={styles.contentBox}>
        <span style={styles.tag}>AJARAN & FALSAFAH</span>
        <h1 style={styles.title} className="falsafah-title">Memayu Hayuning Bawana</h1>
        
        <div style={styles.cardBox} className="falsafah-card-box">
          <p style={styles.text} className="falsafah-text">
            Selain belajar pencak silat, warga atau anggota PSHT dibekali dengan falsafah PSHT yang ditanamkan pada diri setiap warganya. Falsafah dan ajaran yang utama dari PSHT adalah manusia dapat dihancurkan, manusia dapat dimatikan (dibunuh) tetapi manusia tidak dapat dikalahkan selama manusia itu setia pada hatinya sendiri atau ber-SH pada diri sendiri. Tidak ada kekuatan apapun di atas manusia yang bisa mengalahkan manusia kecuali kecuali kekuatan Tuhan Yang Maha Esa.
          </p>
          <p style={styles.text} className="falsafah-text">
            Ajaran tersebut telah menjadi keyakinan kuat bagi semua warga PSHT sehingga menjadi kekuatan tersendiri bagi anggota atau warga secara pribadi maupun persaudaraan. Sebagai salah satu seni bela diri yang berasal dari timur, PSHT bertujuan membantu anggotanya untuk mengmbangkan karakter jujur, menjaga keseimbangan fisik, mental/kecerdasan, emosi, sosial, dan spiritual.
          </p>
          <p style={styles.text} className="falsafah-text">
            Di abad ke 21 ini, penanaman nilai-nilai luhur PSHT merupakan tantangan tersendiri, utamanya bagi para pengurus karena pengurus harus berhadapan dengan globalisasi dan kemajuan teknologi yang tidak terbendung. Meski tidak ringan, pengurus telah bertekad untuk tetap menjaga karakteristik PSHT tanpa mengabaikan pengaruh kemajuan jaman.
          </p>
          <p style={styles.text} className="falsafah-text">
            Setia Hati berarti setia kepada hati sanubari sendiri yang bersih dari noda, sedangkan Terate menyimbolkan ketangguhan bunga terate yang mampu tumbuh di air keruh namun tetap indah dan suci.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: { 
    padding: '6rem 4rem', 
    width: '100%', 
    boxSizing: 'border-box',
    backgroundColor: '#070f1e',
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    justifyContent: 'center'
  },
  contentBox: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  tag: { 
    color: '#c2410c', 
    fontWeight: '700', 
    fontSize: '0.85rem', 
    marginBottom: '0.5rem', 
    display: 'block',
    letterSpacing: '0.5px'
  },
  title: { 
    fontSize: '2.8rem', 
    color: '#ffffff', 
    fontWeight: '800', 
    marginBottom: '2.5rem'
  },
  cardBox: {
    background: '#0e1d32',
    borderRadius: '20px',
    padding: '3.5rem',
    border: '1px solid #1e293b',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
  },
  text: { 
    color: '#94a3b8', 
    fontSize: '1.05rem', 
    lineHeight: '1.8', 
    marginBottom: '1.5rem',
    textAlign: 'left'
  }
};