import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" style={styles.footer}>
      <div style={styles.container}>
        {/* Informasi Dua Kolom (Kiri & Kanan) Tanpa Kotak */}
        <div style={styles.twoColumnContainer} className="footer-two-col">
          
          {/* Kolom Kiri: Lokasi & Maps Presisi Kantor Kecamatan */}
          <div style={styles.columnBox}>
            <h4 style={styles.columnTitle}>📍 Lokasi Ranting & Pusat Latihan</h4>
            <p style={styles.columnText}>
              Jl. Raya Salembaran No.38, Salembaran, Kec. Kosambi, Kabupaten Tangerang, Banten 15214
            </p>
            {/* Embed Google Maps dengan Ukuran Lebih Kecil & Ringkas */}
            <div style={styles.mapWrapper}>
              <iframe
                title="Peta Lokasi Kantor Kecamatan Kosambi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8661858509375!2d106.66414317498993!3d-6.0742845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a039988334ad3%3A0x4ba54b728efbe8e4!2sKantor%20Kecamatan%20Kosambi!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="90"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Kolom Kanan: Kontak & Email */}
          <div style={{ ...styles.columnBox, marginLeft: '-3rem' }} className="footer-right-col">
            <h4 style={styles.columnTitle}>📞 Kontak & Layanan Informasi</h4>
            <p style={styles.columnText}>
              <strong>Hp / WhatsApp:</strong><br />
              081281746139, 081280537777, 081218036603<br /><br />
              <strong>Email Resmi:</strong><br />
              psht.kosambi1922@gmail.com
            </p>
          </div>

        </div>

        <div style={styles.divider}></div>

        <div style={styles.copyright}>
          <p>© 2026 PSHT Ranting Kosambi · Cabang Kota Tangerang. Hak Cipta Dilindungi.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-two-col {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          .footer-right-col {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#070f1e',
    color: '#94a3b8',
    padding: '3rem 3rem 2rem 3rem',
    borderTop: '1px solid #1e3a5f',
    width: '100%',
    boxSizing: 'border-box',
    scrollMarginTop: '70px'
  },
  container: {
    maxWidth: '1300px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left'
  },
  twoColumnContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '5rem',
    width: '100%',
    marginBottom: '2.5rem',
    textAlign: 'left'
  },
  columnBox: {
    flex: '1',
    backgroundColor: 'transparent',
    padding: '0'
  },
  columnTitle: {
    color: '#ffffff',
    fontSize: '0.95rem',
    fontWeight: '700',
    marginBottom: '0.75rem'
  },
  columnText: {
    fontSize: '0.88rem',
    lineHeight: '1.6',
    color: '#cbd5e1',
    marginBottom: '1rem'
  },
  mapWrapper: {
    width: '100%',
    maxWidth: '380px', // Diperkecil lagi lebarnya agar lebih proporsional
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #1e3a5f',
    marginTop: '0.5rem'
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#1e3a5f',
    marginBottom: '1.5rem'
  },
  copyright: {
    fontSize: '0.82rem',
    color: '#64748b',
    textAlign: 'left',
    width: '100%'
  }
};