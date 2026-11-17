import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={styles.footer} className="footer-container">
      <style>{`
        .footer-container {
          background-color: #070f1e;
          border-top: 1px solid #1e3a5f;
          width: 100%;
        }
        
        /* PENGATURAN RESPONSIF UNTUK HP */
        @media (max-width: 768px) {
          .footer-content-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .footer-inner {
            padding: 3rem 1.25rem 2rem 1.25rem !important;
          }
        }
      `}</style>

      <div style={styles.innerWrapper} className="footer-inner">
        
        {/* GRID KONTEN UTAMA (Dibuat maksimal ke sisi paling kiri dan kanan) */}
        <div style={styles.contentGrid} className="footer-content-grid">
          
          {/* KOLOM KIRI: LOKASI & PETA */}
          <div style={styles.column}>
            <div style={styles.headerWithIcon}>
              <div style={styles.iconBox}>
                <MapPin size={20} color="#fb923c" />
              </div>
              <h3 style={styles.columnTitle}>Lokasi Ranting Kosambi</h3>
            </div>
            
            <p style={styles.addressText}>
              Jl. Raya Salembaran No.38, Salembaran, Kec. Kosambi, Kabupaten Tangerang, Banten 15214
            </p>

            {/* EMBED GOOGLE MAPS */}
            <div style={styles.mapWrapper}>
              <iframe 
                title="Peta Kantor Kecamatan Kosambi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666373708304!2d106.6657!3d-6.0894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02568a555555%3A0x123456789abcdef!2sKantor%20Kecamatan%20Kosambi!5e0!3m2!1sid!2sid!4v1650000000000!5m2!1sid!2sid" 
                style={styles.mapIframe}
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* KOLOM KANAN: KONTAK & LAYANAN INFORMASI */}
          <div style={styles.column}>
            <div style={styles.headerWithIcon}>
              <div style={styles.iconBox}>
                <Phone size={20} color="#fb923c" />
              </div>
              <h3 style={styles.columnTitle}>Kontak & Layanan Informasi</h3>
            </div>

            <div style={styles.contactItem}>
              <p style={styles.contactLabel}>Hp / WhatsApp:</p>
              <p style={styles.contactValue}>
                081281746139, 08128053777, 081218036603
              </p>
            </div>

            <div style={styles.contactItem}>
              <p style={styles.contactLabel}>Email Resmi:</p>
              <div style={styles.emailWrapper}>
                <Mail size={16} color="#fb923c" />
                <span style={styles.contactValue}>psht.kosambi1922@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* GARIS PEMBATAS & COPYRIGHT */}
        <div style={styles.bottomBar}>
          <p style={styles.copyrightText}>
            &copy; 2026 PSHT Ranting Kosambi &bull; Cabang Kota Tangerang. Hak Cipta Dilindungi.
          </p>
        </div>

      </div>
    </footer>
  );
}

const styles = {
  footer: {
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#070f1e',
  },
  innerWrapper: {
    /* Mengubah max-width menjadi lebih luas agar mentok ke kanan dan kiri secara proporsional */
    maxWidth: '100%',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box',
    padding: '4rem 5% 2rem 5%',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '4rem',
    width: '100%',
    alignItems: 'start',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    width: '100%',
  },
  headerWithIcon: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1rem',
  },
  iconBox: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    backgroundColor: '#10223b',
    border: '1px solid #1e3a5f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnTitle: {
    fontSize: '1.2rem',
    color: '#ffffff',
    fontWeight: '800',
    margin: 0,
  },
  addressText: {
    color: '#94a3b8',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    margin: '0 0 1.25rem 0',
  },
  mapWrapper: {
    width: '100%',
    height: '220px',
    borderRadius: '14px',
    overflow: 'hidden',
    border: '1px solid #1e3a5f',
    backgroundColor: '#10223b',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
  },
  mapIframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
  contactItem: {
    marginBottom: '1.5rem',
  },
  contactLabel: {
    color: '#cbd5e1',
    fontSize: '0.9rem',
    fontWeight: '700',
    margin: '0 0 0.35rem 0',
  },
  contactValue: {
    color: '#94a3b8',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    margin: 0,
  },
  emailWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  bottomBar: {
    marginTop: '3.5rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #1e3a5f',
    textAlign: 'center',
  },
  copyrightText: {
    color: '#64748b',
    fontSize: '0.85rem',
    margin: 0,
  }
};