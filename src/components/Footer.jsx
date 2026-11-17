import React from 'react';
import flowerLogo from '/psht1.png';

export default function Footer() {
  return (
    <footer id="footer" style={styles.footer}>
      <div style={styles.container}>
        {/* Logo & Identitas Organisasi */}
        <div style={styles.brandBox}>
          <div style={styles.logoWrapper}>
            <img src={flowerLogo} alt="Logo PSHT" style={styles.logo} />
          </div>
          <h3 style={styles.brandTitle}>PSHT Ranting Kosambi</h3>
          <p style={styles.brandSubtitle}>Cabang Kota Tangerang • Pusat Madiun</p>
        </div>

        {/* Informasi Dua Kolom (Kiri & Kanan) */}
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
    padding: '4rem 2rem 2rem 2rem',
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
  brandBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2.5rem'
  },
  logoWrapper: {
    width: '64px',
    height: '64px',
    backgroundColor: '#162f4f',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    border: '1px solid #1e3a5f',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
  },
  logo: {
    width: '40px',
    height: '40px',
    objectFit: 'contain'
  },
  brandTitle: {
    color: '#ffffff',
    fontSize: '1.25rem',
    fontWeight: '800',
    marginBottom: '0.25rem'
  },
  brandSubtitle: {
    color: '#fb923c',
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '0.5px'
  },
  twoColumnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    width: '100%',
    marginBottom: '2.5rem',
    textAlign: 'left'
  },
  columnBox: {
    flex: 1,
    backgroundColor: '#10223b',
    padding: '1.5rem',
    borderRadius: '14px',
    border: '1px solid #1e3a5f'
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