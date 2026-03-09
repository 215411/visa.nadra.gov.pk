import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './index';
import EhsanHashimi from './pages/EhsanHashimi';
import LailaHashimi from './pages/LailaHashimi';
import RohullahHashimi from './pages/RohullahHashimi';
import NeelabHashimi from './pages/neelabHashimi';
import ZakiaHashimi from './pages/ZakiaHashimi';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ehsan" element={<EhsanHashimi />} />
        <Route path="/laila" element={<LailaHashimi />} />
        <Route path="/rohullah" element={<RohullahHashimi />} />
        <Route path="/neelab" element={<NeelabHashimi />} />
        <Route path="/zakia" element={<ZakiaHashimi />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
