import React from 'react';

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.9)', zIndex: 1000 }}>
      <div style={{ width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg viewBox="0 0 120 120" width="100%" height="100%" className="loading-spinner" style={{ display: 'block' }}>
          <circle className="ring r1" cx="60" cy="60" r="44" strokeWidth="4" fill="none" stroke="#2f7fc3" />
          <circle className="ring r2" cx="60" cy="60" r="30" strokeWidth="4" fill="none" stroke="#2f7fc3" />
          <circle className="ring r3" cx="60" cy="60" r="16" strokeWidth="4" fill="none" stroke="#2f7fc3" />
        </svg>
      </div>
      <style>{`
        .ring { stroke-linecap: round; stroke-dasharray: 80 240; }
        .r1 { stroke-dasharray: 180 180; animation: dash1 1s ease-in-out infinite; }
        .r2 { stroke-dasharray: 300 300; animation: dash2 2s ease-in-out infinite; }
        .r3 { stroke-dasharray: 50 50; animation: dash3 3s ease-in-out infinite; }
        @keyframes dash1 { 0% { stroke-dashoffset: 0 } 50% { stroke-dashoffset: -120 } 100% { stroke-dashoffset: -240 } }
        @keyframes dash2 { 0% { stroke-dashoffset: 0 } 50% { stroke-dashoffset: -90 } 100% { stroke-dashoffset: -180 } }
        @keyframes dash3 { 0% { stroke-dashoffset: 0 } 50% { stroke-dashoffset: -60 } 100% { stroke-dashoffset: -120 } }
        .loading-spinner { transform-origin: 50% 50%; animation: spin 2s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Loader;
