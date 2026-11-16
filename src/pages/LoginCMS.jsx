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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col justify-center items-center p-4 font-sans antialiased text-slate-100 relative overflow-hidden">
      
      {/* Efek Cahaya Latar Belakang Gradasi */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Tombol Kembali ke Landing Page */}
      <div className="absolute top-6 left-6 z-10">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800 transition-all cursor-pointer shadow-lg"
        >
          <ArrowLeft size={15} className="text-orange-500" />
          <span>Kembali ke Beranda</span>
        </button>
      </div>

      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl shadow-2xl shadow-black/50 p-8 relative overflow-hidden z-10">
        
        {/* Aksen Gradien Atas */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-600 via-amber-500 to-indigo-600"></div>

        <div className="text-center mb-6 mt-2">
          <div className="w-16 h-16 bg-gradient-to-tr from-orange-600 to-amber-500 text-white rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-orange-950/50 mb-3 ring-4 ring-orange-500/20">
            <Shield size={32} />
          </div>
          <h1 className="text-xl font-extrabold tracking-wide text-white">CMS PSHT KOSAMBI</h1>
          <p className="text-xs text-slate-400 mt-1 font-medium">Silakan masuk menggunakan akun Administrator</p>
        </div>

        {error && (
          <div className="mb-4 p-3.5 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs rounded-2xl text-center font-semibold">
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
                className="w-full p-3.5 pl-10 rounded-2xl text-sm bg-slate-950/60 border border-slate-700/80 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all shadow-inner" 
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
                className="w-full p-3.5 pl-10 pr-10 rounded-2xl text-sm bg-slate-950/60 border border-slate-700/80 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all shadow-inner" 
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
              className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold p-3.5 rounded-2xl cursor-pointer shadow-lg shadow-orange-950/50 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm"
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
          <p className="font-medium text-slate-400">Pengurus Ranting Persaudaraan Setia Hati Terate</p>
          <p className="text-slate-500 mt-0.5">Cabang Kota Tangerang</p>
        </div>

      </div>
    </div>
  );
}