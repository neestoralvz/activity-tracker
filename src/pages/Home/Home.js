import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Activity Tracker</h1>
      <nav>
        <ul>
          <li><Link to="/chronological-report">Chronological Report</Link></li>
          <li><Link to="/tabbed-reports">Tabbed Reports</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
