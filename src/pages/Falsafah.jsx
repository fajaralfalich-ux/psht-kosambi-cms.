import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Falsafah() {
  return (
    <div style={styles.pageContainer} className="falsafah-page-container">
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .falsafah-anim { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        /* Efek Gradasi Emas Mewah */
        .gradient-gold-title {
          background: linear-gradient(135deg, #ffffff 20%, #fde047 60%, #e11d48 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 20px rgba(251, 191, 36, 0.2);
        }

        .falsafah-card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #1e3a5f;
          background: linear-gradient(145deg, #10223b 0%, #0d1b30 100%);
        }
        .falsafah-card-hover:hover {
          border-color: rgba(249, 115, 22, 0.6) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.45);
        }

        @media (max-width: 768px) {
          .falsafah-page-container {
            padding: 3rem 1.25rem !important;
          }
          .subHeadingWrapper {
            justify-content: center !important;
          }
          .falsafah-header-box {
            text-align: center !important;
          }
          .falsafah-title {
            font-size: 1.75rem !important;
            line-height: 1.25 !important;
            margin-bottom: 1.5rem !important;
          }
          .falsafah-card-box {
            padding: 2rem 1.5rem !important;
          }
          .falsafah-text {
            font-size: 0.95rem !important;
            line-height: 1.7 !important;
          }
        }
      `}</style>

      <div style={styles.contentBox}>
        <div style={styles.headerBox} className="falsafah-header-box falsafah-anim">
          <div style={styles.subHeadingWrapper} className="subHeadingWrapper">
            <Sparkles size={16} color="#fb923c" />
            <span style={styles.tag}>AJARAN & FALSAFAH</span>
          </div>
          <h1 style={styles.title} className="falsafah-title gradient-gold-title">
            Memayu Hayuning Bawana
          </h1>
        </div>
        
        <div style={styles.cardBox} className="falsafah-card-box falsafah-card-hover falsafah-anim">
          <p style={styles.text} className="falsafah-text">
            Selain belajar pencak silat, warga atau anggota PSHT dibekali dengan falsafah PSHT yang ditanamkan pada diri setiap warganya. Falsafah dan ajaran yang utama dari PSHT adalah manusia dapat dihancurkan, manusia dapat dimatikan (dibunuh) tetapi manusia tidak dapat dikalahkan selama manusia itu setia pada hatinya sendiri atau ber-SH pada diri sendiri. Tidak ada kekuatan apapun di atas manusia yang bisa mengalahkan manusia kecuali kekuatan Tuhan Yang Maha Esa.
          </p>
          <p style={styles.text} className="falsafah-text">
            Ajaran tersebut telah menjadi keyakinan kuat bagi semua warga PSHT sehingga menjadi kekuatan tersendiri bagi anggota atau warga secara pribadi maupun persaudaraan. Sebagai salah satu seni bela diri yang berasal dari timur, PSHT bertujuan membantu anggotanya untuk mengembangkan karakter jujur, menjaga keseimbangan fisik, mental/kecerdasan, emosi, sosial, dan spiritual.
          </p>
          <p style={styles.text} className="falsafah-text">
            Di abad ke-21 ini, penanaman nilai-nilai luhur PSHT merupakan tantangan tersendiri, utamanya bagi para pengurus karena pengurus harus berhadapan dengan globalisasi dan kemajuan teknologi yang tidak terbendung. Meski tidak ringan, pengurus telah bertekad untuk tetap menjaga karakteristik PSHT tanpa mengabaikan pengaruh kemajuan jaman.
          </p>
          <p style={{ ...styles.text, marginBottom: 0 }} className="falsafah-text">
            Setia Hati berarti setia kepada hati sanubari sendiri yang bersih dari noda, sedangkan Terate menyimbolkan ketangguhan bunga terate yang mampu tumbuh di air keruh namun tetap indah dan suci.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: { 
    padding: '5rem 4rem 6rem 4rem', 
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
  headerBox: { marginBottom: '2.5rem', textAlign: 'left' },
  subHeadingWrapper: { display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' },
  tag: { 
    color: '#fb923c', 
    fontWeight: '700', 
    fontSize: '0.8rem', 
    textTransform: 'uppercase', 
    letterSpacing: '1.5px'
  },
  title: { 
    fontSize: '2.5rem', 
    fontWeight: '800', 
    lineHeight: '1.2'
  },
  cardBox: {
    borderRadius: '20px',
    padding: '3rem',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
  },
  text: { 
    color: '#94a3b8', 
    fontSize: '1.05rem', 
    lineHeight: '1.8', 
    marginBottom: '1.5rem',
    textAlign: 'left'
  }
};