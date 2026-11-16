import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Lock, Mail, User, Eye, EyeOff, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function RegisterCMS() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    
    // 1. Validasi kecocokan password
    if (formData.password !== formData.confirmPassword) {
      setError('Kata sandi dan konfirmasi kata sandi tidak cocok!');
      return;
    }

    // 2. Validasi panjang minimal password
    if (formData.password.length < 6) {
      setError('Kata sandi minimal harus 6 karakter.');
      return;
    }

    // 3. Validasi wajib mengandung Huruf, Angka, dan Simbol
    const hasLetter = /[a-zA-Z]/.test(formData.password);
    const hasNumber = /[0-9]/.test(formData.password);
    const hasSymbol = /[^a-zA-Z0-9]/.test(formData.password);

    if (!hasLetter || !hasNumber || !hasSymbol) {
      setError('Kata sandi harus mengandung kombinasi huruf, angka, dan simbol (contoh: fajar@1922)!');
      return;
    }

    // Ambil data users yang sudah ada di localStorage atau buat baru
    const existingUsers = JSON.parse(localStorage.getItem('psht_cms_users')) || [];
    
    // Cek apakah email sudah terdaftar
    const isEmailExist = existingUsers.some(u => u.email.toLowerCase() === formData.email.toLowerCase());
    if (isEmailExist) {
      setError('Email tersebut sudah terdaftar di sistem!');
      return;
    }

    // Buat data admin/user baru
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password, // Simpan password (untuk kebutuhan CMS lokal)
      role: 'Admin Ranting',
      jabatan: 'Pelatih / Pengurus',
      status: 'Aktif',
      lastLogin: 'Belum pernah login'
    };

    // Simpan kembali ke localStorage
    existingUsers.push(newUser);
    localStorage.setItem('psht_cms_users', JSON.stringify(existingUsers));

    setSuccess(true);
    setError('');

    // Arahkan ke halaman login setelah 2 detik
    setTimeout(() => {
      navigate('/admin/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a1b2a] flex flex-col justify-center items-center p-4 font-sans antialiased text-slate-100">
      
      {/* Tombol Kembali ke Halaman Login */}
      <div className="absolute top-6 left-6">
        <button 
          onClick={() => navigate('/admin/login')} 
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800 transition-all cursor-pointer"
        >
          <ArrowLeft size={15} className="text-[#c2410c]" />
          <span>Kembali ke Login</span>
        </button>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
        
        {/* Aksen Gradien Atas */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0a1b2a] via-[#c2410c] to-amber-500"></div>

        <div className="text-center mb-6 mt-2">
          <div className="w-16 h-16 bg-[#c2410c] text-white rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-orange-950/50 mb-3">
            <Shield size={32} />
          </div>
          <h1 className="text-xl font-black tracking-wide text-white">PENDAFTARAN ADMIN CMS</h1>
          <p className="text-xs text-slate-400 mt-1">PSHT Ranting Kosambi — Cabang Kota Tangerang</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-xl text-center font-medium leading-relaxed">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-xl text-center font-medium flex items-center justify-center gap-2">
            <CheckCircle2 size={16} /> Akun berhasil didaftarkan! Mengalihkan ke halaman login...
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4 text-xs font-semibold">
          <div>
            <label className="block text-slate-300 mb-1.5 font-bold">Nama Lengkap & Gelar</label>
            <div className="relative">
              <input 
                type="text" 
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                className="w-full p-3.5 pl-10 rounded-xl text-sm bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-[#c2410c] transition-all" 
                placeholder="Fajar Alfalich"
                required 
              />
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 mb-1.5 font-bold">Email Resmi Organisasi</label>
            <div className="relative">
              <input 
                type="email" 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                className="w-full p-3.5 pl-10 rounded-xl text-sm bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-[#c2410c] transition-all" 
                placeholder="nama@psht.org"
                required 
              />
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 mb-1.5 font-bold">Kata Sandi (Password)</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                value={formData.password} 
                onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                className="w-full p-3.5 pl-10 pr-10 rounded-xl text-sm bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-[#c2410c] transition-all" 
                placeholder="fajar@1922" 
                required 
              />
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">Harus mengandung huruf, angka, dan simbol (contoh: @, !, #, dll).</p>
          </div>

          <div>
            <label className="block text-slate-300 mb-1.5 font-bold">Konfirmasi Kata Sandi</label>
            <div className="relative">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                value={formData.confirmPassword} 
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} 
                className="w-full p-3.5 pl-10 pr-10 rounded-xl text-sm bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-[#c2410c] transition-all" 
                placeholder="fajar@1922" 
                required 
              />
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <button 
                type="button" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full bg-[#c2410c] hover:bg-orange-700 text-white font-bold p-3.5 rounded-xl cursor-pointer shadow-lg shadow-orange-950/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <CheckCircle2 size={18} /> Daftar Akun Admin
            </button>
          </div>
        </form>

        <div className="mt-6 text-center border-t border-slate-800 pt-4 text-xs text-slate-400">
          Sudah punya akun?{' '}
          <Link to="/admin/login" className="text-amber-400 font-bold hover:underline">
            Masuk di sini
          </Link>
        </div>

      </div>
    </div>
  );
}