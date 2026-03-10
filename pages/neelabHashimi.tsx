import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';

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
         <a href="https://visa.nadra.gov.pk/">
          <img 
            src="./images/logo.png" 
            alt="Pak Visa Logo" 
            style={{ height: '44px', width: 'auto' }}
          />
        </a>
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

          <main className="w-full flex-grow" style={{ padding: '30px 28px' }}>
  {/* Added animation classes here: [animation:...] and [@keyframes...] */}
  <div 
    className="relative bg-[#F7F9FB] w-full [animation:fade-up_0.8s_ease-out_forwards] [@keyframes_fade-up_{from_{opacity:0;transform:translateY(20px)}to_{opacity:1;transform:translateY(0)}}]" 
    style={{ padding: '40px 0px' }}
  >
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
        88005787088
      </h2>
    </div>

    {/* Divider */}
    <div style={{ width: '80%', height: '1px', backgroundColor: '#E6E6E6', margin: '28px auto' }}></div>

    {/* Profile Section */}
    <div className="flex flex-col items-center">
      {/* Image Frame */}
      <div 
        style={{ 
          width: '140px', 
          height: '174px', 
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          backgroundColor: '#eee'
        }}
      >
        <img 
          src="./images/neelab.png" 
          alt="Applicant" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Data Fields */}
      <div className="mt-6 flex flex-col items-center w-full px-4 text-center">
        {[
          { label: "NAME", value: "Hashimi Neelab" },
          { label: "Passport No", value: "P03882570" },
          { label: "Passport Country", value: "Afghanistan" },
          { label: "Visa Category", value: "Medical" },
          { label: "Visa Sub Category", value: "Short-Term" },
          { label: "Application Type", value: "Entry" },
          { label: "Staying Facility", value: "Single Entry" },
          { label: "Visa Start Date", value: "01 Mar 2026" },
          { label: "Visa End Date", value: "29 May 2026" },
          { label: "Visa Duration", value: "60 day(s)" },
        ].map((item, index) => (
          <div key={index} className="mb-[22px]">
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', marginBottom: '6px' }}>{item.label}</p>
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#374151' }}>{item.value}</p>
          </div>
        ))}

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
            textDecoration: 'none',
            marginTop: '23px'
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

const rootElement = document.getElementById('root');
export default App;
