import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" style={styles.footer}>
      <div style={styles.container}>
        {/* Informasi Dua Kolom (Kiri & Kanan) Tanpa Kotak */}
        <div style={styles.twoColumnContainer} className="footer-two-col">
          <div style={styles.columnBox}>
            <h4 style={styles.columnTitle}>📍 Lokasi Ranting & Pusat Latihan</h4>
            <p style={styles.columnText}>
              Area Kantor Kecamatan Kosambi & Jl. Raya Salembaran, Kosambi, Kabupaten Tangerang, Banten
            </p>
          </div>

          <div style={styles.columnBox}>
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
        }
      `}</style>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#070f1e',
    color: '#94a3b8',
    padding: '3rem 2rem 2rem 2rem',
    borderTop: '1px solid #1e3a5f',
    width: '100%',
    boxSizing: 'border-box',
    scrollMarginTop: '70px'
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  twoColumnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '3rem',
    width: '100%',
    marginBottom: '2.5rem',
    textAlign: 'left'
  },
  columnBox: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: '0.5rem'
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
    margin: 0
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#1e3a5f',
    marginBottom: '1.5rem'
  },
  copyright: {
    fontSize: '0.82rem',
    color: '#64748b'
  }
};