import React, { useState } from 'react';

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
      <div style={styles.container}>
        <div style={styles.innerWrapper}>
          <button onClick={() => setSelectedTahap(null)} style={styles.backButton}>
            &larr; Kembali ke Ke-SH-an
          </button>
          <div style={styles.detailContentBox}>
            <div style={styles.detailBadge}>{data.nomor}</div>
            <h1 style={styles.detailTitle}>{data.judul}</h1>
            <p style={styles.detailText}>{data.deskripsiLengkap}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
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
      `}</style>

      <div style={styles.innerWrapper}>
        <div style={styles.headerBox}>
          <span style={styles.tag}>KE-SH-AN & PENDIDIKAN</span>
          <h1 style={styles.title}>Materi dan Aspek Ke-SH-an PSHT</h1>
          <p style={styles.subtitle}>
            Pendidikan dan landasan utama yang menjadi pedoman pembentukan karakter serta fisik setiap warga Persaudaraan Setia Hati Terate.
          </p>
        </div>

        <div style={styles.stepsGrid}>
          <div style={styles.stepCard} className="card-hover">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={styles.cardTitle}>TUJUAN PENDIDIKAN PSHT</h3>
              <p style={styles.cardText}>Tujuan dan Aspek Dasar Pendidikan PSHT (Pasal 5 AD/ART)...</p>
            </div>
            <button onClick={() => setSelectedTahap('tujuanUtama')} style={styles.btnRed}>
              Baca selengkapnya
            </button>
          </div>

          <div style={styles.stepCard} className="card-hover">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={styles.cardTitle}>5 PANCA DASAR PSHT</h3>
              <p style={styles.cardText}>Panca Dasar yang menjadi landasan utama pembentukan karakter...</p>
            </div>
            <button onClick={() => setSelectedTahap('pancaUtama')} style={styles.btnRed}>
              Baca selengkapnya
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
    boxSizing: 'border-box'
  },
  innerWrapper: {
    padding: '6rem 3rem', // Padding kiri kanan sedikit diperkecil agar konten lebih melebar ke samping
    width: '100%', 
    boxSizing: 'border-box'
    // Batas maxWidth dihapus/dibuat 100% agar merentang penuh selebar layar
  },
  headerBox: { marginBottom: '3.5rem', width: '100%' },
  tag: { color: '#c2410c', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block', letterSpacing: '0.5px' },
  title: { fontSize: '2.8rem', color: '#ffffff', fontWeight: '800', marginBottom: '0.75rem' },
  subtitle: { color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '100%' },

  stepsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', width: '100%' },
  stepCard: { backgroundColor: '#0e1d32', border: '1px solid #1e293b', borderRadius: '20px', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)', textAlign: 'center' },
  cardTitle: { fontSize: '1.3rem', color: '#ffffff', fontWeight: '800', marginBottom: '0.75rem', textAlign: 'center' },
  cardText: { color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', textAlign: 'center' },
  btnRed: { background: '#c2410c', color: '#ffffff', border: 'none', padding: '0.85rem 2rem', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', fontSize: '0.95rem', width: '100%', transition: 'background 0.2s', boxShadow: '0 4px 12px rgba(194, 65, 12, 0.3)' },

  backButton: { background: 'none', border: 'none', color: '#c2410c', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' },
  detailContentBox: { background: '#0e1d32', padding: '3.5rem', borderRadius: '20px', border: '1px solid #1e293b', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', textAlign: 'left', width: '100%', boxSizing: 'border-box' },
  detailBadge: { width: '60px', height: '60px', background: '#070f1e', color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.5rem', margin: '0 auto 1.5rem auto', border: '1px solid #1e293b' },
  detailTitle: { fontSize: '2.2rem', color: '#ffffff', fontWeight: '800', marginBottom: '2rem', textTransform: 'uppercase', textAlign: 'center' },
  detailText: { color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.8', margin: 0, whiteSpace: 'pre-line', textAlign: 'left' }
};