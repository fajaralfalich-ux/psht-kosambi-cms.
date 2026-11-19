import React from 'react';

export default function Footer() {
  const mapEmbedUrl =
    'https://www.google.com/maps?q=Kantor+Kecamatan+Kosambi,+Jl.+Raya+Salembaran+No.38,+Kosambi,+Tangerang,+Banten+15214&output=embed';

  const externalMapUrl =
    'https://www.google.com/maps/search/?api=1&query=Kantor+Kecamatan+Kosambi+Jl.+Raya+Salembaran+No.38+Kosambi+Tangerang';

  return (
    <footer id="footer" style={styles.footer}>
      <div style={styles.container}>
        {/* Informasi Dua Kolom (Kiri & Kanan) */}
        <div style={styles.twoColumnContainer} className="footer-two-col">
          {/* Kolom Kiri: Lokasi & Maps Presisi Kantor Kecamatan */}
          <div style={styles.columnBox}>
            <h4 style={styles.columnTitle}>📍 Location</h4>
            <p style={styles.columnText}>
              Jl. Raya Salembaran No.38, Salembaran, Kec. Kosambi, Kabupaten Tangerang, Banten 15214
            </p>

            <div style={styles.mapWrapper}>
              <iframe
                title="Peta Lokasi Kantor Kecamatan Kosambi"
                src={mapEmbedUrl}
                width="100%"
                height="160"
                style={styles.mapIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={externalMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.mapLink}
            >
              Buka di Google Maps →
            </a>
          </div>

          {/* Kolom Kanan: Kontak & Email */}
          <div style={styles.columnBox} className="footer-right-col">
            <h4 style={styles.columnTitle}>📞 Kontak & Layanan Informasi</h4>
            <div style={styles.contactGroup}>
              <p style={styles.contactLabel}>Hp / WhatsApp:</p>
              <p style={styles.contactValue}>
                081281746139, 08128053777, 081218036603
              </p>
            </div>
            <div style={styles.contactGroup}>
              <p style={styles.contactLabel}>Email Resmi:</p>
              <a href="mailto:psht.kosambi1922@gmail.com" style={styles.emailLink}>
                psht.kosambi1922@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div style={styles.divider} />

        <div style={styles.copyright}>
          <p>© 2026 PSHT Ranting Kosambi · Cabang Kota Tangerang. Hak Cipta Dilindungi.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-two-col {
            flex-direction: column !important;
            gap: 2rem !important;
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
    justifyContent: 'space-between',
    gap: '4rem',
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
    marginBottom: '1rem',
    maxWidth: '460px'
  },
  mapWrapper: {
    width: '100%',
    maxWidth: '340px',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid #1e3a5f',
    backgroundColor: '#0f172a',
    marginTop: '0.5rem'
  },
  mapIframe: {
    display: 'block',
    border: 0,
    width: '100%'
  },
  mapLink: {
    display: 'inline-block',
    marginTop: '0.6rem',
    fontSize: '0.8rem',
    color: '#fb923c',
    textDecoration: 'none',
    fontWeight: '600'
  },
  contactGroup: {
    marginBottom: '1.1rem'
  },
  contactLabel: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: '#e2e8f0',
    marginBottom: '0.2rem'
  },
  contactValue: {
    fontSize: '0.88rem',
    lineHeight: '1.6',
    color: '#cbd5e1',
    margin: 0
  },
  emailLink: {
    fontSize: '0.88rem',
    color: '#cbd5e1',
    textDecoration: 'none'
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