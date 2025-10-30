import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { AnalysisPage } from './pages/AnalysisPage';
import { ConflictTracker } from './pages/ConflictTracker';
import { EconomicAnalysis } from './pages/EconomicAnalysis';
import { VulnerabilityAssessment } from './pages/VulnerabilityAssessment';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/conflicts" element={<ConflictTracker />} />
            <Route path="/economics" element={<EconomicAnalysis />} />
            <Route path="/vulnerabilities" element={<VulnerabilityAssessment />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;