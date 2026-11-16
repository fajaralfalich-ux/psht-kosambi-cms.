import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Struktur from './pages/Struktur';
import Sejarah from './pages/Sejarah';
import Falsafah from './pages/Falsafah';
import KeShAn from './pages/KeShAn';
import Kegiatan from './pages/Kegiatan';
import Pendaftaran from './pages/Pendaftaran';
import Footer from './components/Footer';
import PenggunaCMS from './pages/PenggunaCMS'; 
import LoginCMS from './pages/LoginCMS'; 
import RegisterCMS from './pages/RegisterCMS'; // 1. Import komponen Register

function AppContent() {
  const location = useLocation();
  
  // Mengecek apakah URL saat ini berawalan /admin
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', width: '100%' }}>
      {!isAdminPage && <Navbar />}
      
      <div style={{ flex: 1, width: '100%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/falsafah" element={<Falsafah />} />
          <Route path="/kesh-an" element={<KeShAn />} />
          <Route path="/kegiatan" element={<Kegiatan />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />

          {/* Rute Auth Admin */}
          <Route path="/admin/login" element={<LoginCMS />} />
          <Route path="/admin/register" element={<RegisterCMS />} />
          <Route path="/admin" element={<PenggunaCMS />} />
        </Routes>
      </div>

      {!isAdminPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}