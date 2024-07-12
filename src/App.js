import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ChronologicalReport from './pages/ChronologicalReport/ChronologicalReport';
import TabbedReports from './pages/TabbedReports/TabbedReports';
import TestPage from './pages/TestPage'; // Importa la página de prueba
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chronological-report" element={<ChronologicalReport />} />
        <Route path="/tabbed-reports" element={<TabbedReports />} />
        <Route path="/test" element={<TestPage />} /> {/* Añade la ruta de la página de prueba */}
      </Routes>
    </div>
  );
}

export default App;
