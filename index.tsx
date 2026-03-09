import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div 
      className="flex flex-col items-center bg-white min-h-screen w-screen" 
      style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        margin: '0',
        padding: '0',
        overflow: 'hidden',
        overflowX: 'hidden'
      }}
    >
      {/* Header */}
      <header className="w-full flex items-center justify-between" style={{ height: '72px', padding: '0 16px', borderBottom: '1px solid #E5E7EB', position: 'relative', zIndex: 10 }}>
        <div className="flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pakistan_Online_Visa_Logo.png/640px-Pakistan_Online_Visa_Logo.png" 
            alt="Pak Visa Logo" 
            style={{ height: '44px', width: 'auto' }}
          />
        </div>
        <div className="flex flex-col justify-between" style={{ width: '28px', height: '18px', cursor: 'pointer' }} onClick={() => setMenuOpen(!menuOpen)}>
          <div style={{ height: '2.5px', width: '100%', backgroundColor: '#1E66B4', transition: 'all 0.3s' }}></div>
          <div style={{ height: '2.5px', width: '100%', backgroundColor: '#1E66B4', transition: 'all 0.3s' }}></div>
          <div style={{ height: '2.5px', width: '100%', backgroundColor: '#1E66B4', transition: 'all 0.3s' }}></div>
        </div>
      </header>

      {/* Sidebar Menu */}
      {menuOpen && (
        <nav 
          style={{
            position: 'fixed',
            top: 72,
            left: 0,
            right: 0,
            width: '100%',
            backgroundColor: '#2C3E50',
            zIndex: 30,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            animation: 'slideIn 0.3s ease-out',
            transform: 'translateY(0)',
            opacity: 1,
            transition: 'all 0.3s ease-out'
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <li style={{ borderBottom: '1px solid #34495E', width: '100%', textAlign: 'center' }}>
              <a href="https://visa.nadra.gov.pk/" style={{ display: 'block', padding: '18px 20px', color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Home</a>
            </li>
            <li style={{ borderBottom: '1px solid #34495E', width: '100%', textAlign: 'center' }}>
              <a href="https://visa.nadra.gov.pk/how-to-apply/" style={{ display: 'block', padding: '18px 20px', color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Guidelines</a>
            </li>
            <li style={{ borderBottom: '1px solid #34495E', width: '100%', textAlign: 'center' }}>
              <a href="https://visa.nadra.gov.pk/download/" style={{ display: 'block', padding: '18px 20px', color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Downloads</a>
            </li>
            <li style={{ borderBottom: '1px solid #34495E', width: '100%', textAlign: 'center' }}>
              <a href="https://visa.nadra.gov.pk/faqs/" style={{ display: 'block', padding: '18px 20px', color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>FAQ</a>
            </li>
            <li style={{ borderBottom: '1px solid #34495E', width: '100%', textAlign: 'center' }}>
              <a href="https://visa.nadra.gov.pk/contact/" style={{ display: 'block', padding: '18px 20px', color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Contact Us</a>
            </li>
          </ul>
          <style>{`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateY(-20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </nav>
      )}

      {/* Loading Overlay */}
      <Loader loading={loading} />

      {/* Main Body */}
      <main className="w-full flex-grow" style={{ padding: 'clamp(20px, 5vw, 30px) clamp(16px, 4vw, 28px)' }}>
        <div className="relative bg-[#F7F9FB] w-full" style={{ padding: '40px 0px' }}>
          {/* Blue accent bar */}
          <div 
            className="absolute top-0 left-0" 
            style={{ width: '60px', height: '5px', backgroundColor: '#1E66B4' }}
          ></div>

          {/* Visa Reference */}
          <div className="flex flex-col items-center px-4">
            <h1 style={{ fontSize: '18px', fontWeight: 700, color: '#1E66B4' }}>
              Visa Reference Number -
            </h1>
            <h2 style={{ fontSize: '21px', fontWeight: 700, color: '#1E66B4', marginTop: '12px' }}>
              88005622045
            </h2>
          </div>

          {/* Divider */}
          <div style={{ width: '80%', height: '1px', backgroundColor: '#E6E6E6', margin: '28px auto' }}></div>

          {/* Profile Section */}
          <div className="flex flex-col items-center">
            {/* Image Frame */}
            <div 
              style={{ 
                width: 'clamp(120px, 35vw, 160px)', 
                height: 'clamp(150px, 43vw, 200px)', 
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                backgroundColor: '#eee'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=390&h=500&auto=format&fit=crop" 
                alt="Applicant" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Data Fields */}
            <div className="mt-6 flex flex-col items-center w-full px-4 text-center">
              <div className="mb-[22px]">
                <p style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', marginBottom: '6px' }}>NAME</p>
                <p style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: 600, color: '#374151' }}>Hashimi Sayed Rohullah</p>
              </div>

              <div className="mb-[22px]">
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', marginBottom: '6px' }}>Passport No</p>
                <p style={{ fontSize: '16px', fontWeight: 600, color: '#374151' }}>P03874627</p>
              </div>

              <div className="mb-[22px]">
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', marginBottom: '6px' }}>Passport Country</p>
                <p style={{ fontSize: '16px', fontWeight: 600, color: '#374151' }}>Afghanistan</p>
              </div>

              <div className="mb-[22px]">
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', marginBottom: '6px' }}>Visa Category</p>
                <p style={{ fontSize: '16px', fontWeight: 600, color: '#374151' }}>Medical</p>
              </div>

              <div className="mb-[22px]">
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', marginBottom: '6px' }}>Visa Sub Category</p>
                <p style={{ fontSize: '16px', fontWeight: 600, color: '#374151' }}>Short-Term</p>
              </div>

              <div className="mb-[22px]">
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', marginBottom: '6px' }}>Application Type</p>
                <p style={{ fontSize: '16px', fontWeight: 600, color: '#374151' }}>Entry</p>
              </div>

              <div className="mb-[22px]">
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', marginBottom: '6px' }}>Staying Facility</p>
                <p style={{ fontSize: '16px', fontWeight: 600, color: '#374151' }}>Multiple Entry</p>
              </div>

              <div className="mb-[22px]">
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', marginBottom: '6px' }}>Visa Start Date</p>
                <p style={{ fontSize: '16px', fontWeight: 600, color: '#374151' }}>12 aug 2025</p>
              </div>

              <div className="mb-[22px]">
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', marginBottom: '6px' }}>Visa End Date</p>
                <p style={{ fontSize: '16px', fontWeight: 600, color: '#374151' }}>11 nov 2025</p>
              </div>

              <div className="mb-[45px]">
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', marginBottom: '6px' }}>Visa Duration</p>
                <p style={{ fontSize: '16px', fontWeight: 600, color: '#374151' }}>60 day(s)</p>
              </div>

              <a 
                href="https://visa.nadra.gov.pk/e-visa/authenticate"
                className="hover:bg-[#005a96] transition-colors"
                style={{ 
                  backgroundColor: '#0068AC', 
                  color: 'white', 
                  padding: '12px 30px', 
                  fontSize: '17px', 
                  fontWeight: 600, 
                  borderRadius: '2px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-block',
                  textDecoration: 'none'
                }}
              >
                Back to Login
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer 
        className="w-full" 
        style={{ 
          borderTop: '1px solid #E5E7EB', 
          padding: '22px 10px',
          backgroundColor: '#FFFFFF'
        }}
      >
        <p 
          style={{ 
            fontSize: '11.5px', 
            fontWeight: 700, 
            textAlign: 'center', 
            color: '#000000',
            lineHeight: '1.5',
            textTransform: 'uppercase',
            margin: 0
          }}
        >
          COPYRIGHT © 2015 – 2026 MINISTRY OF INTERIOR,<br />
          GOVERNMENT OF PAKISTAN – V: 5.5.9
        </p>
      </footer>
    </div>
  );
};

export default App;