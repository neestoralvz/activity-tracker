import React, { useEffect, useState } from 'react';
import { getActivities } from '../../services/activityService';
import ActivityList from '../../components/ActivityList/ActivityList';
import NavigationLinks from '../../components/Navigation/NavigationLinks';
import './ChronologicalReport.css';

const ChronologicalReport = () => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getActivities();
        setActivities(data);
        setFilteredActivities(data);
      } catch (err) {
        setError('Error al obtener las actividades');
      }
    };

    fetchActivities();
  }, []);

  useEffect(() => {
    let filtered = activities;

    // Filtrar actividades
    if (filter) {
      filtered = filtered.filter(activity => activity.activity.toLowerCase().includes(filter.toLowerCase()));
    }

    // Ordenar actividades
    filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setFilteredActivities(filtered);
  }, [filter, sortOrder, activities]);

  return (
    <div className="chronological-report">
      <h2>Reporte Cronológico de Actividades</h2>
      {error && <p className="error">{error}</p>}
      
      <div className="controls">
        <input 
          type="text" 
          placeholder="Filtrar por actividad..." 
          value={filter} 
          onChange={e => setFilter(e.target.value)} 
        />
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
      
      <ActivityList activities={filteredActivities} />
      <NavigationLinks />
    </div>
  );
};

export default ChronologicalReport;
