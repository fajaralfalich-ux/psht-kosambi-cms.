import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Shield, 
  FileText, 
  Moon, 
  Sun,
  Plus, 
  Trash2, 
  Calendar,
  X,
  Settings,
  Activity,
  Download,
  User,
  GraduationCap,
  Award,
  Home,
  Briefcase,
  LogOut,
  Mail,
  Edit,
  CheckCircle2,
  Phone,
  BookOpen,
  Eye,
  EyeOff,
  Upload
} from 'lucide-react';

export default function PenggunaCMS() {
  const navigate = useNavigate();

  // STATE AUTENTIKASI / LOGIN
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('psht_cms_logged_in') === 'true';
  });
  
  const [activeMenu, setActiveMenu] = useState('Profil Super Admin');
  const [darkMode, setDarkMode] = useState(false);

  // STATE TOGGLE LIHAT PASSWORD DI MODAL TAMBAH USER
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 1. DATA USERS (MANAJEMEN PENGGUNA)
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('psht_cms_users');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        name: 'Fajar Alfalich',
        email: 'fajar.kosambi@psht.org',
        role: 'Super Admin',
        jabatan: 'Ranting Kosambi',
        status: 'Aktif',
        lastLogin: '11 Nov 2026, 15:10'
      },
      {
        id: 2,
        name: 'M. Ijul Fiqih',
        email: 'ijul.fiqih@psht.org',
        role: 'Admin Ranting',
        jabatan: 'Pelatih',
        status: 'Aktif',
        lastLogin: '10 Nov 2026, 12:00'
      }
    ];
  });

  // 2. PROFIL ADMIN AKTIF
  const [adminProfile, setAdminProfile] = useState(() => {
    const saved = localStorage.getItem('psht_cms_admin_profile');
    return saved ? JSON.parse(saved) : {
      name: 'Fajar Alfalich',
      email: 'fajar.kosambi@psht.org',
      nim: '17230278',
      role: 'Super Admin',
      rayon: 'Ranting Kosambi, Cabang Kota Tangerang',
      noHp: '089653139161',
      bio: 'Administrator Utama Website Resmi PSHT Ranting Kosambi.'
    };
  });

  // 3. DATA SISWA / ATLET
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('psht_siswa_list');
    return saved ? JSON.parse(saved) : [
      { id: 'SISWA-2026-001', name: 'Salwa Almirah Putri', nik: '3603142907030006', tempatLahir: 'Tangerang', tanggalLahir: '29/07/2003', noHp: '089653139161', tinggiBadan: '160', beratBadan: '48', rayon: 'Rayon Jatimulya', ranting: 'Ranting Kosambi', alamat: 'Jl. Raya Kosambi No. 12', tingkatan: 'Seni Putri Usia Dini 1', status: 'Aktif', tglDaftar: '2026-11-12' },
      { id: 'SISWA-2026-002', name: 'Muhamad Andriyansyah', nik: '3603142907030007', tempatLahir: 'Tangerang', tanggalLahir: '29/07/2003', noHp: '081281746139', tinggiBadan: '165', beratBadan: '52', rayon: 'Rayon Kosambi', ranting: 'Ranting Kosambi', alamat: 'Jl. Pipa Gang Merpati', tingkatan: 'Seni Putra Usia Dini 1', status: 'Aktif', tglDaftar: '2026-11-12' },
      { id: 'SISWA-2026-003', name: 'Aisyah Naladhipa Lashira Al Iman', nik: '3603142907030008', tempatLahir: 'Tangerang', tanggalLahir: '29/07/2003', noHp: '08128053777', tinggiBadan: '155', beratBadan: '45', rayon: 'Rayon Belimbing', ranting: 'Ranting Kosambi', alamat: 'Desa Belimbing', tingkatan: 'Seni Putri Usia Dini 1', status: 'Aktif', tglDaftar: '2026-11-12' },
      { id: 'SISWA-2026-004', name: 'Damarwan Syaenul Wakiil', nik: '3603142907030009', tempatLahir: 'Tangerang', tanggalLahir: '29/07/2003', noHp: '081218036603', tinggiBadan: '170', beratBadan: '60', rayon: 'Rayon Kosambi', ranting: 'Ranting Kosambi', alamat: 'Kosambi', tingkatan: 'Seni Putra Usia Dini 1', status: 'Aktif', tglDaftar: '2026-11-12' },
      { id: 'SISWA-2026-005', name: 'Mas Maulana Habibi Al Iman', nik: '3603142907030010', tempatLahir: 'Tangerang', tanggalLahir: '29/07/2003', noHp: '089653139161', tinggiBadan: '168', beratBadan: '58', rayon: 'Rayon Kosambi', ranting: 'Ranting Kosambi', alamat: 'Kosambi', tingkatan: 'Seni Putra Usia Dini 1', status: 'Aktif', tglDaftar: '2026-11-12' },
      { id: 'SISWA-2026-006', name: 'Ayu Pratiwi Sari', nik: '3603142907030011', tempatLahir: 'Tangerang', tanggalLahir: '29/07/2003', noHp: '089653139161', tinggiBadan: '158', beratBadan: '46', rayon: 'Rayon Salembaran', ranting: 'Ranting Kosambi', alamat: 'Salembaran', tingkatan: 'Seni Putri Usia Dini 2', status: 'Aktif', tglDaftar: '2026-11-12' },
      { id: 'SISWA-2026-007', name: 'Zea Almaira Dini', nik: '3603142907030012', tempatLahir: 'Tangerang', tanggalLahir: '29/07/2003', noHp: '089653139161', tinggiBadan: '157', beratBadan: '44', rayon: 'Rayon Salembaran', ranting: 'Ranting Kosambi', alamat: 'Salembaran', tingkatan: 'Seni Putri Usia Dini 2', status: 'Aktif', tglDaftar: '2026-11-12' },
      { id: 'SISWA-2026-008', name: 'Aulia Febriani', nik: '3603142907030013', tempatLahir: 'Tangerang', tanggalLahir: '29/07/2003', noHp: '089653139161', tinggiBadan: '162', beratBadan: '50', rayon: 'Rayon Kosambi', ranting: 'Ranting Kosambi', alamat: 'Kosambi', tingkatan: 'Fighter Putri PraRemaja Kelas E', status: 'Aktif', tglDaftar: '2026-11-12' },
      { id: 'SISWA-2026-009', name: 'Aulia Damayati Widagdo', nik: '3603142907030014', tempatLahir: 'Tangerang', tanggalLahir: '29/07/2003', noHp: '089653139161', tinggiBadan: '160', beratBadan: '49', rayon: 'Rayon Kosambi', ranting: 'Ranting Kosambi', alamat: 'Kosambi', tingkatan: 'Seni Putri Usia Remaja', status: 'Aktif', tglDaftar: '2026-11-12' },
      { id: 'SISWA-2026-010', name: 'Muhammad Roihan Habiibii', nik: '3603142907030015', tempatLahir: 'Tangerang', tanggalLahir: '29/07/2003', noHp: '089653139161', tinggiBadan: '172', beratBadan: '62', rayon: 'Rayon Jatimulya', ranting: 'Ranting Kosambi', alamat: 'Jatimulya', tingkatan: 'Fighter Putra Remaja Kelas C', status: 'Aktif', tglDaftar: '2026-11-12' },
      { id: 'SISWA-2026-011', name: 'Kukuh Yuan Rahmadani', nik: '3603142907030016', tempatLahir: 'Tangerang', tanggalLahir: '29/07/2003', noHp: '089653139161', tinggiBadan: '175', beratBadan: '68', rayon: 'Rayon Jatimulya', ranting: 'Ranting Kosambi', alamat: 'Jatimulya', tingkatan: 'Fighter Putra Remaja Kelas F', status: 'Aktif', tglDaftar: '2026-11-12' },
      { id: 'SISWA-2026-012', name: 'Dea Agustin', nik: '3603142907030017', tempatLahir: 'Tangerang', tanggalLahir: '29/07/2003', noHp: '089653139161', tinggiBadan: '159', beratBadan: '47', rayon: 'Rayon Belimbing', ranting: 'Ranting Kosambi', alamat: 'Belimbing', tingkatan: 'Seni Putri Usia Remaja', status: 'Aktif', tglDaftar: '2026-11-12' }
    ];
  });

  // 4. DATA WARGA (DENGAN RAYON & RANTING TERPISAH)
  const [citizens, setCitizens] = useState(() => {
    const saved = localStorage.getItem('psht_cms_citizens');
    return saved ? JSON.parse(saved) : [
      { id: '20276001', name: 'Budi Santoso', tingkatWarga: 'Warga Tingkat I', rayon: 'Rayon Kosambi Timur', ranting: 'Ranting Kosambi', tahunPengesahan: '2023', noHp: '081311112222' },
      { id: '20276002', name: 'Fajar Alfalich', tingkatWarga: 'Warga Tingkat I', rayon: 'Rayon Kosambi', ranting: 'Ranting Kosambi', tahunPengesahan: '2024', noHp: '089653139161' }
    ];
  });

  // 5. STRUKTUR ORGANISASI
  const [orgStructure, setOrgStructure] = useState(() => {
    const saved = localStorage.getItem('psht_cms_org');
    return saved ? JSON.parse(saved) : [
      { id: 1, nama: 'Sukamto', jabatan: 'Ketua Ranting', kategori: 'Pimpinan Harian', kontak: '-' },
      { id: 2, nama: 'M. Ijul Fiqih', jabatan: 'Wakil Ketua', kategori: 'Pimpinan Harian', kontak: '-' },
      { id: 3, nama: 'Santoso', jabatan: 'Penasehat', kategori: 'Dewan Penasehat', kontak: '-' },
      { id: 4, nama: 'Endik Krisdianto', jabatan: 'Bendahara', kategori: 'Keuangan & Administrasi', kontak: '-' },
      { id: 5, nama: 'Pras', jabatan: 'Sekretaris', kategori: 'Keuangan & Administrasi', kontak: '-' },
      { id: 6, nama: 'Harianto', jabatan: 'Komtek', kategori: 'Komisi Teknik', kontak: '-' },
      { id: 7, nama: 'Ifan, Andre, Fajar, Rohli, Rizal, Viana, Aulia, Mirna, Kesya, Irul, Selvi', jabatan: 'Tim Kepelatihan', kategori: 'Bidang Kepelatihan', kontak: '-' }
    ];
  });

  // 6. JADWAL & KEGIATAN
  const [schedules, setSchedules] = useState(() => {
    const saved = localStorage.getItem('psht_cms_schedules');
    return saved ? JSON.parse(saved) : [
      { id: 1, judul: 'Latihan Rayon Salembaran', hari: 'Selasa & Kamis', waktu: '20.00 s/d 23.30', lokasi: 'Halaman Kantor Kecamatan Kosambi', pembina: 'Mas Harianto' },
      { id: 2, judul: 'Latihan Rayon Jatimulya', hari: 'Rabu & Sabtu', waktu: '20.00 s/d 23.30', lokasi: 'Sdn Jatimulya 2', pembina: 'Mas Wanto' }
    ];
  });

  // 7. LOG AUDIT AKTIVITAS
  const [auditLogs, setAuditLogs] = useState(() => {
    const saved = localStorage.getItem('psht_cms_logs');
    return saved ? JSON.parse(saved) : [
      { id: 1, waktu: '11 Nov 2026, 15:10', aktor: 'Fajar Alfalich', aksi: 'Login Sistem', detail: 'Berhasil masuk ke CMS Ranting Kosambi' }
    ];
  });

  // 8. PENGATURAN WEB
  const [webSettings, setWebSettings] = useState(() => {
    const saved = localStorage.getItem('psht_cms_settings');
    return saved ? JSON.parse(saved) : {
      namaRanting: 'PSHT Ranting Kosambi',
      cabang: 'Cabang Kota Tangerang',
      emailKontak: 'admin@pshtkosambi.or.id',
      telepon: '0812-8888-9999',
      pendaftaranBuka: true
    };
  });

  // Sync LocalStorage otomatis
  useEffect(() => { localStorage.setItem('psht_cms_users', JSON.stringify(users)); }, [users]);
  useEffect(() => { localStorage.setItem('psht_cms_admin_profile', JSON.stringify(adminProfile)); }, [adminProfile]);
  useEffect(() => { localStorage.setItem('psht_siswa_list', JSON.stringify(students)); }, [students]);
  useEffect(() => { localStorage.setItem('psht_cms_citizens', JSON.stringify(citizens)); }, [citizens]);
  useEffect(() => { localStorage.setItem('psht_cms_org', JSON.stringify(orgStructure)); }, [orgStructure]);
  useEffect(() => { localStorage.setItem('psht_cms_schedules', JSON.stringify(schedules)); }, [schedules]);
  useEffect(() => { localStorage.setItem('psht_cms_logs', JSON.stringify(auditLogs)); }, [auditLogs]);
  useEffect(() => { localStorage.setItem('psht_cms_settings', JSON.stringify(webSettings)); }, [webSettings]);

  const addLog = (aksi, detail) => {
    const now = new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });
    setAuditLogs(prev => [{ id: Date.now(), waktu: now, aktor: adminProfile.name, aksi, detail }, ...prev]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [formData, setFormData] = useState({});
  const [editId, setEditId] = useState(null);

  // FUNGSI LOGOUT YANG MENGARAH KE RUTE /admin/login
  const handleLogout = () => {
    addLog('Logout Sistem', 'Keluar dari sesi CMS');
    setIsLoggedIn(false);
    localStorage.removeItem('psht_cms_logged_in');
    navigate('/admin/login');
  };

  const exportCSV = (type) => {
    if (type === 'students') {
      const headers = ['ID Siswa', 'Nama Lengkap', 'NIK', 'Tempat Lahir', 'Tanggal Lahir', 'No HP', 'Tinggi Badan', 'Berat Badan', 'Rayon', 'Ranting', 'Alamat', 'Tingkatan', 'Status'];
      const rows = students.map(s => [s.id, `"${s.name}"`, `'${s.nik}`, `"${s.tempatLahir || '-'}"`, `"${s.tanggalLahir || '-'}"`, `'${s.noHp}`, s.tinggiBadan, s.beratBadan, `"${s.rayon}"`, `"${s.ranting || 'Ranting Kosambi'}"`, `"${s.alamat}"`, s.tingkatan, s.status]);
      downloadCSV(headers, rows, 'Data_Siswa_PSHT');
    } else {
      const headers = ['No Induk', 'Nama Warga', 'Tingkatan Warga', 'Rayon', 'Ranting', 'Tahun Pengesahan', 'No HP'];
      const rows = citizens.map(c => [c.id, `"${c.name}"`, c.tingkatWarga, `"${c.rayon}"`, `"${c.ranting}"`, c.tahunPengesahan, `'${c.noHp}`]);
      downloadCSV(headers, rows, 'Data_Warga_PSHT');
    }
  };

  const downloadCSV = (headers, rows, filename) => {
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${filename}_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    addLog('Ekspor Dokumen', `Mengunduh data dokumen ${filename}`);
  };

  const printDocument = () => {
    addLog('Cetak Dokumen', 'Mencetak Surat Pemberitahuan Delegasi PSHT Ranting Kosambi');
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Pop-up terblokir oleh browser. Izinkan pop-up untuk mencetak surat.');
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="UTF-8">
        <title>Surat Pemberitahuan Delegasi - PSHT Ranting Kosambi</title>
        <style>
          body { font-family: 'Times New Roman', Times, serif; font-size: 12pt; color: #000; background: #fff; margin: 20px; line-height: 1.5; }
          .kop-surat { display: flex; align-items: center; justify-content: space-between; border-bottom: 3px double #000; padding-bottom: 10px; margin-bottom: 20px; }
          .kop-text { text-align: center; flex: 1; }
          .kop-text h2 { font-size: 14pt; font-weight: bold; margin: 0; text-transform: uppercase; }
          .kop-text p { font-size: 9pt; margin: 2px 0; }
          .logo-placeholder { width: 70px; height: 70px; border: 1px dashed #666; display: flex; align-items: center; justify-content: center; font-size: 8pt; text-align: center; }
          .info-table { width: 100%; margin-bottom: 15px; }
          .info-table td { vertical-align: top; }
          .table-data { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 20px; }
          .table-data th, .table-data td { border: 1px solid #000; padding: 6px 8px; font-size: 11pt; }
          .table-data th { background-color: #f2f2f2; text-align: center; }
          .ttd-section { float: right; width: 250px; text-align: center; margin-top: 30px; }
          .ttd-space { height: 70px; }
        </style>
      </head>
      <body>
        <div class="kop-surat">
          <div class="logo-placeholder">LOGO PSHT</div>
          <div class="kop-text">
            <h2>PENGURUS RANTING PERSAUDARAAN SETIA HATI TERATE</h2>
            <h2>RANTING KOSAMBI</h2>
            <p><b>SK MENTERI HUKUM R.I. NO : AHU-0005248.AH.01.07. TAHUN 2025</b></p>
            <p>Sekretariat : Jalan Pipa Gang Merpati No. 12, RT.24/RW.12, Desa Belimbing, Kec. Kosambi, Kab. Tangerang, Banten</p>
            <p>Hp. 081281746139, 08128053777, 081218036603 | Email : psht.kosambi1922@gmail.com</p>
          </div>
          <div class="logo-placeholder">LOGO IPSI</div>
        </div>

        <table class="info-table">
          <tr>
            <td style="width: 60%;">
              <table>
                <tr><td style="width: 80px;"><b>Nomor</b></td><td>: 06/KOS-SPR/I/2026</td></tr>
                <tr><td><b>Lampiran</b></td><td>: -</td></tr>
                <tr><td><b>Perihal</b></td><td>: <b>Surat Pemberitahuan Delegasi</b></td></tr>
              </table>
            </td>
            <td style="width: 40%; text-align: right;">
              Kosambi, 27 September 2026
            </td>
          </tr>
        </table>

        <div style="margin-bottom: 15px;">
          <b>Kepada Yth,</b><br>
          Warga PSHT Ranting Kosambi<br>
          <i>Di Tempat</i>
        </div>

        <p><b>Assalamu’alaikum Wr. Wb. Salam Persaudaraan,</b></p>
        <p style="text-align: justify;">
          Sehubungan dengan adanya event <b>PSHT Cup-IV Cabang Kabupaten Tangerang</b>, Persaudaraan Setia Hati Terate (PSHT) Ranting Kosambi turut serta mendelegasikan atlet-atlet terbaiknya untuk mengikuti kejuaraan tersebut. Berikut adalah daftar atlet Ranting Kosambi yang mengikuti:
        </p>

        <table class="table-data">
          <thead>
            <tr>
              <th style="width: 40px;">No</th>
              <th>Nama Atlet</th>
              <th>Kategori / Kelas</th>
            </tr>
          </thead>
          <tbody>
            ${students.map((st, idx) => `
              <tr>
                <td style="text-align: center;">${idx + 1}</td>
                <td><b>${st.name}</b></td>
                <td>${st.tingkatan}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <p style="text-align: justify;">
          Maka dari itu, kami dari Pengurus PSHT Ranting Kosambi memohon doa serta dukungannya terhadap seluruh atlet Ranting Kosambi yang berlaga di event PSHT Cup-IV Cabang Kab. Tangerang, semoga diberikan keselamatan, kelancaran, dan hasil terbaik yang membanggakan.
        </p>
        <p style="text-align: justify;">
          Demikian surat pemberitahuan ini kami buat, semoga dapat digunakan sebagaimana mestinya. Atas perhatian dan kerjasamanya kami sampaikan terima kasih.
        </p>

        <p><b>Wassalamu’alaikum Wr. Wb.</b></p>

        <div class="ttd-section">
          <p style="margin: 0;"><b>PERSAUDARAAN SETIA HATI TERATE</b></p>
          <p style="margin: 0 0 10px 0;"><b>RANTING KOSAMBI — CABANG KOTA TANGERANG</b></p>
          <div class="ttd-space"></div>
          <p style="margin: 0; font-weight: bold; text-decoration: underline;">SUKAMTO</p>
          <p style="margin: 0; font-size: 10pt;">Ketua Ranting Kosambi</p>
        </div>

        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const bgMain = darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-800';
  const bgCard = darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg';
  
  const inputStyle = darkMode 
    ? 'bg-slate-950 text-white border border-slate-700 focus:border-[#c2410c] placeholder:text-slate-500' 
    : 'bg-white text-slate-900 font-medium border border-slate-300 focus:border-[#c2410c] placeholder:text-slate-400 shadow-xs';

  const labelStyle = darkMode ? 'block text-slate-300 mb-1 font-semibold' : 'block text-slate-800 mb-1 font-bold';

  return (
    <div className={`flex h-screen ${bgMain} font-sans antialiased overflow-hidden transition-colors duration-500`}>
      
      {/* SIDEBAR KIRI */}
      <aside className="w-64 bg-[#0a1b2a] text-slate-300 flex flex-col justify-between hidden md:flex p-3 flex-shrink-0 shadow-xl transition-all duration-300">
        <div>
          <div className="p-4 mb-3 border-b border-slate-800/80">
            <h1 className="text-white font-bold text-sm tracking-wide flex items-center gap-2.5">
              <span className="bg-[#c2410c] p-2 rounded-xl text-white shadow-md transform hover:rotate-6 transition-transform duration-300">
                <Shield size={18} />
              </span>
              <div>
                <span>{webSettings.namaRanting}</span>
                <p className="text-[10px] text-amber-400 font-medium tracking-wider uppercase mt-0.5">{webSettings.cabang}</p>
              </div>
            </h1>
          </div>

          <nav className="space-y-1.5">
            {[
              { name: 'Profil Super Admin', icon: <User size={17} /> },
              { name: 'Manajemen Pengguna', icon: <Users size={17} /> },
              { name: 'Data Siswa', icon: <GraduationCap size={17} /> },
              { name: 'Data Warga', icon: <Award size={17} /> },
              { name: 'Struktur Organisasi', icon: <Briefcase size={17} /> },
              { name: 'Jadwal & Kegiatan', icon: <Calendar size={17} /> },
              { name: 'Log Audit Aktivitas', icon: <Activity size={17} /> },
              { name: 'Pengaturan Web', icon: <Settings size={17} /> },
            ].map((menu) => (
              <button 
                key={menu.name}
                onClick={() => setActiveMenu(menu.name)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 transform active:scale-95 cursor-pointer ${
                  activeMenu === menu.name 
                    ? 'bg-[#c2410c] text-white shadow-lg shadow-orange-900/30 font-semibold translate-x-1' 
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white hover:translate-x-1'
                }`}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <LogOut size={16} /> Keluar (Logout)
          </button>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-[11px] text-slate-400">
            <p className="font-semibold text-slate-300 mb-0.5">Sistem CMS v2.5</p>
            <p>Online & Terenkripsi AES</p>
          </div>
        </div>
      </aside>

      {/* KONTEN UTAMA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* HEADER ATAS */}
        <header className={`h-20 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border-b px-8 flex justify-between items-center shadow-xs transition-colors duration-500`}>
          <div>
            <h1 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'} transition-all duration-300`}>{activeMenu}</h1>
            <p className="text-xs text-slate-500 mt-0.5">Pusat kontrol profesional untuk pengelolaan data operasional {webSettings.namaRanting}</p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/')} 
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                darkMode ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Home size={15} className="text-[#c2410c]" />
              <span>Landing Page</span>
            </button>

            <button onClick={() => setDarkMode(!darkMode)} className={`p-2.5 rounded-xl border transition-all duration-300 hover:rotate-45 active:scale-95 cursor-pointer ${darkMode ? 'bg-slate-800 border-slate-700 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right">
                <p className={`text-xs font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{adminProfile.name}</p>
                <p className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider">{adminProfile.role}</p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[#0a1b2a] text-white font-bold flex items-center justify-center text-xs shadow-md transform hover:scale-105 transition-transform duration-300">
                {adminProfile.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>

            <button 
              onClick={handleLogout}
              className="p-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white border border-red-200 transition-all cursor-pointer md:hidden"
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        </header>

        {/* AREA KONTEN DINAMIS */}
        <main className="flex-1 overflow-y-auto p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
          
          {/* 1. PROFIL SUPER ADMIN */}
          {activeMenu === 'Profil Super Admin' && (
            <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
              
              <div className={`${bgCard} rounded-3xl border shadow-xl overflow-hidden relative`}>
                <div className="h-32 bg-gradient-to-r from-[#0a1b2a] via-[#15324d] to-[#c2410c] px-8 flex items-end pb-4">
                  <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[11px] font-medium text-white flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400" /> Status: Terverifikasi Aktif
                  </div>
                </div>

                <div className="px-8 pb-8 pt-0 relative flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-14">
                  <div className="w-28 h-28 rounded-3xl bg-[#0a1b2a] text-white font-bold text-3xl flex items-center justify-center shadow-2xl border-4 border-white dark:border-slate-900 ring-4 ring-[#c2410c]/20">
                    {adminProfile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h2 className={`text-2xl font-black ${darkMode ? 'text-white' : 'text-slate-900'} tracking-tight`}>{adminProfile.name}</h2>
                    <p className="text-xs text-[#c2410c] font-bold mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                      <Shield size={14} /> {adminProfile.role} — <span className="text-slate-500 dark:text-slate-400 font-medium">{adminProfile.rayon}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${bgCard} rounded-3xl border shadow-xl p-8`}>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800/60">
                  <div>
                    <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'} flex items-center gap-2`}>
                      <Settings size={18} className="text-[#c2410c]" /> Pengaturan Profil & Kredensial Akun
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Perbarui informasi data diri, kontak, dan biografi administrator sistem.</p>
                  </div>
                </div>
                
                <form onSubmit={(e) => {
                  e.preventDefault();
                  addLog('Update Profil', 'Memperbarui data profil super admin');
                  alert('Profil berhasil diperbarui secara profesional!');
                }} className="space-y-5 text-xs font-semibold">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5 font-bold">
                        <User size={13} className="text-[#c2410c]" /> Nama Lengkap Administrator
                      </label>
                      <input 
                        type="text" 
                        value={adminProfile.name} 
                        onChange={(e) => setAdminProfile({ ...adminProfile, name: e.target.value })} 
                        className={`w-full p-3.5 rounded-xl text-sm font-normal focus:outline-none transition-all ${inputStyle}`} 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5 font-bold">
                        <Mail size={13} className="text-[#c2410c]" /> Email Resmi Organisasi
                      </label>
                      <input 
                        type="email" 
                        value={adminProfile.email} 
                        onChange={(e) => setAdminProfile({ ...adminProfile, email: e.target.value })} 
                        className={`w-full p-3.5 rounded-xl text-sm font-normal focus:outline-none transition-all ${inputStyle}`} 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5 font-bold">
                        <BookOpen size={13} className="text-[#c2410c]" /> NIM Mahasiswa (UBSI)
                      </label>
                      <input 
                        type="text" 
                        value={adminProfile.nim} 
                        onChange={(e) => setAdminProfile({ ...adminProfile, nim: e.target.value })} 
                        className={`w-full p-3.5 rounded-xl text-sm font-normal focus:outline-none transition-all ${inputStyle}`} 
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5 font-bold">
                        <Phone size={13} className="text-[#c2410c]" /> Nomor WhatsApp Aktif
                      </label>
                      <input 
                        type="text" 
                        value={adminProfile.noHp} 
                        onChange={(e) => setAdminProfile({ ...adminProfile, noHp: e.target.value })} 
                        className={`w-full p-3.5 rounded-xl text-sm font-normal focus:outline-none transition-all ${inputStyle}`} 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5 font-bold">
                      <FileText size={13} className="text-[#c2410c]" /> Biografi Singkat & Peran
                    </label>
                    <textarea 
                      rows={3} 
                      value={adminProfile.bio} 
                      onChange={(e) => setAdminProfile({ ...adminProfile, bio: e.target.value })} 
                      className={`w-full p-3.5 rounded-xl text-sm font-normal focus:outline-none transition-all ${inputStyle}`} 
                    />
                  </div>

                  <div className="pt-3 flex justify-end">
                    <button 
                      type="submit" 
                      className="bg-[#c2410c] hover:bg-orange-700 text-white font-bold px-6 py-3.5 rounded-xl cursor-pointer shadow-lg shadow-orange-950/50 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2"
                    >
                      <CheckCircle2 size={16} /> Simpan Perubahan Profil
                    </button>
                  </div>

                </form>
              </div>

            </div>
          )}

          {/* 2. MANAJEMEN PENGGUNA */}
          {activeMenu === 'Manajemen Pengguna' && (
            <div className="animate-in fade-in duration-500">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div>
                  <h2 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Daftar Admin & Pengurus Sistem</h2>
                  <p className="text-xs text-slate-500 mt-1">Kelola hak akses pengurus ranting dan administrator website.</p>
                </div>
                <button onClick={() => { setModalType('addUser'); setFormData({ name: '', email: '', password: '', confirmPassword: '', role: 'Admin Ranting', jabatan: 'Pelatih', status: 'Aktif' }); setIsModalOpen(true); }} className="bg-[#0a1b2a] hover:bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                  <Plus size={15} /> Tambah User Baru
                </button>
              </div>

              <div className={`${bgCard} rounded-2xl border shadow-xs overflow-hidden`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className={`border-b text-xs font-bold uppercase tracking-wider ${darkMode ? 'bg-slate-800/60 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                        <th className="p-4.5 pl-6">Nama / Email</th>
                        <th className="p-4.5">Peran / Role</th>
                        <th className="p-4.5">Jabatan</th>
                        <th className="p-4.5">Status</th>
                        <th className="p-4.5">Login Terakhir</th>
                        <th className="p-4.5 text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y text-xs ${darkMode ? 'divide-slate-800 text-slate-300' : 'divide-slate-200 text-slate-700'}`}>
                      {users.map((u) => (
                        <tr key={u.id} className={`transition-colors duration-200 ${darkMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}`}>
                          <td className="p-4.5 pl-6">
                            <div className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                              {u.name}
                            </div>
                            <div className="text-slate-500 text-[11px]">{u.email}</div>
                          </td>
                          <td className="p-4.5"><span className="bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 rounded-lg font-semibold">{u.role}</span></td>
                          <td className="p-4.5 font-semibold text-slate-700 dark:text-slate-300">{u.jabatan}</td>
                          <td className="p-4.5"><span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-full font-semibold">● {u.status}</span></td>
                          <td className="p-4.5 font-mono text-slate-500">{u.lastLogin}</td>
                          <td className="p-4.5 text-center">
                            <button onClick={() => {
                              setUsers(users.filter(x => x.id !== u.id));
                              addLog('Hapus User', `Menghapus user ${u.name}`);
                            }} className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-red-50 text-red-600 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" title="Hapus"><Trash2 size={15} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 3. DATA SISWA / ATLET */}
          {activeMenu === 'Data Siswa' && (
            <div className="animate-in fade-in duration-500">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div>
                  <h2 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Buku Induk Data Siswa & Delegasi Atlet</h2>
                  <p className="text-xs text-slate-500 mt-1">Pengelolaan data siswa latihan & cetak Surat Pemberitahuan Delegasi Resmi.</p>
                </div>

                <div className="flex items-center gap-2.5">
                  <button onClick={() => exportCSV('students')} className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                    <Download size={15} /> Unduh CSV
                  </button>
                  <button onClick={printDocument} className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                    <FileText size={15} /> Cetak Surat Resmi (PDF)
                  </button>
                  <button onClick={() => { setModalType('addStudent'); setFormData({ name: '', nik: '', tempatLahir: '', tanggalLahir: '', noHp: '', tinggiBadan: '', beratBadan: '', alamat: '', tingkatan: 'Siswa Polos', rayon: 'Rayon Salembaran', ranting: 'Ranting Kosambi' }); setIsModalOpen(true); }} className="bg-[#0a1b2a] hover:bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                    <Plus size={15} /> Tambah Siswa Baru
                  </button>
                </div>
              </div>

              <div className={`${bgCard} rounded-2xl border shadow-xs overflow-hidden`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className={`border-b text-xs font-bold uppercase tracking-wider ${darkMode ? 'bg-slate-800/60 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                        <th className="p-4 pl-6">ID / Nama Lengkap</th>
                        <th className="p-4">NIK</th>
                        <th className="p-4">TTL</th>
                        <th className="p-4">No. WhatsApp</th>
                        <th className="p-4">Rayon</th>
                        <th className="p-4">Ranting</th>
                        <th className="p-4">Tingkatan / Kategori</th>
                        <th className="p-4 text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y text-xs ${darkMode ? 'divide-slate-800 text-slate-300' : 'divide-slate-200 text-slate-700'}`}>
                      {students.map((s, index) => (
                        <tr key={index} className={`transition-colors duration-200 ${darkMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}`}>
                          <td className="p-4 pl-6">
                            <div className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{s.name}</div>
                            <div className="text-[11px] font-mono text-slate-500">{s.id}</div>
                          </td>
                          <td className="p-4 font-mono text-slate-600">{s.nik}</td>
                          <td className="p-4 text-slate-600">{s.tempatLahir}, {s.tanggalLahir}</td>
                          <td className="p-4 text-slate-600">{s.noHp}</td>
                          <td className="p-4 font-semibold text-slate-700 dark:text-slate-300">{s.rayon}</td>
                          <td className="p-4 font-semibold text-amber-600">{s.ranting || 'Ranting Kosambi'}</td>
                          <td className="p-4"><span className="bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-lg font-semibold">{s.tingkatan}</span></td>
                          <td className="p-4 text-center">
                            <button onClick={() => { 
                              const filtered = students.filter((_, i) => i !== index);
                              setStudents(filtered); 
                              localStorage.setItem('psht_siswa_list', JSON.stringify(filtered));
                              addLog('Hapus Siswa', `Menghapus siswa ${s.name}`); 
                            }} className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-red-50 text-red-600 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" title="Hapus"><Trash2 size={15} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 4. DATA WARGA */}
          {activeMenu === 'Data Warga' && (
            <div className="animate-in fade-in duration-500">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div>
                  <h2 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Buku Induk Data Warga Pengesahan</h2>
                  <p className="text-xs text-slate-500 mt-1">Pengelolaan data warga tingkat pengesahan PSHT Ranting Kosambi dengan rayon dan ranting terpisah.</p>
                </div>

                <div className="flex items-center gap-2.5">
                  <button onClick={() => exportCSV('citizens')} className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                    <Download size={15} /> Unduh CSV
                  </button>
                  <button onClick={printDocument} className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                    <FileText size={15} /> Cetak PDF
                  </button>
                  <button onClick={() => { setModalType('addCitizen'); setFormData({ name: '', tingkatWarga: 'Warga Tingkat I', rayon: 'Rayon Kosambi Timur', ranting: 'Ranting Kosambi', tahunPengesahan: '2026', noHp: '' }); setIsModalOpen(true); }} className="bg-[#0a1b2a] hover:bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                    <Plus size={15} /> Tambah Warga Baru
                  </button>
                </div>
              </div>

              <div className={`${bgCard} rounded-2xl border shadow-xs overflow-hidden`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className={`border-b text-xs font-bold uppercase tracking-wider ${darkMode ? 'bg-slate-800/60 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                        <th className="p-4 pl-6">No. Induk Warga</th>
                        <th className="p-4">Nama Lengkap</th>
                        <th className="p-4">Tingkatan Warga</th>
                        <th className="p-4">Rayon</th>
                        <th className="p-4">Ranting</th>
                        <th className="p-4">Tahun Pengesahan</th>
                        <th className="p-4 text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y text-xs ${darkMode ? 'divide-slate-800 text-slate-300' : 'divide-slate-200 text-slate-700'}`}>
                      {citizens.map((c) => (
                        <tr key={c.id} className={`transition-colors duration-200 ${darkMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}`}>
                          <td className="p-4 pl-6 font-mono font-bold text-amber-600">{c.id}</td>
                          <td className={`p-4 font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{c.name}<div className="text-[11px] font-normal text-slate-500">HP: {c.noHp}</div></td>
                          <td className="p-4"><span className="bg-purple-50 text-purple-800 border border-purple-200 px-2.5 py-1 rounded-lg font-semibold">{c.tingkatWarga}</span></td>
                          <td className="p-4 font-semibold text-slate-700 dark:text-slate-300">{c.rayon}</td>
                          <td className="p-4 font-semibold text-amber-600">{c.ranting || 'Ranting Kosambi'}</td>
                          <td className="p-4 font-medium text-slate-600">{c.tahunPengesahan}</td>
                          <td className="p-4 text-center">
                            <button onClick={() => { 
                              const filtered = citizens.filter(x => x.id !== c.id);
                              setCitizens(filtered); 
                              localStorage.setItem('psht_cms_citizens', JSON.stringify(filtered));
                              addLog('Hapus Warga', `Menghapus warga ${c.name}`); 
                            }} className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-red-50 text-red-600 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" title="Hapus"><Trash2 size={15} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 5. STRUKTUR ORGANISASI */}
          {activeMenu === 'Struktur Organisasi' && (
            <div className="animate-in fade-in duration-500">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div>
                  <h2 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Bagan Struktur Kepengurusan Ranting</h2>
                  <p className="text-xs text-slate-500 mt-1">Daftar pengurus harian, penasehat, dan bidang kepelatihan Ranting Kosambi.</p>
                </div>
                <button onClick={() => { setModalType('addOrg'); setFormData({ nama: '', jabatan: 'Pelatih', kategori: 'Bidang Kepelatihan', kontak: '-' }); setIsModalOpen(true); }} className="bg-[#0a1b2a] hover:bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                  <Plus size={15} /> Tambah Pengurus
                </button>
              </div>

              <div className={`${bgCard} rounded-2xl border shadow-xs overflow-hidden`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className={`border-b text-xs font-bold uppercase tracking-wider ${darkMode ? 'bg-slate-800/60 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                        <th className="p-4 pl-6">Nama Pengurus</th>
                        <th className="p-4">Jabatan</th>
                        <th className="p-4">Kategori Bidang</th>
                        <th className="p-4">Kontak</th>
                        <th className="p-4 text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y text-xs ${darkMode ? 'divide-slate-800 text-slate-300' : 'divide-slate-200 text-slate-700'}`}>
                      {orgStructure.map((o) => (
                        <tr key={o.id} className={`transition-colors duration-200 ${darkMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}`}>
                          <td className={`p-4 pl-6 font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{o.nama}</td>
                          <td className="p-4 font-semibold text-[#c2410c]">{o.jabatan}</td>
                          <td className="p-4"><span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-lg font-semibold">{o.kategori}</span></td>
                          <td className="p-4 font-mono text-slate-600">{o.kontak}</td>
                          <td className="p-4 text-center">
                            <button onClick={() => {
                              const filtered = orgStructure.filter(x => x.id !== o.id);
                              setOrgStructure(filtered);
                              addLog('Hapus Pengurus', `Menghapus pengurus ${o.nama}`);
                            }} className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-red-50 text-red-600 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" title="Hapus"><Trash2 size={15} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 6. JADWAL & KEGIATAN */}
          {activeMenu === 'Jadwal & Kegiatan' && (
            <div className="animate-in fade-in duration-500">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div>
                  <h2 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Jadwal Latihan & Agenda Kegiatan</h2>
                  <p className="text-xs text-slate-500 mt-1">Pengelolaan jadwal rutin latihan fisik dan teknik pencak silat.</p>
                </div>
                <button onClick={() => { setModalType('addSchedule'); setFormData({ judul: '', hari: '', waktu: '', lokasi: '', pembina: '' }); setIsModalOpen(true); }} className="bg-[#0a1b2a] hover:bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                  <Plus size={15} /> Tambah Jadwal
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {schedules.map((sc) => (
                  <div key={sc.id} className={`${bgCard} rounded-2xl border shadow-xs p-6 flex flex-col justify-between transform hover:-translate-y-1 hover:shadow-xl hover:border-2 hover:border-[#c2410c] transition-all duration-300`}>
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="bg-amber-100 text-amber-800 text-[11px] font-bold px-3 py-1 rounded-lg">{sc.hari}</span>
                        <div className="flex items-center gap-1.5">
                          <button onClick={() => {
                            setModalType('editSchedule');
                            setEditId(sc.id);
                            setFormData({ judul: sc.judul, hari: sc.hari, waktu: sc.waktu, lokasi: sc.lokasi, pembina: sc.pembina });
                            setIsModalOpen(true);
                          }} className="text-slate-400 hover:text-blue-600 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer p-1" title="Edit Jadwal"><Edit size={16} /></button>
                          <button onClick={() => {
                            setSchedules(schedules.filter(x => x.id !== sc.id));
                            addLog('Hapus Jadwal', `Menghapus jadwal ${sc.judul}`);
                          }} className="text-slate-400 hover:text-red-600 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer p-1" title="Hapus Jadwal"><Trash2 size={16} /></button>
                        </div>
                      </div>
                      <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-2`}>{sc.judul}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-1 flex items-center gap-1.5"><Calendar size={13} className="text-[#c2410c]" /> {sc.waktu}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">📍 {sc.lokasi}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 font-semibold">
                      Pembina / Pelatih: <span className="text-slate-800 dark:text-slate-200">{sc.pembina}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. LOG AUDIT AKTIVITAS */}
          {activeMenu === 'Log Audit Aktivitas' && (
            <div className={`${bgCard} rounded-2xl border shadow-xs overflow-hidden animate-in fade-in duration-500`}>
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <div>
                  <h2 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Log Audit Aktivitas Sistem</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Rekam jejak digital seluruh tindakan administratif yang dilakukan di CMS.</p>
                </div>
                <button onClick={() => { setAuditLogs([]); addLog('Reset Log', 'Membersihkan riwayat log audit'); }} className="text-xs bg-red-50 text-red-600 border border-red-200 px-3.5 py-2 rounded-xl font-semibold hover:bg-red-100 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                  Bersihkan Log
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className={`border-b text-xs font-bold uppercase tracking-wider ${darkMode ? 'bg-slate-800/60 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                      <th className="p-4 pl-6">Waktu</th>
                      <th className="p-4">Aktor / Admin</th>
                      <th className="p-4">Aksi / Tindakan</th>
                      <th className="p-4">Detail Keterangan</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y text-xs ${darkMode ? 'divide-slate-800 text-slate-300' : 'divide-slate-200 text-slate-700'}`}>
                    {auditLogs.map((log) => (
                      <tr key={log.id} className={`transition-colors duration-200 ${darkMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}`}>
                        <td className="p-4 pl-6 font-mono text-slate-500">{log.waktu}</td>
                        <td className={`p-4 font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{log.aktor}</td>
                        <td className="p-4"><span className="bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-lg">{log.aksi}</span></td>
                        <td className="p-4 text-slate-700 dark:text-slate-300">{log.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 8. PENGATURAN WEB */}
          {activeMenu === 'Pengaturan Web' && (
            <div className="max-w-2xl mx-auto animate-in fade-in duration-500">
              <div className={`${bgCard} rounded-2xl border shadow-xs p-8`}>
                <h2 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-1`}>Pengaturan Website & Organisasi</h2>
                <p className="text-xs text-slate-500 mb-6">Ubah identitas ranting dan status pendaftaran online.</p>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  addLog('Update Pengaturan', 'Memperbarui informasi konfigurasi web');
                  alert('Pengaturan web berhasil disimpan!');
                }} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1 font-bold">Nama Organisasi / Ranting</label>
                    <input type="text" value={webSettings.namaRanting} onChange={(e) => setWebSettings({ ...webSettings, namaRanting: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none transition-all duration-300 ${inputStyle}`} required />
                  </div>
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1 font-bold">Wilayah Cabang</label>
                    <input type="text" value={webSettings.cabang} onChange={(e) => setWebSettings({ ...webSettings, cabang: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none transition-all duration-300 ${inputStyle}`} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 mb-1 font-bold">Email Kontak Resmi</label>
                      <input type="email" value={webSettings.emailKontak} onChange={(e) => setWebSettings({ ...webSettings, emailKontak: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none transition-all duration-300 ${inputStyle}`} required />
                    </div>
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 mb-1 font-bold">Nomor Telepon Sekretariat</label>
                      <input type="text" value={webSettings.telepon} onChange={(e) => setWebSettings({ ...webSettings, telepon: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none transition-all duration-300 ${inputStyle}`} />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <input type="checkbox" id="regStatus" checked={webSettings.pendaftaranBuka} onChange={(e) => setWebSettings({ ...webSettings, pendaftaranBuka: e.target.checked })} className="w-4 h-4 accent-[#c2410c] cursor-pointer" />
                    <label htmlFor="regStatus" className="cursor-pointer text-slate-800 dark:text-slate-200 font-bold">Buka Formulir Pendaftaran Anggota Baru secara Online</label>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="bg-[#0a1b2a] hover:bg-slate-900 text-white font-bold px-5 py-3 rounded-xl cursor-pointer shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300">
                      Simpan Pengaturan Web
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* MODAL DIALOG */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className={`${bgCard} rounded-2xl border shadow-2xl w-full max-w-lg p-6 relative animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto`}>
            <div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
              <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {modalType === 'addUser' && 'Tambah Pengguna Sistem Baru'}
                {modalType === 'addStudent' && 'Pendaftaran Siswa Baru'}
                {modalType === 'addCitizen' && 'Tambah Data Warga Pengesahan'}
                {modalType === 'addOrg' && 'Tambah Data Kepengurusan'}
                {modalType === 'addSchedule' && 'Tambah Jadwal & Kegiatan'}
                {modalType === 'editSchedule' && 'Edit Jadwal & Kegiatan'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-700 transition-transform duration-200 hover:rotate-90 cursor-pointer"><X size={20} /></button>
            </div>

            {/* FORM TAMBAH USER / REGISTER */}
            {modalType === 'addUser' && (
              <form onSubmit={(e) => {
                e.preventDefault();
                if (formData.password !== formData.confirmPassword) {
                  alert('Password dan Konfirmasi Password tidak cocok!');
                  return;
                }
                const newUser = { 
                  id: Date.now(), 
                  name: formData.name, 
                  email: formData.email, 
                  role: formData.role || 'Admin Ranting', 
                  jabatan: 'Pelatih', 
                  status: 'Aktif', 
                  lastLogin: 'Belum pernah login' 
                };
                setUsers([...users, newUser]);
                addLog('Tambah Pengguna', `Menambahkan user baru: ${newUser.name} (${newUser.email})`);
                setIsModalOpen(false);
                setFormData({});
              }} className="space-y-4 text-xs font-semibold">
                <div>
                  <label className={labelStyle}>Nama Lengkap</label>
                  <input type="text" value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} placeholder="Masukkan nama lengkap" required />
                </div>
                <div>
                  <label className={labelStyle}>Email</label>
                  <input type="email" value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} placeholder="alamat.email@psht.org" required />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>Kata Sandi (Password)</label>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        value={formData.password || ''} 
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                        className={`w-full p-3 pr-10 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} 
                        placeholder="••••••••" 
                        required 
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)} 
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className={labelStyle}>Konfirmasi Kata Sandi</label>
                    <div className="relative">
                      <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        value={formData.confirmPassword || ''} 
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} 
                        className={`w-full p-3 pr-10 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} 
                        placeholder="••••••••" 
                        required 
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                      >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>Peran (Role)</label>
                    <select value={formData.role || 'Admin Ranting'} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`}>
                      <option value="Super Admin">Super Admin</option>
                      <option value="Admin Ranting">Admin Ranting</option>
                      <option value="Editor">Editor</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelStyle}>Jabatan</label>
                    <input type="text" value="Pelatih" readOnly className={`w-full p-3 rounded-xl text-sm font-semibold select-none ${darkMode ? 'bg-slate-900 text-slate-300 border border-slate-700' : 'bg-slate-50 text-slate-700 border border-slate-300'}`} />
                  </div>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer">Batal</button>
                  <button type="submit" className="bg-[#c2410c] hover:bg-orange-700 text-white font-bold px-5 py-2.5 rounded-xl cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all duration-300">Simpan User</button>
                </div>
              </form>
            )}

            {/* FORM TAMBAH SISWA (DENGAN RAYON & RANTING TERPISAH) */}
            {modalType === 'addStudent' && (
              <form onSubmit={(e) => {
                e.preventDefault();
                const nextNum = String(students.length + 1).padStart(3, '0');
                const newStudent = {
                  id: `SISWA-2026-${nextNum}`,
                  name: formData.name,
                  nik: formData.nik || '-',
                  tempatLahir: formData.tempatLahir || '-',
                  tanggalLahir: formData.tanggalLahir || '-',
                  noHp: formData.noHp || '-',
                  tinggiBadan: formData.tinggiBadan || '-',
                  beratBadan: formData.beratBadan || '-',
                  rayon: formData.rayon || 'Rayon Salembaran',
                  ranting: formData.ranting || 'Ranting Kosambi',
                  alamat: formData.alamat || '-',
                  tingkatan: formData.tingkatan || 'Siswa Polos',
                  status: 'Aktif',
                  tglDaftar: new Date().toISOString().split('T')[0]
                };
                const updated = [newStudent, ...students];
                setStudents(updated);
                localStorage.setItem('psht_siswa_list', JSON.stringify(updated));
                addLog('Tambah Siswa', `Mendaftarkan siswa ${newStudent.name}`);
                setIsModalOpen(false);
                setFormData({});
              }} className="space-y-4 text-xs font-semibold">
                <div>
                  <label className={labelStyle}>Nama Lengkap Siswa</label>
                  <input type="text" value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} placeholder="Masukkan nama lengkap siswa" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>NIK</label>
                    <input type="text" value={formData.nik || ''} onChange={(e) => setFormData({ ...formData, nik: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} placeholder="3603xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label className={labelStyle}>No. WhatsApp</label>
                    <input type="text" value={formData.noHp || ''} onChange={(e) => setFormData({ ...formData, noHp: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} placeholder="08xxxxxxxxxx" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>Tempat Lahir</label>
                    <input type="text" value={formData.tempatLahir || ''} onChange={(e) => setFormData({ ...formData, tempatLahir: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} placeholder="Contoh: Tangerang" required />
                  </div>
                  <div>
                    <label className={labelStyle}>Tanggal Lahir</label>
                    <input type="date" value={formData.tanggalLahir || ''} onChange={(e) => setFormData({ ...formData, tanggalLahir: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} required />
                  </div>
                </div>

                {/* RAYON DAN RANTING DIPISAH */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>Rayon</label>
                    <input type="text" value={formData.rayon || ''} onChange={(e) => setFormData({ ...formData, rayon: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} placeholder="Rayon Salembaran" required />
                  </div>
                  <div>
                    <label className={labelStyle}>Ranting</label>
                    <input type="text" value={formData.ranting || ''} onChange={(e) => setFormData({ ...formData, ranting: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} placeholder="Ranting Kosambi" required />
                  </div>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer">Batal</button>
                  <button type="submit" className="bg-[#c2410c] hover:bg-orange-700 text-white font-bold px-5 py-2.5 rounded-xl cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all duration-300">Simpan Siswa</button>
                </div>
              </form>
            )}

            {/* FORM TAMBAH WARGA (DENGAN RAYON & RANTING DIPISAH) */}
            {modalType === 'addCitizen' && (
              <form onSubmit={(e) => {
                e.preventDefault();
                const nextNum = String(citizens.length + 1).padStart(3, '0');
                const newCitizen = {
                  id: `20276${nextNum}`,
                  name: formData.name,
                  tingkatWarga: formData.tingkatWarga || 'Warga Tingkat I',
                  rayon: formData.rayon || 'Rayon Kosambi Timur',
                  ranting: formData.ranting || 'Ranting Kosambi',
                  tahunPengesahan: formData.tahunPengesahan || '2026',
                  noHp: formData.noHp || '-'
                };
                const updated = [...citizens, newCitizen];
                setCitizens(updated);
                localStorage.setItem('psht_cms_citizens', JSON.stringify(updated));
                addLog('Tambah Warga', `Mendaftarkan warga ${newCitizen.name}`);
                setIsModalOpen(false);
                setFormData({});
              }} className="space-y-4 text-xs font-semibold">
                <div>
                  <label className={labelStyle}>Nama Lengkap Warga</label>
                  <input type="text" value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>Tingkatan Warga</label>
                    <select value={formData.tingkatWarga || 'Warga Tingkat I'} onChange={(e) => setFormData({ ...formData, tingkatWarga: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`}>
                      <option value="Warga Tingkat I">Warga Tingkat I</option>
                      <option value="Warga Tingkat II">Warga Tingkat II</option>
                      <option value="Warga Tingkat III">Warga Tingkat III</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelStyle}>Tahun Pengesahan</label>
                    <input type="text" value={formData.tahunPengesahan || ''} onChange={(e) => setFormData({ ...formData, tahunPengesahan: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} />
                  </div>
                </div>

                {/* RAYON DAN RANTING DIPISAH */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>Rayon</label>
                    <input type="text" value={formData.rayon || ''} onChange={(e) => setFormData({ ...formData, rayon: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} placeholder="Rayon Kosambi Timur" required />
                  </div>
                  <div>
                    <label className={labelStyle}>Ranting</label>
                    <input type="text" value={formData.ranting || ''} onChange={(e) => setFormData({ ...formData, ranting: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} placeholder="Ranting Kosambi" required />
                  </div>
                </div>

                <div>
                  <label className={labelStyle}>No. HP / WhatsApp</label>
                  <input type="text" value={formData.noHp || ''} onChange={(e) => setFormData({ ...formData, noHp: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} />
                </div>
                <div className="pt-4 flex justify-end gap-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer">Batal</button>
                  <button type="submit" className="bg-[#c2410c] hover:bg-orange-700 text-white font-bold px-5 py-2.5 rounded-xl cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all duration-300">Simpan Warga</button>
                </div>
              </form>
            )}

            {/* FORM TAMBAH PENGURUS */}
            {modalType === 'addOrg' && (
              <form onSubmit={(e) => {
                e.preventDefault();
                const newOrg = {
                  id: Date.now(),
                  nama: formData.nama,
                  jabatan: formData.jabatan || 'Pelatih',
                  kategori: formData.kategori || 'Bidang Kepelatihan',
                  kontak: formData.kontak || '-'
                };
                setOrgStructure([...orgStructure, newOrg]);
                addLog('Tambah Struktur', `Menambahkan pengurus ${newOrg.nama}`);
                setIsModalOpen(false);
                setFormData({});
              }} className="space-y-4 text-xs font-semibold">
                <div>
                  <label className={labelStyle}>Nama Lengkap</label>
                  <input type="text" value={formData.nama || ''} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>Jabatan</label>
                    <input type="text" value={formData.jabatan || ''} onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} required />
                  </div>
                  <div>
                    <label className={labelStyle}>Kategori Bidang</label>
                    <input type="text" value={formData.kategori || ''} onChange={(e) => setFormData({ ...formData, kategori: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} placeholder="Bidang Kepelatihan" required />
                  </div>
                </div>
                <div className="pt-4 flex justify-end gap-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer">Batal</button>
                  <button type="submit" className="bg-[#c2410c] hover:bg-orange-700 text-white font-bold px-5 py-2.5 rounded-xl cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all duration-300">Simpan Pengurus</button>
                </div>
              </form>
            )}

            {/* FORM TAMBAH JADWAL */}
            {modalType === 'addSchedule' && (
              <form onSubmit={(e) => {
                e.preventDefault();
                const newSch = { id: Date.now(), ...formData };
                setSchedules([...schedules, newSch]);
                addLog('Tambah Jadwal', `Menambahkan kegiatan ${newSch.judul}`);
                setIsModalOpen(false);
                setFormData({});
              }} className="space-y-4 text-xs font-semibold">
                <div>
                  <label className={labelStyle}>Judul Kegiatan / Latihan</label>
                  <input type="text" value={formData.judul || ''} onChange={(e) => setFormData({ ...formData, judul: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>Hari</label>
                    <input type="text" value={formData.hari || ''} onChange={(e) => setFormData({ ...formData, hari: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} placeholder="Rabu & Sabtu" required />
                  </div>
                  <div>
                    <label className={labelStyle}>Waktu</label>
                    <input type="text" value={formData.waktu || ''} onChange={(e) => setFormData({ ...formData, waktu: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} placeholder="20.00 s/d 23.30" required />
                  </div>
                </div>
                <div>
                  <label className={labelStyle}>Lokasi</label>
                  <input type="text" value={formData.lokasi || ''} onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} required />
                </div>
                <div>
                  <label className={labelStyle}>Pembina / Pelatih</label>
                  <input type="text" value={formData.pembina || ''} onChange={(e) => setFormData({ ...formData, pembina: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} required />
                </div>
                <div className="pt-4 flex justify-end gap-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer">Batal</button>
                  <button type="submit" className="bg-[#c2410c] hover:bg-orange-700 text-white font-bold px-5 py-2.5 rounded-xl cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all duration-300">Simpan Jadwal</button>
                </div>
              </form>
            )}

            {/* FORM EDIT JADWAL */}
            {modalType === 'editSchedule' && (
              <form onSubmit={(e) => {
                e.preventDefault();
                const updatedSchedules = schedules.map(sc => sc.id === editId ? { ...sc, ...formData } : sc);
                setSchedules(updatedSchedules);
                addLog('Edit Jadwal', `Memperbarui jadwal ${formData.judul}`);
                setIsModalOpen(false);
                setFormData({});
                setEditId(null);
              }} className="space-y-4 text-xs font-semibold">
                <div>
                  <label className={labelStyle}>Judul Kegiatan / Latihan</label>
                  <input type="text" value={formData.judul || ''} onChange={(e) => setFormData({ ...formData, judul: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>Hari</label>
                    <input type="text" value={formData.hari || ''} onChange={(e) => setFormData({ ...formData, hari: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} required />
                  </div>
                  <div>
                    <label className={labelStyle}>Waktu</label>
                    <input type="text" value={formData.waktu || ''} onChange={(e) => setFormData({ ...formData, waktu: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} required />
                  </div>
                </div>
                <div>
                  <label className={labelStyle}>Lokasi</label>
                  <input type="text" value={formData.lokasi || ''} onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} required />
                </div>
                <div>
                  <label className={labelStyle}>Pembina / Pelatih</label>
                  <input type="text" value={formData.pembina || ''} onChange={(e) => setFormData({ ...formData, pembina: e.target.value })} className={`w-full p-3 rounded-xl text-sm font-normal focus:outline-none ${inputStyle}`} required />
                </div>
                <div className="pt-4 flex justify-end gap-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer">Batal</button>
                  <button type="submit" className="bg-[#c2410c] hover:bg-orange-700 text-white font-bold px-5 py-2.5 rounded-xl cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all duration-300">Simpan Perubahan</button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}