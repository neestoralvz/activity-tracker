import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import ChronologicalReport from './pages/ChronologicalReport/ChronologicalReport';
import TabbedReports from './pages/TabbedReports/TabbedReports';

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/chronological-report">Chronological Report</Link>
                    </li>
                    <li>
                        <Link to="/tabbed-reports">Tabbed Reports</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chronological-report" element={<ChronologicalReport />} />
                <Route path="/tabbed-reports" element={<TabbedReports />} />
            </Routes>
        </div>
    );
}

export default App;
