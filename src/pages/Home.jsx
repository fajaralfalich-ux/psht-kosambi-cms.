import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Shield, Award, ChevronDown, ChevronUp, Play, X, Eye, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import flowerLogo from '/psht1.png';

export default function Home() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('photo');

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const galleryItems = [
    {
      id: 1,
      type: 'photo',
      title: 'Latihan Rutin Fisik & Teknik Dasar',
      category: 'Event',
      images: ['/foto1.jpeg', '/foto2.jpeg', '/foto13.jpeg', '/foto15.jpeg'],
      objectPos: 'center',
      desc: 'Suasana latihan rutin malam minggu di Ranting Kosambi, melatih ketahanan fisik, kuda-kuda, dan jurus dasar.'
    },
    {
      id: 2,
      type: 'photo',
      title: 'Ujian Kenaikan Tingkat Siswa',
      category: 'Ujian Kenaikan Tingkat (UKT)',
      images: ['/foto7.jpeg' , '/foto9.jpeg', '/foto10.jpeg'],
      objectPos: 'center',
      desc: 'Dokumentasi kegiatan Ujian Kenaikan Tingkat (UKT) untuk menguji kemampuan fisik, mental, dan jurus siswa PSHT.'
    },
    {
      id: 3,
      type: 'photo',
      title: 'Rapat Koordinasi & Latihan Gabungan',
      category: 'Latihan Gabungan',
      images: ['/foto3.jpeg', '/foto5.jpeg', '/foto6.jpeg', '/foto11.jpeg', '/foto12.jpeg'],
      objectPos: 'center',
      desc: 'Agenda silaturahim dan latihan gabungan bersama pengurus serta warga PSHT Ranting Kosambi.'
    },
    {
      id: 4,
      type: 'photo',
      title: 'Kegiatan Doa Bersama & Peduli Sesama',
      category: 'Doa Bersama',
      images: ['/foto4.jpeg', '/foto8.jpeg', '/foto14.jpeg', '/foto16.jpeg'],
      objectPos: 'center',
      desc: 'Wujud nyata prinsip Memayu Hayuning Bawana melalui kegiatan doa bersama dan aksi sosial untuk kebaikan sesama.'
    },
    {
      id: 5,
      type: 'video',
      title: 'Penampilan Seni Tunggal Ipsi, Dalam Event Sbcc kids-4',
      category: 'Event',
      urls: ['/video1.mp4'],
      desc: 'Penampilan atraksi seni pencak silat tradisional dan jurus ganda oleh atlet pendekar PSHT.'
    },
    {
      id: 6,
      type: 'video',
      title: 'Kegiatan Latihan Gabungan & Silaturahim',
      category: 'Kegiatan Latihan Gabungan',
      urls: ['/video2.mp4'], 
      desc: 'Kebersamaan anggota dan kontingen PSHT Ranting Kosambi dalam berbagai momentum kegiatan.'
    },
    {
      id: 7,
      type: 'video',
      title: 'Dokumentasi Tes Kenaikan Tingkat',
      category: 'Ujian Kenaikan Tingkat (UKT)',
      urls: ['/video3.mp4', '/video5.mp4'],
      desc: 'Dokumentasi lengkap rangkaian kegiatan Ujian Kenaikan Tingkat (UKT) warga dan siswa PSHT.'
    },
    {
      id: 8,
      type: 'video',
      title: 'Dokumentasi Doa Bersama, Kebersamaan & Bakti Sosial',
      category: 'Doa Bersama & Bakti Sosial',
      urls: ['/video4.mp4'],
      desc: 'Kebersamaan anggota dan kontingen PSHT Ranting Kosambi dalam berbagai momentum kegiatan.'
    },
  ];

  const filteredGallery = galleryItems.filter(item => item.type === activeFilter);

  const handleOpenModal = (media) => {
    setSelectedMedia(media);
    setCurrentImageIndex(0);
  };

  const nextMediaItem = (e) => {
    e.stopPropagation();
    if (selectedMedia) {
      const list = selectedMedia.type === 'photo' ? selectedMedia.images : selectedMedia.urls;
      if (list && list.length > 1) {
        setCurrentImageIndex((prev) => (prev + 1) % list.length);
      }
    }
  };

  const prevMediaItem = (e) => {
    e.stopPropagation();
    if (selectedMedia) {
      const list = selectedMedia.type === 'photo' ? selectedMedia.images : selectedMedia.urls;
      if (list && list.length > 1) {
        setCurrentImageIndex((prev) => (prev - 1 + list.length) % list.length);
      }
    }
  };

  const cardDetails = {
    falsafah: {
      title: 'Ajaran & Falsafah',
      desc: 'Memahami nilai kebenaran, keadilan, dan pembentukan karakter manusia berjiwa kesatria.',
      detail: `1. Memayu Hayuning Bawana\nMakna Filosofis: Memayu Hayuning Bawana adalah prinsip luhur Nusantara yang bermakna menjaga, memperindah, merawat, dan menciptakan keharmonisan serta ketenteraman di muka bumi.\n\n2. Berbudi Luhur\nMakna Filosofis: Berbudi luhur adalah puncak integritas moral, akhlak mulia, dan kebersihan jiwa.\n\n3. Setia pada Hati Sanubari\nMakna Filosofis: Kesetiaan mutlak pada suara kebenaran dari dalam hati nurani.\n\n4. Sepiro Gedhening Sengsoro Yen Tinompo Amung Dadi Cobo\nMakna Filosofis: Sebesar apa pun bentuk penderitaan, cobaan, atau musibah, apabila diterima dengan keikhlasan jiwa, semua itu hanya ujian kecil.`,
      icon: <BookOpen size={28} />,
      color: '#fb923c',
      bg: '#162f4f'
    },
    persaudaraan: {
      title: 'Persaudaraan',
      desc: 'Mempererat ikatan antar anggota tanpa membedakan suku, agama, dan latar belakang.',
      detail: `Persaudaraan merupakan dasar utama dalam ajaran Persaudaraan Setia Hati Terate (PSHT), dilandasi rasa kasih sayang, saling menghormati, dan saling membantu dalam kehidupan sehari-hari.`,
      icon: <Users size={28} />,
      color: '#38bdf8',
      bg: '#162f4f'
    },
    prestasi: {
      title: 'Pencak Silat Pendekar & Prestasi',
      desc: 'Latihan fisik, teknik bela diri tradisional, serta persiapan kejuaraan Seni & Tanding.',
      detail: `Pencak silat, pendekar, dan prestasi merupakan tiga hal yang saling berkaitan dalam pendidikan PSHT, mengajarkan olahraga, seni, budaya, serta pengendalian diri.`,
      icon: <Shield size={28} />,
      color: '#4ade80',
      bg: '#162f4f'
    },
    sosial: {
      title: 'Bakti Sosial',
      desc: 'Kegiatan kemasyarakatan, donor darah, dan tanggap bencana sebagai wujud Memayu Hayuning Bawana.',
      detail: `Bakti sosial merupakan bentuk pengamalan ajaran PSHT melalui aksi kemanusiaan nyata di tengah masyarakat.`,
      icon: <Award size={28} />,
      color: '#f87171',
      bg: '#162f4f'
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes floatEnhanced {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 10px 25px rgba(30, 58, 95, 0.4); }
          50% { box-shadow: 0 15px 35px rgba(249, 115, 22, 0.2); }
          100% { box-shadow: 0 10px 25px rgba(30, 58, 95, 0.4); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
        .hero-title-anim { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .hero-desc-anim { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; opacity: 0; }
        .hero-badges-anim { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
        .hero-btns-anim { animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; opacity: 0; }
        .logo-floating-box {
          animation: floatEnhanced 4s ease-in-out infinite, pulseGlow 4s ease-in-out infinite;
        }
        .btn-hover-effect { transition: all 0.25s ease; }
        .btn-hover-effect:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(249, 115, 22, 0.4);
        }
        .card-hover {
          transition: all 0.3s ease;
          border: 1px solid #1e3a5f;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(249, 115, 22, 0.6) !important;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }
        .gallery-card {
          transition: all 0.3s ease;
          overflow: hidden;
          cursor: pointer;
          background-color: #162f4f;
          border-radius: 16px;
          border: 1px solid #1e3a5f;
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .gallery-card:hover img, .gallery-card:hover video { transform: scale(1.05); }
        .gallery-card:hover .gallery-overlay { opacity: 1; }
        .badge-pulse { 
          transition: all 0.2s ease; 
          background: rgba(30, 58, 95, 0.6);
          backdrop-filter: blur(6px);
          border: 1px solid #1e3a5f;
          color: #e2e8f0;
        }
        .badge-pulse:hover {
          background-color: #f97316 !important;
          color: #ffffff !important;
          border-color: #f97316 !important;
        }
        .filter-btn { transition: all 0.2s ease; }
        .filter-btn:hover { background-color: #1e3a5f; color: #ffffff; }
        .modal-enter { animation: fadeInScale 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        @media (max-width: 768px) {
          .hero-section { padding: 3rem 1.25rem !important; flex-direction: column !important; gap: 2rem !important; text-align: left !important; }
          .hero-content { text-align: left !important; max-width: 100% !important; }
          .hero-title { font-size: 1.85rem !important; text-align: left !important; line-height: 1.2 !important; margin-bottom: 0.85rem !important; }
          .hero-desc { font-size: 0.95rem !important; text-align: left !important; margin-bottom: 1.25rem !important; line-height: 1.6 !important; }
          .hero-badges { justify-content: flex-start !important; margin-bottom: 1.25rem !important; gap: 0.5rem !important; }
          .badge { padding: 0.35rem 0.75rem !important; font-size: 0.75rem !important; }
          .btn-group { justify-content: flex-start !important; gap: 0.75rem !important; }
          .btnPrimary, .btnSecondary { padding: 0.7rem 1.25rem !important; font-size: 0.85rem !important; }
          
          /* Pengaturan Logo Hero di HP agar kompak dan elegan */
          .hero-image-wrapper { width: 100% !important; display: flex !important; justify-content: center !important; margin-top: 0.5rem !important; }
          .hero-card-badge { padding: 1.5rem !important; border-radius: 20px !important; max-width: 200px !important; margin: 0 auto !important; }
          .logo-image { width: 130px !important; height: 130px !important; }
          
          /* Grid Kartu Pilar 2 kolom rapi di HP */
          .cards-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem !important; }
          .cardDark { padding: 1rem !important; border-radius: 12px !important; }
          .cardIcon { width: 38px !important; height: 38px !important; margin-bottom: 0.75rem !important; border-radius: 8px !important; }
          .cardTitleLight { font-size: 0.9rem !important; margin-bottom: 0.3rem !important; }
          .cardTextLight { font-size: 0.75rem !important; line-height: 1.4 !important; margin-bottom: 0.75rem !important; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
          .cardLinkText { font-size: 0.75rem !important; }

          .gallery-grid-4 { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .section-dark, .section-dark-alt { padding: 3rem 1.25rem !important; }
          .section-title-light { font-size: 1.5rem !important; }
          .section-descLight { font-size: 0.9rem !important; }
          .sectionHeader { margin-bottom: 1.75rem !important; }
          .gallery-header-flex { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <header id="beranda" style={styles.hero} className="hero-section">
        <div style={styles.heroContent} className="hero-content">
          <div style={styles.subHeadingWrapper}>
            <Sparkles size={14} color="#fb923c" />
            <span style={styles.heroSubTag}>SITUS RESMI PSHT RANTING KOSAMBI</span>
          </div>
          <h1 style={styles.heroTitle} className="hero-title-anim hero-title">Persaudaraan Setia Hati Terate</h1>
          <p style={styles.heroDesc} className="hero-desc-anim hero-desc">
            Mendidik manusia berbudi luhur, tahu benar dan salah, serta melestarikan seni bela diri tradisional pencak silat dengan semangat kekeluargaan yang tinggi.
          </p>
          <div style={styles.heroBadges} className="hero-badges-anim hero-badges">
            <span style={styles.badge} className="badge-pulse">✨ Terbuka untuk Umum</span>
            <span style={styles.badge} className="badge-pulse">🥋 Latihan Rutin</span>
            <span style={styles.badge} className="badge-pulse">📜 Bersertifikat</span>
          </div>
          <div style={styles.btnGroup} className="hero-btns-anim btn-group">
            <button onClick={() => navigate('/pendaftaran')} style={styles.btnPrimary} className="btn-hover-effect btnPrimary">
              Daftar <ArrowRight size={16} />
            </button>
            <button onClick={() => navigate('/kegiatan')} style={styles.btnSecondary} className="btn-hover-effect btnSecondary">
              Jadwal
            </button>
          </div>
        </div>
        <div style={styles.heroImageWrapper} className="hero-image-wrapper">
          <div style={styles.heroCardBadge} className="logo-floating-box hero-card-badge">
            <img src={flowerLogo} alt="Logo Bunga PSHT" style={styles.logoImage} className="logo-image" />
          </div>
        </div>
      </header>

      {/* 2. TENTANG ORGANISASI */}
      <section id="profil" style={styles.sectionDark} className="section-dark">
        <div style={styles.sectionInner}>
          <div style={styles.sectionHeader} className="sectionHeader">
            <span style={styles.sectionTagLight}>PILIHAN PENDIDIKAN & AJARAN</span>
            <h2 style={styles.sectionTitleLight} className="section-title-light">Nilai Luhur dan Karakter Utama PSHT</h2>
            <p style={styles.sectionDescLight} className="section-descLight">
              PSHT tidak hanya membangun ketangkasan fisik, tetapi juga membentuk mental berjiwa ksatria. Klik pada kartu di bawah untuk mengeksplorasi penjelasan mendalam setiap pilar.
            </p>
          </div>
          <div style={styles.cardsGrid} className="cards-grid">
            {Object.keys(cardDetails).map((key) => {
              const item = cardDetails[key];
              return (
                <div 
                  key={key} 
                  style={styles.cardDark} 
                  className="card-hover cardDark"
                  onClick={() => setSelectedCard(item)}
                >
                  <div style={{ ...styles.cardIcon, backgroundColor: item.bg, color: item.color }} className="cardIcon">
                    {item.icon}
                  </div>
                  <h3 style={styles.cardTitleLight} className="cardTitleLight">{item.title}</h3>
                  <p style={styles.cardTextLight} className="cardTextLight">{item.desc}</p>
                  <div style={styles.cardLinkText} className="cardLinkText">
                    <span>Selengkapnya</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. GALERI FOTO & VIDEO KEGIATAN */}
      <section id="kegiatan" style={styles.sectionDarkAlt} className="section-dark-alt">
        <div style={styles.sectionInner}>
          <div style={styles.galleryHeaderFlex} className="gallery-header-flex">
            <div>
              <span style={styles.sectionTagLight}>DOKUMENTASI KEGIATAN</span>
              <h2 style={styles.sectionTitleLight} className="section-title-light">Galeri Aktivitas Ranting Kosambi</h2>
              <p style={styles.sectionDescLight} className="section-descLight">
                Momen kebersamaan, latihan fisik, ujian kenaikan tingkat, hingga kejuaraan pencak silat.
              </p>
            </div>
            <div style={styles.filterWrapper}>
              <button 
                onClick={() => setActiveFilter('photo')} 
                style={{ ...styles.filterBtn, ...(activeFilter === 'photo' ? styles.filterBtnActive : {}) }}
                className="filter-btn"
              >
                📷 Foto
              </button>
              <button 
                onClick={() => setActiveFilter('video')} 
                style={{ ...styles.filterBtn, ...(activeFilter === 'video' ? styles.filterBtnActive : {}) }}
                className="filter-btn"
              >
                🎬 Video
              </button>
            </div>
          </div>
          <div style={styles.galleryGrid4} className="gallery-grid-4">
            {filteredGallery.map((media) => {
              const hasImages = media.type === 'photo' && media.images && media.images.length > 0;
              const hasVideos = media.type === 'video' && media.urls && media.urls.length > 0;
              return (
                <div 
                  key={media.id} 
                  className="gallery-card card-hover"
                  onClick={() => handleOpenModal(media)}
                >
                  <div style={styles.galleryMediaWrapper}>
                    {hasVideos ? (
                      <video muted style={styles.galleryImage}>
                        <source src={media.urls[0]} type="video/mp4" />
                      </video>
                    ) : hasImages ? (
                      <img 
                        src={media.images[0]} 
                        alt={media.title} 
                        style={{ ...styles.galleryImage, objectPosition: media.objectPos }} 
                      />
                    ) : (
                      <div style={styles.emptyCardPlaceholder}>
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Media belum tersedia</p>
                      </div>
                    )}
                    
                    <div className="gallery-overlay" style={styles.galleryOverlay}>
                      <div style={styles.playIconBadge}>
                        {media.type === 'video' ? <Play size={24} fill="white" /> : <Eye size={24} />}
                      </div>
                    </div>
                    <span style={styles.mediaTypeTag}>
                      {media.type === 'video' ? `🎬 Video (${media.urls ? media.urls.length : 0})` : `📷 Foto (${media.images ? media.images.length : 0})`}
                    </span>
                  </div>
                  <div style={styles.galleryMeta}>
                    <span style={styles.galleryCategory}>{media.category}</span>
                    <h4 style={styles.galleryTitle}>{media.title}</h4>
                    <p style={styles.galleryDesc}>{media.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section style={styles.sectionDark} className="section-dark">
        <div style={styles.sectionInner}>
          <div style={styles.sectionHeader} className="sectionHeader">
            <span style={styles.sectionTagLight}>FAQ (TANYA JAWAB)</span>
            <h2 style={styles.sectionTitleLight} className="section-title-light">Pertanyaan yang Sering Diajukan</h2>
            <p style={styles.sectionDescLight} className="section-descLight">Temukan informasi penting seputar prosedur pendaftaran dan ketentuan latihan di ranting kami.</p>
          </div>
          <div style={styles.accordionContainer}>
            {[
              { q: "Siapa saja yang boleh mendaftar latihan?", a: "Latihan PSHT terbuka untuk umum mulai dari usia anak-anak (SD/SMP), remaja (SMA/K), hingga dewasa tanpa batasan latar belakang." },
              { q: "Berapa biaya pendaftaran dan latihan?", a: "Biaya administrasi awal mencakup kelengkapan atribut latihan sakral. Iuran bulanan dikelola secara transparan dan kekeluargaan oleh pengurus Rayon masing-masing." },
              { q: "Apa saja dokumen yang harus disiapkan?", a: "Fotokopi KTP/Kartu Keluarga, pas foto ukuran 3x4 (2 lembar), serta surat izin resmi dari orang tua atau wali bagi pendaftar yang berusia di bawah 17 tahun." }
            ].map((item, idx) => (
              <div key={idx} style={styles.accordionItemDark} className="card-hover">
                <div style={styles.accordionHeaderDark} onClick={() => toggleFaq(idx)}>
                  <span>{item.q}</span>
                  <div style={styles.chevronWrapper}>
                    {activeFaq === idx ? <ChevronUp size={18} color="#fb923c" /> : <ChevronDown size={18} color="#94a3b8" />}
                  </div>
                </div>
                {activeFaq === idx && <div style={styles.accordionBodyDark}>{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DETAIL KARTU */}
      {selectedCard && (
        <div style={styles.modalOverlay} onClick={() => setSelectedCard(null)}>
          <div style={styles.modalContent} className="modal-enter" onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeaderTop}>
              <div style={{ ...styles.modalIconBox, backgroundColor: selectedCard.bg, color: selectedCard.color }}>
                {selectedCard.icon}
              </div>
              <button onClick={() => setSelectedCard(null)} style={styles.closeIconButton}>
                <X size={20} />
              </button>
            </div>
            <h2 style={styles.modalTitle}>{selectedCard.title}</h2>
            <div style={styles.modalTextScroll}>
              <p style={styles.modalText}>{selectedCard.detail}</p>
            </div>
            <div style={styles.modalActions}>
              <button style={styles.modalCloseBtn} onClick={() => setSelectedCard(null)}>Tutup</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL PREVIEW MEDIA GALERI */}
      {selectedMedia && (
        <div style={styles.modalOverlay} onClick={() => setSelectedMedia(null)}>
          <div style={styles.modalMediaContent} className="modal-enter" onClick={(e) => e.stopPropagation()}>
            <div style={styles.mediaModalHeader}>
              <span style={styles.mediaModalCategory}>{selectedMedia.category}</span>
              <button onClick={() => setSelectedMedia(null)} style={styles.closeIconButton}>
                <X size={20} />
              </button>
            </div>
            <h3 style={styles.mediaModalTitle}>{selectedMedia.title}</h3>
            <div style={styles.mediaDisplayWrapper}>
              {selectedMedia.type === 'video' ? (
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <video 
                    key={selectedMedia.urls[currentImageIndex]} 
                    controls 
                    autoPlay 
                    style={styles.modalVideoPlayer}
                  >
                    <source src={selectedMedia.urls[currentImageIndex]} type="video/mp4" />
                    Browser Anda tidak mendukung pemutaran video.
                  </video>
                  {selectedMedia.urls.length > 1 && (
                    <>
                      <button onClick={prevMediaItem} style={styles.sliderBtnLeft}>
                        <ChevronLeft size={24} />
                      </button>
                      <button onClick={nextMediaItem} style={styles.sliderBtnRight}>
                        <ChevronRight size={24} />
                      </button>
                      <div style={styles.sliderCounter}>
                        {currentImageIndex + 1} / {selectedMedia.urls.length}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={selectedMedia.images[currentImageIndex]} 
                    alt={selectedMedia.title} 
                    style={styles.modalFullImage} 
                  />
                  {selectedMedia.images.length > 1 && (
                    <>
                      <button onClick={prevMediaItem} style={styles.sliderBtnLeft}>
                        <ChevronLeft size={24} />
                      </button>
                      <button onClick={nextMediaItem} style={styles.sliderBtnRight}>
                        <ChevronRight size={24} />
                      </button>
                      <div style={styles.sliderCounter}>
                        {currentImageIndex + 1} / {selectedMedia.images.length}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            <p style={styles.mediaModalDesc}>{selectedMedia.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { width: '100%', boxSizing: 'border-box' },
  hero: {
    background: 'linear-gradient(135deg, #09182c 0%, #0f2744 100%)',
    padding: '6rem 4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '3rem',
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
    borderBottom: '1px solid #1e3a5f'
  },
  heroContent: { maxWidth: '750px', flex: 1 },
  subHeadingWrapper: { display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' },
  heroSubTag: { fontSize: '0.85rem', fontWeight: '700', color: '#fb923c', textTransform: 'uppercase', letterSpacing: '1px' },
  heroTitle: { fontSize: '2.6rem', color: '#ffffff', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.25rem' },
  heroDesc: { color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' },
  heroBadges: { display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.25rem' },
  badge: { padding: '0.5rem 1rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '600', cursor: 'default' },
  btnGroup: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  btnPrimary: { 
    backgroundColor: '#c2410c', 
    color: 'white', 
    padding: '0.85rem 1.75rem', 
    borderRadius: '10px', 
    fontWeight: '600', 
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.95rem',
    boxShadow: '0 8px 20px rgba(194, 65, 12, 0.3)'
  },
  btnSecondary: { 
    backgroundColor: '#162f4f', 
    color: '#ffffff', 
    border: '1px solid #1e3a5f', 
    padding: '0.85rem 1.75rem', 
    borderRadius: '10px', 
    fontWeight: '600', 
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '0.95rem'
  },
  heroImageWrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 },
  heroCardBadge: { 
    backgroundColor: '#162f4f', 
    padding: '3.5rem', 
    borderRadius: '30px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    border: '1px solid #1e3a5f',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
  },
  logoImage: { width: '240px', height: '240px', objectFit: 'contain' },
  sectionDark: { padding: '6rem 4rem', width: '100%', boxSizing: 'border-box', backgroundColor: '#0f2744' },
  sectionDarkAlt: { padding: '6rem 4rem', width: '100%', boxSizing: 'border-box', backgroundColor: '#09182c', borderTop: '1px solid #1e3a5f', borderBottom: '1px solid #1e3a5f' },
  sectionInner: { maxWidth: '1300px', margin: '0 auto', width: '100%' },
  sectionHeader: { marginBottom: '3rem', textAlign: 'left' },
  sectionTagLight: { color: '#fb923c', fontWeight: '700', fontSize: '0.8rem', marginBottom: '0.5rem', display: 'block', letterSpacing: '1.5px' },
  sectionTitleLight: { fontSize: '2.5rem', color: '#ffffff', fontWeight: '800', marginBottom: '0.75rem', lineHeight: '1.2' },
  sectionDescLight: { color: '#94a3b8', fontSize: '1.05rem', maxWidth: '800px', lineHeight: '1.6' },
  galleryHeaderFlex: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' },
  filterWrapper: { display: 'flex', gap: '0.5rem', backgroundColor: '#0f2744', padding: '0.35rem', borderRadius: '12px', border: '1px solid #1e3a5f' },
  filterBtn: { backgroundColor: 'transparent', border: 'none', color: '#94a3b8', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' },
  filterBtnActive: { backgroundColor: '#c2410c', color: '#ffffff' },
  cardsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', width: '100%' },
  galleryGrid4: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', width: '100%' },
  cardDark: { backgroundColor: '#162f4f', borderRadius: '16px', padding: '2rem', cursor: 'pointer', display: 'flex', flexDirection: 'column' },
  cardIcon: { width: '52px', height: '52px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' },
  cardTitleLight: { fontSize: '1.2rem', color: '#ffffff', fontWeight: '700', marginBottom: '0.5rem' },
  cardTextLight: { color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', flex: 1, marginBottom: '1.25rem' },
  cardLinkText: { display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fb923c', fontSize: '0.85rem', fontWeight: '600' },
  galleryMediaWrapper: { 
    position: 'relative', 
    width: '100%', 
    height: '240px', 
    overflow: 'hidden', 
    backgroundColor: '#070f1e' 
  },
  galleryImage: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover', 
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
  },
  emptyCardPlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#070f1e',
    color: '#94a3b8'
  },
  galleryOverlay: { position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease' },
  playIconBadge: { width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#c2410c', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(194, 65, 12, 0.4)' },
  mediaTypeTag: { position: 'absolute', top: '14px', left: '14px', backgroundColor: 'rgba(15, 23, 42, 0.8)', color: 'white', padding: '0.3rem 0.85rem', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '600', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' },
  galleryMeta: { padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 },
  galleryCategory: { color: '#fb923c', fontSize: '0.75rem', fontWeight: '700', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.5px' },
  galleryTitle: { fontSize: '1.1rem', color: '#ffffff', fontWeight: '800', marginBottom: '0.5rem' },
  galleryDesc: { color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 },
  accordionContainer: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '900px' },
  accordionItemDark: { backgroundColor: '#162f4f', borderRadius: '12px', overflow: 'hidden' },
  accordionHeaderDark: { padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: '700', color: '#ffffff', fontSize: '1rem' },
  chevronWrapper: { backgroundColor: '#0f2744', padding: '6px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  accordionBodyDark: { padding: '0 1.5rem 1.25rem 1.5rem', color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    backdropFilter: 'blur(6px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '1rem'
  },
  modalContent: {
    backgroundColor: '#162f4f',
    borderRadius: '20px',
    padding: '2.5rem',
    maxWidth: '700px',
    width: '100%',
    maxHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    boxSizing: 'border-box',
    border: '1px solid #1e3a5f',
    color: '#ffffff'
  },
  modalHeaderTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' },
  modalIconBox: { width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  closeIconButton: { backgroundColor: '#0f2744', border: '1px solid #1e3a5f', color: '#94a3b8', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
  modalTitle: { fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '1rem' },
  modalTextScroll: { overflowY: 'auto', flex: 1, paddingRight: '0.5rem', marginBottom: '1.5rem' },
  modalText: { color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.8', whiteSpace: 'pre-line', margin: 0 },
  modalActions: { display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid #1e3a5f' },
  modalCloseBtn: { backgroundColor: '#c2410c', color: '#ffffff', border: 'none', padding: '0.65rem 1.5rem', borderRadius: '10px', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' },
  modalMediaContent: {
    backgroundColor: '#09182c',
    borderRadius: '20px',
    padding: '1.75rem',
    maxWidth: '850px',
    width: '100%',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
    boxSizing: 'border-box',
    border: '1px solid #1e3a5f'
  },
  mediaModalHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' },
  mediaModalCategory: { fontSize: '0.75rem', fontWeight: '700', color: '#fb923c', textTransform: 'uppercase', letterSpacing: '1px' },
  mediaModalTitle: { fontSize: '1.2rem', fontWeight: '800', color: '#ffffff', marginBottom: '1rem' },
  mediaDisplayWrapper: {
    position: 'relative',
    width: '100%',
    height: '380px',
    backgroundColor: '#000000',
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  modalFullImage: { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' },
  modalVideoPlayer: { width: '100%', height: '100%', outline: 'none' },
  sliderBtnLeft: {
    position: 'absolute',
    left: '12px',
    backgroundColor: 'rgba(15, 23, 42, 0.7)',
    color: '#ffffff',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10
  },
  sliderBtnRight: {
    position: 'absolute',
    right: '12px',
    backgroundColor: 'rgba(15, 23, 42, 0.7)',
    color: '#ffffff',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10
  },
  sliderCounter: {
    position: 'absolute',
    bottom: '12px',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    color: '#ffffff',
    padding: '0.3rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  mediaModalDesc: { color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }
};