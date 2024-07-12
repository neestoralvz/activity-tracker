import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationLinks.css';

const NavigationLinks = () => {
  return (
    <div className="navigation-links">
      <Link to="/">Página Principal</Link>
      <Link to="/chronological-report">Reporte Cronológico</Link>
      <Link to="/tabbed-reports">Reportes en Pestañas</Link>
    </div>
  );
};

export default NavigationLinks;
