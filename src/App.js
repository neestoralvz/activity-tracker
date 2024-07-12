import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ChronologicalReport from './pages/ChronologicalReport/ChronologicalReport';
import TabbedReports from './pages/TabbedReports/TabbedReports';
import { getActivities } from './services/activityService';
import './App.css';

function App() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getActivities();
        setActivities(data);
      } catch (err) {
        setError('Error al obtener las actividades');
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chronological-report" element={<ChronologicalReport />} />
        <Route path="/tabbed-reports" element={<TabbedReports activities={activities} />} />
      </Routes>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
