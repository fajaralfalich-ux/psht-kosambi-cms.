import React, { useState } from 'react';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export default function KeShAn() {
  const [selectedTahap, setSelectedTahap] = useState(null);

  const contentData = {
    tujuanUtama: {
      nomor: "📚",
      judul: "TUJUAN PENDIDIKAN PSHT",
      deskripsiLengkap: `Tujuan dan Aspek Dasar Pendidikan PSHT\n\nPendidikan yang diberikan Persaudaraan Setia Hati Terate mengarah kepada pembentukan manusia berbudi luhur serta berpedoman pada 7 tujuan utama (Pasal 5 AD/ART):\n\n1. Ke-Tuhanan Yang Maha Esa\nMempertebal rasa Ke-Tuhanan Yang Maha Esa di dalam Persaudaraan Setia Hati Terate.\n\n2. Seni Budaya Pencak Silat\nMempertinggi seni budaya pencak silat dengan berpedoman pada wasiat Persaudaraan Setia Hati Terate.\n\n3. Cinta Kasih Sesama & Tanah Air\nMempertebal rasa cinta kasih kepada sesamanya dan cinta tanah air dan bangsa Indonesia.\n\n4. Jiwa Ksatria & Bela Negara\nMenanamkan jiwa ksatria, cinta tanah air dan bangsa Indonesia pada umumnya.\n\n5. Mental Spiritual & Fisik\nMempertinggi mental spiritual dan fisik bangsa Indonesia pada khususnya dan warga PSHT pada umumnya.\n\n6. Kepercayaan Diri atas Dasar Kebenaran\nMempertebal kepercayaan diri sendiri bagi setiap anggota Persaudaraan Setia Hati Terate atas dasar kebenaran.\n\n7. Manusia Berbudi Luhur\nIkut serta mendidik manusia agar berbudi luhur yang tahu benar dan salah serta berjiwa Pancasila.`
    },
    pancaUtama: {
      nomor: "🛡️",
      judul: "5 PANCA DASAR PSHT",
      deskripsiLengkap: `Panca Dasar yang menjadi landasan utama pembentukan karakter dan fisik setiap warga PSHT:\n\n1. Persaudaraan\nPersaudaraan merupakan aspek utama dan menjadi dasar yang menjiwai seluruh ajaran PSHT. Mengajarkan hubungan kekeluargaan yang tulus tanpa membedakan suku, agama, ras, dan latar belakang sosial.\n\n2. Olahraga\nOlahraga merupakan aspek yang mengajarkan pentingnya menjaga kesehatan dan kebugaran jasmani melalui latihan fisik, pemanasan, senam dasar, kuda-kuda, dan ketahanan tubuh.\n\n3. Beladiri\nBeladiri merupakan aspek yang mengajarkan kemampuan untuk melindungi dan mempertahankan diri ketika menghadapi ancaman melalui berbagai teknik pencak silat.\n\n4. Kesenian\nKesenian merupakan aspek yang mengajarkan bahwa pencak silat memiliki unsur keindahan gerakan, keluwesan, ketepatan, irama, dan keselarasan tubuh.\n\n5. Kerohanian\nKerohanian atau Ke-SH-an merupakan aspek yang memberikan pendidikan mengenai kepribadian, pengendalian diri, moral, dan budi pekerti luhur.`
    }
  };

  if (selectedTahap) {
    const data = contentData[selectedTahap];
    return (
      <div style={styles.container} className="keshan-detail-container">
        <style>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .keshan-detail-anim { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

          .gradient-gold-title {
            background: linear-gradient(135deg, #ffffff 20%, #fde047 60%, #e11d48 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 4px 20px rgba(251, 191, 36, 0.2);
          }

          @media (max-width: 768px) {
            .keshan-detail-container {
              padding: 3rem 1.25rem !important;
            }
            .keshan-detail-box {
              padding: 2rem 1.5rem !important;
            }
            .keshan-detail-title {
              font-size: 1.6rem !important;
            }
            .keshan-detail-text {
              font-size: 0.95rem !important;
            }
          }
        `}</style>
        <div style={styles.innerWrapper} className="keshan-inner">
          <button onClick={() => setSelectedTahap(null)} style={styles.backButton}>
            <ArrowLeft size={18} />
            <span>Kembali ke Ke-SH-an</span>
          </button>
          <div style={styles.detailContentBox} className="keshan-detail-box keshan-detail-anim">
            <div style={styles.detailBadge}>{data.nomor}</div>
            <h1 style={styles.detailTitle} className="keshan-detail-title gradient-gold-title">{data.judul}</h1>
            <p style={styles.detailText} className="keshan-detail-text">{data.deskripsiLengkap}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container} className="keshan-page-container">
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .keshan-header-anim { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

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

        @media (max-width: 768px) {
          .keshan-page-container {
            padding: 3rem 1.25rem !important;
          }
          .keshan-inner {
            padding: 0 !important;
          }
          .keshan-subHeadingWrapper {
            justify-content: center !important;
          }
          .keshan-header-box {
            margin-bottom: 2rem !important;
            text-align: center !important;
          }
          .keshan-title {
            font-size: 1.75rem !important;
            line-height: 1.25 !important;
          }
          .keshan-subtitle {
            font-size: 0.9rem !important;
          }
          .keshan-step-card {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>

      <div style={styles.innerWrapper} className="keshan-inner">
        <div style={styles.headerBox} className="keshan-header-box keshan-header-anim">
          <div style={styles.subHeadingWrapper} className="keshan-subHeadingWrapper">
            <Sparkles size={16} color="#fb923c" />
            <span style={styles.tag}>KE-SH-an & PENDIDIKAN</span>
          </div>
          <h1 style={styles.title} className="keshan-title gradient-gold-title">
            Materi dan Aspek Ke-SH-an PSHT
          </h1>
          <p style={styles.subtitle} className="keshan-subtitle">
            Pendidikan dan landasan utama yang menjadi pedoman pembentukan karakter serta fisik setiap warga Persaudaraan Setia Hati Terate.
          </p>
        </div>

        <div style={styles.stepsGrid}>
          
          <div style={styles.stepCard} className="card-hover keshan-step-card">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
              <span style={styles.cardBadge}>Pasal 5 AD/ART</span>
              <h3 style={styles.cardTitle}>Tujuan Pendidikan PSHT</h3>
              <p style={styles.cardText}>Tujuan dan aspek dasar pendidikan PSHT yang mengarah pada pembentukan manusia berbudi luhur...</p>
            </div>
            <button onClick={() => setSelectedTahap('tujuanUtama')} style={styles.btnRed}>
              <span>Baca selengkapnya</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div style={styles.stepCard} className="card-hover keshan-step-card">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
              <span style={styles.cardBadge}>Landasan Utama</span>
              <h3 style={styles.cardTitle}>5 Panca Dasar PSHT</h3>
              <p style={styles.cardText}>Panca Dasar yang menjadi landasan utama pembentukan karakter, olahraga, beladiri, kesenian, dan kerohanian...</p>
            </div>
            <button onClick={() => setSelectedTahap('pancaUtama')} style={styles.btnRed}>
              <span>Baca selengkapnya</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { 
    width: '100%', 
    minHeight: 'calc(100vh - 80px)',
    backgroundColor: '#070f1e',
    boxSizing: 'border-box',
    padding: '5rem 4rem 6rem 4rem'
  },
  innerWrapper: {
    width: '100%', 
    boxSizing: 'border-box',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  headerBox: { marginBottom: '3rem', width: '100%', textAlign: 'left' },
  subHeadingWrapper: { display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' },
  tag: { color: '#fb923c', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px' },
  title: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.75rem', lineHeight: '1.2' },
  subtitle: { color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '800px' },

  stepsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2.5rem', width: '100%' },
  stepCard: { borderRadius: '20px', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)', textAlign: 'left' },
  cardBadge: { fontSize: '0.72rem', fontWeight: '700', padding: '0.3rem 0.75rem', borderRadius: '20px', backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#fb923c', border: '1px solid rgba(249, 115, 22, 0.2)', marginBottom: '0.75rem' },
  cardTitle: { fontSize: '1.35rem', color: '#ffffff', fontWeight: '800', marginBottom: '0.75rem' },
  cardText: { color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem', flexGrow: 1 },
  btnRed: { background: '#c2410c', color: '#ffffff', border: 'none', padding: '0.85rem 1.75rem', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', fontSize: '0.95rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.2s ease', boxShadow: '0 4px 15px rgba(194, 65, 12, 0.3)' },

  backButton: { background: 'none', border: 'none', color: '#fb923c', fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'opacity 0.2s' },
  detailContentBox: { background: '#10223b', padding: '3rem', borderRadius: '20px', border: '1px solid #1e3a5f', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)', textAlign: 'left', width: '100%', boxSizing: 'border-box' },
  detailBadge: { width: '56px', height: '56px', background: '#070f1e', color: '#ffffff', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.5rem', marginBottom: '1.5rem', border: '1px solid #1e3a5f' },
  detailTitle: { fontSize: '2.2rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.2' },
  detailText: { color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.8', margin: 0, whiteSpace: 'pre-line', textAlign: 'left' }
};