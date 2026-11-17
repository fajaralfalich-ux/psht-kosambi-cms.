import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" style={styles.footer}>
      <p style={styles.text}>© 2026 PSHT Ranting Kosambi · Cabang Kota Tangerang. Hak Cipta Dilindungi.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0f172a',
    color: '#94a3b8',
    padding: '2rem 4rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    marginTop: 'auto',
    width: '100%',
    boxSizing: 'border-box'
  },
  text: { margin: 0 }
};