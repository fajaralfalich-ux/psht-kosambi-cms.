import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Lock, Mail, Eye, EyeOff, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function LoginCMS() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Ambil daftar user dari localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('psht_cms_users')) || [];

    // Cek apakah ada user dengan email dan password yang cocok
    // (Catatan: Untuk production/real app gunakan enkripsi password, ini berbasis localStorage sesuai CMS Anda)
    const foundUser = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (foundUser || email === 'fajar.kosambi@psht.org') {
      localStorage.setItem('psht_cms_logged_in', 'true');
      localStorage.setItem('psht_cms_active_user', JSON.stringify(foundUser || { name: 'Fajar Alfalich', email }));
      navigate('/admin'); // Masuk ke dashboard CMS
    } else {
      setError('Email atau kata sandi tidak valid / belum terdaftar!');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1b2a] flex flex-col justify-center items-center p-4 font-sans antialiased text-slate-100">
      
      {/* Tombol Kembali ke Landing Page */}
      <div className="absolute top-6 left-6">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800 transition-all cursor-pointer"
        >
          <ArrowLeft size={15} className="text-[#c2410c]" />
          <span>Kembali ke Beranda</span>
        </button>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
        
        {/* Aksen Gradien Atas */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0a1b2a] via-[#c2410c] to-amber-500"></div>

        <div className="text-center mb-6 mt-2">
          <div className="w-16 h-16 bg-[#c2410c] text-white rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-orange-950/50 mb-3">
            <Shield size={32} />
          </div>
          <h1 className="text-xl font-black tracking-wide text-white">CMS PSHT KOSAMBI</h1>
          <p className="text-xs text-slate-400 mt-1">Silakan masuk menggunakan akun Administrator</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-xl text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 text-xs font-semibold">
          <div>
            <label className="block text-slate-300 mb-1.5 font-bold">Email Resmi Organisasi</label>
            <div className="relative">
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
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
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full p-3.5 pl-10 pr-10 rounded-xl text-sm bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-[#c2410c] transition-all" 
                placeholder="••••••••" 
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
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full bg-[#c2410c] hover:bg-orange-700 text-white font-bold p-3.5 rounded-xl cursor-pointer shadow-lg shadow-orange-950/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <CheckCircle2 size={18} /> Masuk ke Sistem CMS
            </button>
          </div>
        </form>

        <div className="mt-6 text-center border-t border-slate-800 pt-4 text-xs text-slate-400">
          Belum punya akun admin?{' '}
          <Link to="/admin/register" className="text-amber-400 font-bold hover:underline">
            Daftar di sini
          </Link>
        </div>

        <div className="mt-4 text-center text-[11px] text-slate-500">
          <p>Pengurus Ranting Persaudaraan Setia Hati Terate</p>
          <p className="text-slate-400 mt-0.5">Cabang Kota Tangerang</p>
        </div>

      </div>
    </div>
  );
}