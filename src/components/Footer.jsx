import React from 'react';
import flowerLogo from '/psht1.png';

export default function Footer() {
  return (
    <footer id="footer" style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.brandBox}>
          <div style={styles.logoWrapper}>
            <img src={flowerLogo} alt="Logo PSHT" style={styles.logo} />
          </div>
          <h3 style={styles.brandTitle}>PSHT Ranting Kosambi</h3>
          <p style={styles.brandSubtitle}>Cabang Kota Tangerang • Pusat Madiun</p>
        </div>

        <div style={styles.contactInfo}>
          <p style={styles.contactText}>
            <strong>Lokasi Ranting & Pusat Latihan:</strong><br />
            Area Kantor Kecamatan Kosambi & Jl. Raya Salembaran, Kosambi, Kabupaten Tangerang, Banten[cite: 5]<br /><br />
            <strong>Kontak & Layanan Informasi:</strong><br />
            Hp. 081281746139, 081280537777, 081218036603 &nbsp;|&nbsp; Email : psht.kosambi1922@gmail.com[cite: 4]
          </p>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.copyright}>
          <p>© 2026 PSHT Ranting Kosambi · Cabang Kota Tangerang. Hak Cipta Dilindungi[cite: 3].</p>
        </div>
      </div>
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
    maxWidth: '1200px',
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
    marginBottom: '1.5rem'
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
  contactInfo: {
    marginBottom: '2rem',
    maxWidth: '750px'
  },
  contactText: {
    fontSize: '0.9rem',
    lineHeight: '1.7',
    color: '#cbd5e1'
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