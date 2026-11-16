import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Shield, 
  FileText, 
  Moon, 
  Sun,
  Bell, 
  Search, 
  Plus, 
  Eye, 
  Edit, 
  Key, 
  Trash2, 
  Calendar,
  X,
  Settings,
  Activity,
  Download,
  User,
  GraduationCap,
  Award,
  Menu,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function PenggunaCMS() {
  const [activeMenu, setActiveMenu] = useState('Manajemen Pengguna');
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

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
        lastLogin: '11 Nov 2026, 15:10',
        isMain: true
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
      noHp: '0812-3456-7890',
      bio: 'Administrator Utama Website Resmi PSHT Ranting Kosambi.'
    };
  });

  // 3. DATA SISWA
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('psht_siswa_list');
    return saved ? JSON.parse(saved) : [
      { 
        name: 'Fajaralfalich', 
        nik: '3603142907030006', 
        noHp: '089653139161', 
        tinggiBadan: '172', 
        beratBadan: '62', 
        rayon: 'Rayon Jatimulya', 
        alamat: 'Jl. Raya Kosambi No. 12', 
        tingkatan: 'Siswa Polos', 
        status: 'Aktif', 
        tglDaftar: '2026-11-12' 
      }
    ];
  });

  // 4. DATA WARGA
  const [citizens, setCitizens] = useState(() => {
    const saved = localStorage.getItem('psht_cms_citizens');
    return saved ? JSON.parse(saved) : [
      { id: 'WARGA-2026-001', name: 'Budi Santoso', tingkatWarga: 'Warga Tingkat I', rayon: 'Rayon Kosambi Timur', tahunPengesahan: '2023', noHp: '081311112222' }
    ];
  });

  // 5. JADWAL & KEGIATAN
  const [schedules, setSchedules] = useState(() => {
    const saved = localStorage.getItem('psht_cms_schedules');
    return saved ? JSON.parse(saved) : [
      { id: 1, judul: 'Latihan Rutin Mingguan', hari: 'Rabu & Sabtu', waktu: '19:30 - 22:00 WIB', lokasi: 'Lapangan Kecamatan Kosambi', pembina: 'Mas Fajar & Pelatih Ranting' }
    ];
  });

  // 6. LOG AUDIT AKTIVITAS
  const [auditLogs, setAuditLogs] = useState(() => {
    const saved = localStorage.getItem('psht_cms_logs');
    return saved ? JSON.parse(saved) : [
      { id: 1, waktu: '11 Nov 2026, 15:10', aktor: 'Fajar Alfalich', aksi: 'Login Sistem', detail: 'Berhasil masuk ke CMS Ranting Kosambi' }
    ];
  });

  // 7. PENGATURAN WEB
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
  useEffect(() => { localStorage.setItem('psht_cms_schedules', JSON.stringify(schedules)); }, [schedules]);
  useEffect(() => { localStorage.setItem('psht_cms_logs', JSON.stringify(auditLogs)); }, [auditLogs]);
  useEffect(() => { localStorage.setItem('psht_cms_settings', JSON.stringify(webSettings)); }, [webSettings]);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedStudents = localStorage.getItem('psht_siswa_list');
      if (updatedStudents) {
        setStudents(JSON.parse(updatedStudents));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addLog = (aksi, detail) => {
    const now = new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });
    setAuditLogs(prev => [{ id: Date.now(), waktu: now, aktor: adminProfile.name, aksi, detail }, ...prev]);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('Semua role');
  const [filterStatus, setFilterStatus] = useState('Semua status');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({});

  const handleOpenAdd = () => {
    setModalType('add');
    setFormData({ name: '', email: '', role: 'Admin Ranting', jabatan: '', status: 'Aktif' });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (user) => {
    setModalType('edit');
    setSelectedUser(user);
    setFormData({ name: user.name, email: user.email, role: user.role, jabatan: user.jabatan, status: user.status });
    setIsModalOpen(true);
  };

  const handleOpenView = (user) => {
    setModalType('view');
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleOpenPassword = (user) => {
    setModalType('password');
    setSelectedUser(user);
    setFormData({ password: '' });
    setIsModalOpen(true);
  };

  const handleDelete = (id, isMain) => {
    if (isMain) {
      alert('Akun Super Admin Utama tidak dapat dihapus!');
      return;
    }
    if (window.confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
      setUsers(users.filter(u => u.id !== id));
      addLog('Hapus Pengguna', `Menghapus ID ${id}`);
    }
  };

  const handleAddStudentSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: formData.name,
      nik: formData.nik || '-',
      noHp: formData.noHp || '-',
      tinggiBadan: formData.tinggiBadan || '-',
      beratBadan: formData.beratBadan || '-',
      rayon: formData.rayon || 'Rayon Salembaran Jaya',
      alamat: formData.alamat || '-',
      tingkatan: formData.tingkatan || 'Siswa Polos',
      status: formData.status || 'Aktif',
      tglDaftar: new Date().toISOString().split('T')[0]
    };
    const updated = [newStudent, ...students];
    setStudents(updated);
    localStorage.setItem('psht_siswa_list', JSON.stringify(updated));
    addLog('Tambah Siswa', `Mendaftarkan siswa ${newStudent.name}`);
    setIsModalOpen(false);
    setFormData({});
  };

  const handleAddCitizenSubmit = (e) => {
    e.preventDefault();
    const nextNum = String(citizens.length + 1).padStart(3, '0');
    const newCitizen = {
      id: `WARGA-2026-${nextNum}`,
      name: formData.name,
      tingkatWarga: formData.tingkatWarga || 'Warga Tingkat I',
      rayon: formData.rayon || 'Rayon Kosambi Timur',
      tahunPengesahan: formData.tahunPengesahan || '2026',
      noHp: formData.noHp || '-'
    };
    setCitizens([...citizens, newCitizen]);
    addLog('Tambah Warga', `Mendaftarkan warga ${newCitizen.name}`);
    setIsModalOpen(false);
    setFormData({});
  };

  const exportCSV = (type) => {
    if (type === 'students') {
      const headers = ['Nama Lengkap', 'NIK', 'No HP', 'Tinggi Badan', 'Berat Badan', 'Rayon', 'Alamat', 'Tingkatan', 'Status', 'Tanggal Daftar'];
      const rows = students.map(s => [`"${s.name}"`, `'${s.nik}`, `'${s.noHp}`, s.tinggiBadan, s.beratBadan, `"${s.rayon}"`, `"${s.alamat}"`, s.tingkatan, s.status, s.tglDaftar]);
      downloadCSV(headers, rows, 'Data_Siswa_PSHT');
    } else {
      const headers = ['No Induk', 'Nama Warga', 'Tingkatan Warga', 'Rayon', 'Tahun Pengesahan', 'No HP'];
      const rows = citizens.map(c => [c.id, `"${c.name}"`, c.tingkatWarga, `"${c.rayon}"`, c.tahunPengesahan, `'${c.noHp}`]);
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
    addLog('Cetak Dokumen', 'Mencetak laporan dokumen resmi');
    window.print();
  };

  const filteredUsers = users.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase()) || u.jabatan.toLowerCase().includes(searchTerm.toLowerCase());
    const matchRole = filterRole === 'Semua role' || u.role === filterRole;
    const matchStatus = filterStatus === 'Semua status' || u.status === filterStatus;
    return matchSearch && matchRole && matchStatus;
  });

  const bgMain = darkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#f8fafc] text-slate-800';
  const bgCard = darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200/80 shadow-xs';

  const menuItems = [
    { name: 'Profil Super Admin', icon: <User size={18} /> },
    { name: 'Manajemen Pengguna', icon: <Users size={18} /> },
    { name: 'Data Siswa', icon: <GraduationCap size={18} /> },
    { name: 'Data Warga', icon: <Award size={18} /> },
    { name: 'Jadwal & Kegiatan', icon: <Calendar size={18} /> },
    { name: 'Log Audit Aktivitas', icon: <Activity size={18} /> },
    { name: 'Pengaturan Web', icon: <Settings size={18} /> },
  ];

  return (
    <div className={`flex h-screen ${bgMain} font-sans antialiased overflow-hidden relative`}>
      
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white !important; color: black !important; }
        }
      `}</style>

      {/* SIDEBAR DESKTOP */}
      <aside className="w-64 bg-[#0a1b30] text-slate-300 hidden md:flex flex-col justify-between p-4 no-print flex-shrink-0 shadow-xl border-r border-slate-800/40">
        <div>
          <div className="p-3 mb-4 border-b border-slate-800">
            <h1 className="text-white font-bold text-sm tracking-wide flex items-center gap-2.5">
              <span className="bg-[#c2410c] p-2 rounded-xl text-white shadow-md">
                <Shield size={18} />
              </span>
              <span className="leading-tight">{webSettings.namaRanting}</span>
            </h1>
            <p className="text-[11px] text-amber-400 mt-2 font-semibold tracking-wider uppercase pl-1">{webSettings.cabang}</p>
          </div>
          <nav className="space-y-1.5">
            {menuItems.map((menu) => (
              <button 
                key={menu.name}
                onClick={() => setActiveMenu(menu.name)}
                className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${activeMenu === menu.name ? 'bg-[#c2410c] text-white shadow-md shadow-orange-900/20 translate-x-1' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'}`}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* SIDEBAR MOBILE OVERLAY */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex md:hidden animate-fade-in" onClick={() => setIsMobileSidebarOpen(false)}>
          <div className="w-72 bg-[#0a1b30] text-slate-300 h-full flex flex-col p-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-3 mb-3 border-b border-slate-800 flex justify-between items-center">
              <div>
                <h1 className="text-white font-bold text-sm flex items-center gap-2">
                  <span className="bg-[#c2410c] p-1.5 rounded-lg text-white">
                    <Shield size={16} />
                  </span>
                  {webSettings.namaRanting}
                </h1>
                <p className="text-[10px] text-amber-400 mt-1 font-semibold uppercase">{webSettings.cabang}</p>
              </div>
              <button onClick={() => setIsMobileSidebarOpen(false)} className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800">
                <X size={20} />
              </button>
            </div>
            <nav className="space-y-1.5 overflow-y-auto flex-1">
              {menuItems.map((menu) => (
                <button 
                  key={menu.name}
                  onClick={() => { setActiveMenu(menu.name); setIsMobileSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition cursor-pointer ${activeMenu === menu.name ? 'bg-[#c2410c] text-white shadow-md' : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'}`}
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* KONTEN UTAMA */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        
        {/* HEADER ATAS */}
        <header className={`h-16 md:h-20 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200/80'} border-b px-4 md:px-8 flex justify-between items-center no-print flex-shrink-0 gap-3 shadow-xs`}>
          <div className="flex items-center gap-3 overflow-hidden">
            <button onClick={() => setIsMobileSidebarOpen(true)} className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition flex-shrink-0 cursor-pointer">
              <Menu size={20} />
            </button>
            <div className="overflow-hidden">
              <h1 className={`text-base sm:text-lg md:text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} truncate tracking-tight`}>{activeMenu}</h1>
              <p className="hidden md:block text-xs text-slate-500 font-medium">Pusat kontrol dan pengelolaan data website resmi {webSettings.namaRanting}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition cursor-pointer">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition relative hidden sm:block cursor-pointer">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#c2410c] rounded-full ring-2 ring-white"></span>
            </button>
            
            <div className="flex items-center gap-3 pl-3 md:pl-4 border-l border-slate-200 dark:border-slate-800">
              <div className="text-right hidden sm:block">
                <p className={`text-xs md:text-sm font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{adminProfile.name}</p>
                <p className="text-[10px] text-[#c2410c] font-semibold">Super Admin</p>
              </div>
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#c2410c] text-white font-bold flex items-center justify-center text-xs md:text-sm shadow-md ring-2 ring-orange-200 flex-shrink-0">
                {adminProfile.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </header>

        {/* AREA KONTEN DINAMIS */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 w-full">
          
          {/* PROFIL SUPER ADMIN */}
          {activeMenu === 'Profil Super Admin' && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className={`${bgCard} rounded-2xl border p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 md:gap-6 text-center sm:text-left`}>
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[#0f2744] to-blue-900 text-white font-bold text-2xl md:text-3xl flex items-center justify-center shadow-lg flex-shrink-0 ring-4 ring-blue-50">
                  {adminProfile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="space-y-1">
                  <h2 className={`text-lg md:text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{adminProfile.name}</h2>
                  <p className="text-xs md:text-sm text-[#c2410c] font-bold">{adminProfile.role} — {adminProfile.rayon}</p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{adminProfile.bio}</p>
                </div>
              </div>
              <div className={`${bgCard} rounded-2xl border p-6 md:p-8`}>
                <h3 className={`text-sm md:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-5 flex items-center gap-2`}>
                  <Settings size={18} className="text-[#c2410c]" /> Pengaturan Profil & Akun
                </h3>
                
                <form onSubmit={(e) => {
                  e.preventDefault();
                  addLog('Update Profil', 'Memperbarui data profil super admin');
                  alert('Profil berhasil diperbarui!');
                }} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Nama Lengkap</label>
                    <input type="text" value={adminProfile.name} onChange={(e) => setAdminProfile({ ...adminProfile, name: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" required />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Email Resmi</label>
                    <input type="email" value={adminProfile.email} onChange={(e) => setAdminProfile({ ...adminProfile, email: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Nomor Induk Mahasiswa (NIM)</label>
                      <input type="text" value={adminProfile.nim} onChange={(e) => setAdminProfile({ ...adminProfile, nim: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Nomor WhatsApp</label>
                      <input type="text" value={adminProfile.noHp} onChange={(e) => setAdminProfile({ ...adminProfile, noHp: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Biografi Singkat</label>
                    <textarea rows={3} value={adminProfile.bio} onChange={(e) => setAdminProfile({ ...adminProfile, bio: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" />
                  </div>
                  <div className="pt-2">
                    <button type="submit" className="w-full sm:w-auto bg-[#0f2744] hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl cursor-pointer shadow-md transition flex items-center justify-center gap-2">
                      Simpan Perubahan Profil
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* MANAJEMEN PENGGUNA */}
          {activeMenu === 'Manajemen Pengguna' && (
            <>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 no-print">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Daftar Admin & Pengurus</h2>
                    <span className="bg-orange-100 text-[#c2410c] text-xs px-3 py-1 rounded-full font-bold">{users.length} akun</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Kelola hak akses pengurus ranting, pelatih, dan administrator website PSHT Ranting Kosambi.</p>
                </div>
                
                <button onClick={handleOpenAdd} className="w-full sm:w-auto bg-[#0f2744] hover:bg-blue-900 text-white text-xs md:text-sm font-semibold px-4.5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition cursor-pointer">
                  <Plus size={16} /> Tambah User Baru
                </button>
              </div>
              <div className={`${bgCard} rounded-2xl border p-5 md:p-6 shadow-xs`}>
                <div className="flex flex-wrap gap-3 mb-6 no-print">
                  <div className="relative flex-1 min-w-[240px]">
                    <Search className="absolute left-3.5 top-3 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Cari nama, email, jabatan, ..." 
                      className={`w-full pl-10 pr-4 py-2.5 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'} border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition`}
                    />
                  </div>
                  <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)} className={`px-4 py-2.5 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'} border rounded-xl text-sm font-medium`}>
                    <option>Semua role</option>
                    <option>Super Admin</option>
                    <option>Admin Ranting</option>
                    <option>Pelatih</option>
                  </select>
                  <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className={`px-4 py-2.5 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'} border rounded-xl text-sm font-medium`}>
                    <option>Semua status</option>
                    <option>Aktif</option>
                    <option>Non-Aktif</option>
                  </select>
                </div>
                <div className="overflow-x-auto border border-slate-100 dark:border-slate-800 rounded-xl">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className={`bg-slate-50/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider`}>
                        <th className="p-4">Nama / Email</th>
                        <th className="p-4">Peran / Role</th>
                        <th className="p-4">Rayon / Jabatan</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Login Terakhir</th>
                        <th className="p-4 text-center no-print">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                      {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                          <tr key={user.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition">
                            <td className="p-4">
                              <div className={`font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'} flex items-center gap-2`}>
                                {user.name}
                                {user.isMain && <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-bold">Utama</span>}
                              </div>
                              <div className="text-xs text-slate-500 mt-0.5">{user.email}</div>
                            </td>
                            <td className="p-4">
                              <span className={`text-xs px-3 py-1 rounded-lg font-semibold ${user.role === 'Super Admin' ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400'}`}>{user.role}</span>
                            </td>
                            <td className="p-4">
                              <div className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{user.jabatan}</div>
                            </td>
                            <td className="p-4">
                              <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-semibold ${user.status === 'Aktif' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Aktif' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span> {user.status}
                              </span>
                            </td>
                            <td className="p-4 text-xs text-slate-500 font-medium">{user.lastLogin}</td>
                            <td className="p-4 no-print">
                              <div className="flex items-center justify-center gap-2">
                                <button onClick={() => handleOpenView(user)} title="Lihat" className="p-2 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition cursor-pointer shadow-xs"><Eye size={16} /></button>
                                <button onClick={() => handleOpenEdit(user)} title="Edit" className="p-2 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 text-blue-600 dark:text-blue-400 transition cursor-pointer shadow-xs"><Edit size={16} /></button>
                                <button onClick={() => handleOpenPassword(user)} title="Ganti Sandi" className="p-2 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-950/50 text-amber-600 dark:text-amber-400 transition cursor-pointer shadow-xs"><Key size={16} /></button>
                                <button onClick={() => handleDelete(user.id, user.isMain)} title="Hapus" className="p-2 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 text-red-600 dark:text-red-400 transition cursor-pointer shadow-xs"><Trash2 size={16} /></button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr><td colSpan="6" className="p-8 text-center text-slate-400 text-xs">Tidak ada data pengguna ditemukan.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* DATA SISWA */}
          {activeMenu === 'Data Siswa' && (
            <>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 no-print">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Buku Induk Data Siswa PSHT</h2>
                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-bold">Total: {students.length} Siswa</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Pengelolaan khusus data siswa latihan berstatus aktif/proses pencak silat.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <button onClick={() => exportCSV('students')} className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition cursor-pointer">
                    <Download size={15} /> Unduh Excel
                  </button>
                  <button onClick={printDocument} className="flex-1 sm:flex-none bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition cursor-pointer">
                    <FileText size={15} /> Cetak PDF
                  </button>
                  <button onClick={() => { setModalType('addStudent'); setFormData({ name: '', nik: '', noHp: '', tinggiBadan: '', beratBadan: '', alamat: '', tingkatan: 'Siswa Polos', rayon: 'Rayon Salembaran Jaya' }); setIsModalOpen(true); }} className="w-full sm:w-auto bg-[#0f2744] hover:bg-blue-900 text-white text-xs font-semibold px-4.5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition cursor-pointer">
                    <Plus size={15} /> Tambah Siswa
                  </button>
                </div>
              </div>
              <div className={`${bgCard} rounded-2xl border p-5 md:p-6 shadow-xs`}>
                <div className="overflow-x-auto border border-slate-100 dark:border-slate-800 rounded-xl">
                  <table className="w-full text-left border-collapse min-w-[750px]">
                    <thead>
                      <tr className="bg-slate-50/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                        <th className="p-4">Nama Lengkap</th>
                        <th className="p-4">NIK</th>
                        <th className="p-4">No. WhatsApp</th>
                        <th className="p-4">Fisik (TB / BB)</th>
                        <th className="p-4">Alamat</th>
                        <th className="p-4">Tingkatan</th>
                        <th className="p-4">Rayon</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-center no-print">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                      {students.length > 0 ? (
                        students.map((s, index) => (
                          <tr key={index} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition">
                            <td className="p-4 font-bold text-slate-900 dark:text-white">{s.name}</td>
                            <td className="p-4 text-xs font-mono text-slate-600 dark:text-slate-400">{s.nik || '-'}</td>
                            <td className="p-4 text-xs text-slate-600 dark:text-slate-400">{s.noHp || '-'}</td>
                            <td className="p-4 text-xs text-slate-600 dark:text-slate-400">{s.tinggiBadan || '-'} cm / {s.beratBadan || '-'} kg</td>
                            <td className="p-4 text-xs text-slate-500 max-w-xs truncate" title={s.alamat}>{s.alamat || '-'}</td>
                            <td className="p-4"><span className="bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-400 text-xs px-3 py-1 rounded-lg font-semibold">{s.tingkatan || 'Siswa Polos'}</span></td>
                            <td className="p-4 font-semibold text-slate-700 dark:text-slate-300">{s.rayon}</td>
                            <td className="p-4"><span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 text-xs px-3 py-1 rounded-full font-semibold">● {s.status || 'Aktif'}</span></td>
                            <td className="p-4 text-center no-print">
                              <button onClick={() => { 
                                const filtered = students.filter((_, i) => i !== index);
                                setStudents(filtered); 
                                localStorage.setItem('psht_siswa_list', JSON.stringify(filtered));
                                addLog('Hapus Siswa', `Menghapus siswa ${s.name}`); 
                              }} className="p-2 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 text-red-600 dark:text-red-400 transition cursor-pointer shadow-xs" title="Hapus"><Trash2 size={16} /></button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr><td colSpan="9" className="p-8 text-center text-slate-400 text-xs">Belum ada data pendaftaran siswa baru.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* DATA WARGA */}
          {activeMenu === 'Data Warga' && (
            <>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 no-print">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Buku Induk Data Warga PSHT</h2>
                    <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-bold">Total: {citizens.length} Warga</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Pengelolaan khusus data warga (pendekar/pengesahan) PSHT Ranting Kosambi.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <button onClick={() => exportCSV('citizens')} className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition cursor-pointer">
                    <Download size={15} /> Unduh Excel
                  </button>
                  <button onClick={printDocument} className="flex-1 sm:flex-none bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition cursor-pointer">
                    <FileText size={15} /> Cetak PDF
                  </button>
                  <button onClick={() => { setModalType('addCitizen'); setFormData({ name: '', tingkatWarga: 'Warga Tingkat I', rayon: 'Rayon Kosambi Timur', tahunPengesahan: '2026', noHp: '' }); setIsModalOpen(true); }} className="w-full sm:w-auto bg-[#0f2744] hover:bg-blue-900 text-white text-xs font-semibold px-4.5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition cursor-pointer">
                    <Plus size={15} /> Tambah Warga
                  </button>
                </div>
              </div>
              <div className={`${bgCard} rounded-2xl border p-5 md:p-6 shadow-xs`}>
                <div className="overflow-x-auto border border-slate-100 dark:border-slate-800 rounded-xl">
                  <table className="w-full text-left border-collapse min-w-[650px]">
                    <thead>
                      <tr className="bg-slate-50/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                        <th className="p-4">No. Induk Warga</th>
                        <th className="p-4">Nama Lengkap</th>
                        <th className="p-4">Tingkatan Warga</th>
                        <th className="p-4">Rayon / Ranting</th>
                        <th className="p-4">Tahun Pengesahan</th>
                        <th className="p-4 text-center no-print">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                      {citizens.map((c) => (
                        <tr key={c.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition">
                          <td className="p-4 font-mono font-bold text-amber-600 dark:text-amber-400">{c.id}</td>
                          <td className="p-4 font-bold text-slate-900 dark:text-white">{c.name}<div className="text-xs font-normal text-slate-500">HP: {c.noHp}</div></td>
                          <td className="p-4"><span className="bg-purple-100 text-purple-800 dark:bg-purple-950/50 dark:text-purple-400 text-xs px-3 py-1 rounded-lg font-semibold">{c.tingkatWarga}</span></td>
                          <td className="p-4 font-semibold text-slate-700 dark:text-slate-300">{c.rayon}</td>
                          <td className="p-4 font-medium text-slate-600 dark:text-slate-400">{c.tahunPengesahan}</td>
                          <td className="p-4 text-center no-print">
                            <button onClick={() => { setCitizens(citizens.filter(x => x.id !== c.id)); addLog('Hapus Warga', `Menghapus warga ${c.name}`); }} className="p-2 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 text-red-600 dark:text-red-400 transition cursor-pointer shadow-xs" title="Hapus"><Trash2 size={16} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* JADWAL & KEGIATAN */}
          {activeMenu === 'Jadwal & Kegiatan' && (
            <>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 no-print">
                <div>
                  <h2 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Kelola Jadwal & Kegiatan</h2>
                  <p className="text-xs text-slate-500 mt-1">Atur jadwal latihan rutin dan agenda kegiatan PSHT Ranting Kosambi.</p>
                </div>
                <button onClick={() => { setModalType('addSchedule'); setFormData({ judul: '', hari: '', waktu: '', lokasi: '', pembina: '' }); setIsModalOpen(true); }} className="w-full sm:w-auto bg-[#0f2744] hover:bg-blue-900 text-white text-xs font-semibold px-4.5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition cursor-pointer">
                  <Plus size={16} /> Tambah Jadwal Baru
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {schedules.map((sch) => (
                  <div key={sch.id} className={`${bgCard} rounded-2xl border p-5 md:p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition`}>
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="bg-orange-100 text-[#c2410c] dark:bg-orange-950/50 dark:text-orange-400 text-xs font-bold px-3 py-1 rounded-xl">{sch.hari}</span>
                        <button onClick={() => { setSchedules(schedules.filter(x => x.id !== sch.id)); addLog('Hapus Jadwal', `Menghapus jadwal ${sch.judul}`); }} className="text-slate-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/50 transition cursor-pointer"><Trash2 size={16} /></button>
                      </div>
                      <h3 className={`text-sm md:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-2.5`}>{sch.judul}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-2">⏰ {sch.waktu}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-2">📍 {sch.lokasi}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">👨‍🏫 Pembina: {sch.pembina}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* LOG AUDIT AKTIVITAS */}
          {activeMenu === 'Log Audit Aktivitas' && (
            <div className={`${bgCard} rounded-2xl border p-5 md:p-6 shadow-xs`}>
              <h2 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-1`}>Log Audit Sistem</h2>
              <p className="text-xs text-slate-500 mb-6">Rekaman aktivitas penting yang dilakukan oleh admin dan pengurus dalam sistem CMS.</p>
              <div className="space-y-3">
                {auditLogs.map((log) => (
                  <div key={log.id} className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-slate-50/50 dark:bg-slate-800/30">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                        <span className="bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 font-bold px-2.5 py-1 rounded-lg">{log.aksi}</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">Oleh: {log.aktor}</span>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400">{log.detail}</p>
                    </div>
                    <div className="text-left sm:text-right text-slate-400 font-mono text-[11px]">{log.waktu}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PENGATURAN WEB */}
          {activeMenu === 'Pengaturan Web' && (
            <div className={`${bgCard} rounded-2xl border p-6 md:p-8 max-w-2xl mx-auto shadow-xs`}>
              <h2 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-1`}>Konfigurasi Web Ranting</h2>
              <p className="text-xs text-slate-500 mb-6">Ubah informasi utama dan status operasional website publik PSHT Ranting Kosambi.</p>
              <form onSubmit={(e) => {
                e.preventDefault();
                addLog('Pengaturan Web', 'Memperbarui konfigurasi utama website');
                alert('Pengaturan web berhasil disimpan!');
              }} className="space-y-4 text-xs font-semibold">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 mb-1.5">Nama Organisasi / Ranting</label>
                  <input type="text" value={webSettings.namaRanting} onChange={(e) => setWebSettings({ ...webSettings, namaRanting: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" required />
                </div>
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 mb-1.5">Wilayah Cabang</label>
                  <input type="text" value={webSettings.cabang} onChange={(e) => setWebSettings({ ...webSettings, cabang: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1.5">Email Kontak Resmi</label>
                    <input type="email" value={webSettings.emailKontak} onChange={(e) => setWebSettings({ ...webSettings, emailKontak: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" required />
                  </div>
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1.5">Nomor Telepon / WhatsApp</label>
                    <input type="text" value={webSettings.telepon} onChange={(e) => setWebSettings({ ...webSettings, telepon: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition" required />
                  </div>
                </div>
                <div className="pt-3">
                  <button type="submit" className="w-full sm:w-auto bg-[#0f2744] hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl cursor-pointer shadow-md transition">
                    Simpan Konfigurasi Web
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>

      {/* MODAL GLOBAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 overflow-y-auto animate-fade-in">
          <div className={`${bgCard} rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative border my-auto`}>
            <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"><X size={20} /></button>
            
            {modalType === 'add' && (
              <>
                <h3 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Tambah Pengguna Baru</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const newUser = { id: Date.now(), ...formData, lastLogin: 'Belum pernah login', isMain: false };
                  setUsers([...users, newUser]);
                  addLog('Tambah Pengguna', `Menambahkan user ${newUser.name}`);
                  setIsModalOpen(false);
                }} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Nama Lengkap</label>
                    <input type="text" required value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="Nama lengkap..." />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Email</label>
                    <input type="email" required value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="email@psht.org" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Role</label>
                      <select value={formData.role || 'Admin Ranting'} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal">
                        <option>Admin Ranting</option>
                        <option>Pelatih</option>
                        <option>Super Admin</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Status</label>
                      <select value={formData.status || 'Aktif'} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal">
                        <option>Aktif</option>
                        <option>Non-Aktif</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Jabatan / Rayon</label>
                    <input type="text" required value={formData.jabatan || ''} onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Contoh: Rayon Salembaran" />
                  </div>
                  <div className="flex justify-end gap-2.5 pt-3">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 font-semibold cursor-pointer">Batal</button>
                    <button type="submit" className="px-5 py-2.5 bg-[#0f2744] hover:bg-blue-900 text-white rounded-xl font-bold shadow-md cursor-pointer">Simpan User</button>
                  </div>
                </form>
              </>
            )}

            {modalType === 'edit' && selectedUser && (
              <>
                <h3 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Edit Pengguna: {selectedUser.name}</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const updatedUsers = users.map(u => u.id === selectedUser.id ? { ...u, ...formData } : u);
                  setUsers(updatedUsers);
                  addLog('Edit Pengguna', `Memperbarui data user ${formData.name}`);
                  alert('Data pengguna berhasil diperbarui!');
                  setIsModalOpen(false);
                }} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Nama Lengkap</label>
                    <input type="text" required value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Email</label>
                    <input type="email" required value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Role</label>
                      <select value={formData.role || 'Admin Ranting'} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal">
                        <option>Admin Ranting</option>
                        <option>Pelatih</option>
                        <option>Super Admin</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Status</label>
                      <select value={formData.status || 'Aktif'} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal">
                        <option>Aktif</option>
                        <option>Non-Aktif</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Jabatan / Rayon</label>
                    <input type="text" required value={formData.jabatan || ''} onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" />
                  </div>
                  <div className="flex justify-end gap-2.5 pt-3">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 font-semibold cursor-pointer">Batal</button>
                    <button type="submit" className="px-5 py-2.5 bg-[#0f2744] hover:bg-blue-900 text-white rounded-xl font-bold shadow-md cursor-pointer">Simpan Perubahan</button>
                  </div>
                </form>
              </>
            )}

            {modalType === 'password' && selectedUser && (
              <>
                <h3 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Ganti Kata Sandi: {selectedUser.name}</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  addLog('Ganti Sandi', `Mengubah kata sandi untuk user ${selectedUser.name}`);
                  alert('Kata sandi berhasil diperbarui!');
                  setIsModalOpen(false);
                }} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Kata Sandi Baru</label>
                    <input type="password" required value={formData.password || ''} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Masukkan sandi baru..." />
                  </div>
                  <div className="flex justify-end gap-2.5 pt-3">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 font-semibold cursor-pointer">Batal</button>
                    <button type="submit" className="px-5 py-2.5 bg-[#0f2744] hover:bg-blue-900 text-white rounded-xl font-bold shadow-md cursor-pointer">Simpan Sandi</button>
                  </div>
                </form>
              </>
            )}

            {modalType === 'addStudent' && (
              <>
                <h3 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Tambah Siswa Baru Manual</h3>
                <form onSubmit={handleAddStudentSubmit} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Nama Lengkap Siswa</label>
                    <input type="text" required value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Nama siswa..." />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">NIK (16 Digit)</label>
                      <input type="text" required value={formData.nik || ''} onChange={(e) => setFormData({ ...formData, nik: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Nomor NIK..." />
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Nomor WhatsApp</label>
                      <input type="text" required value={formData.noHp || ''} onChange={(e) => setFormData({ ...formData, noHp: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="08xxxxxxxxxx" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Tinggi Badan (cm)</label>
                      <input type="text" required value={formData.tinggiBadan || ''} onChange={(e) => setFormData({ ...formData, tinggiBadan: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Contoh: 170" />
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Berat Badan (kg)</label>
                      <input type="text" required value={formData.beratBadan || ''} onChange={(e) => setFormData({ ...formData, beratBadan: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Contoh: 60" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Tingkatan Sabuk</label>
                      <select value={formData.tingkatan || 'Siswa Polos'} onChange={(e) => setFormData({ ...formData, tingkatan: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal">
                        <option>Siswa Polos</option>
                        <option>Sabuk Jambon</option>
                        <option>Sabuk Hijau</option>
                        <option>Sabuk Putih Kecil</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Rayon Latihan</label>
                      <input type="text" required value={formData.rayon || ''} onChange={(e) => setFormData({ ...formData, rayon: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Rayon..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Alamat Domisili</label>
                    <input type="text" required value={formData.alamat || ''} onChange={(e) => setFormData({ ...formData, alamat: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Alamat lengkap..." />
                  </div>
                  <div className="flex justify-end gap-2.5 pt-3">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 font-semibold cursor-pointer">Batal</button>
                    <button type="submit" className="px-5 py-2.5 bg-[#0f2744] hover:bg-blue-900 text-white rounded-xl font-bold shadow-md cursor-pointer">Simpan Siswa</button>
                  </div>
                </form>
              </>
            )}

            {modalType === 'addCitizen' && (
              <>
                <h3 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Tambah Warga Pengesahan</h3>
                <form onSubmit={handleAddCitizenSubmit} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Nama Lengkap Warga</label>
                    <input type="text" required value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Nama warga..." />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Tingkat Warga</label>
                      <select value={formData.tingkatWarga || 'Warga Tingkat I'} onChange={(e) => setFormData({ ...formData, tingkatWarga: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal">
                        <option>Warga Tingkat I</option>
                        <option>Warga Tingkat II</option>
                        <option>Warga Tingkat III</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Tahun Pengesahan</label>
                      <input type="text" required value={formData.tahunPengesahan || ''} onChange={(e) => setFormData({ ...formData, tahunPengesahan: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="2026" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Rayon / Ranting</label>
                    <input type="text" required value={formData.rayon || ''} onChange={(e) => setFormData({ ...formData, rayon: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Rayon..." />
                  </div>
                  <div className="flex justify-end gap-2.5 pt-3">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 font-semibold cursor-pointer">Batal</button>
                    <button type="submit" className="px-5 py-2.5 bg-[#0f2744] hover:bg-blue-900 text-white rounded-xl font-bold shadow-md cursor-pointer">Simpan Warga</button>
                  </div>
                </form>
              </>
            )}

            {modalType === 'addSchedule' && (
              <>
                <h3 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Tambah Jadwal & Kegiatan</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const newSch = { id: Date.now(), ...formData };
                  setSchedules([...schedules, newSch]);
                  addLog('Tambah Jadwal', `Menambahkan kegiatan ${newSch.judul}`);
                  setIsModalOpen(false);
                }} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Judul Kegiatan</label>
                    <input type="text" required value={formData.judul || ''} onChange={(e) => setFormData({ ...formData, judul: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Contoh: Latihan Gabungan" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Hari</label>
                      <input type="text" required value={formData.hari || ''} onChange={(e) => setFormData({ ...formData, hari: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Contoh: Sabtu" />
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Waktu</label>
                      <input type="text" required value={formData.waktu || ''} onChange={(e) => setFormData({ ...formData, waktu: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="19:30 - Selesai" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Lokasi</label>
                    <input type="text" required value={formData.lokasi || ''} onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Lokasi..." />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1.5">Pembina / Pelatih</label>
                    <input type="text" required value={formData.pembina || ''} onChange={(e) => setFormData({ ...formData, pembina: e.target.value })} className="w-full p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-normal" placeholder="Nama pembina..." />
                  </div>
                  <div className="flex justify-end gap-2.5 pt-3">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 font-semibold cursor-pointer">Batal</button>
                    <button type="submit" className="px-5 py-2.5 bg-[#0f2744] hover:bg-blue-900 text-white rounded-xl font-bold shadow-md cursor-pointer">Simpan Jadwal</button>
                  </div>
                </form>
              </>
            )}

            {modalType === 'view' && selectedUser && (
              <>
                <h3 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Detail Pengguna</h3>
                <div className="space-y-3 text-sm dark:text-slate-300">
                  <p><strong>Nama:</strong> {selectedUser.name}</p>
                  <p><strong>Email:</strong> {selectedUser.email}</p>
                  <p><strong>Role:</strong> {selectedUser.role}</p>
                  <p><strong>Jabatan / Rayon:</strong> {selectedUser.jabatan}</p>
                  <p><strong>Status:</strong> {selectedUser.status}</p>
                  <p><strong>Login Terakhir:</strong> {selectedUser.lastLogin}</p>
                </div>
                <div className="flex justify-end pt-4">
                  <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl font-bold cursor-pointer">Tutup</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}