import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { getCurrentDateTime } from '../../utils/dateTimeUtils';
import { createActivity } from '../../services/activityService';
import './ActivityForm.css';

const ActivityForm = () => {
  const [formData, handleChange, setFormData] = useForm({
    activity: '',
    date: '',
    time: ''
  });

  const activities = [
    'Despertar',
    'Meditación',
    'Hacer ejercicio físico',
    'Preparar y consumir un desayuno saludable',
    'Revisar y planificar las tareas del día'
  ];

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleCurrentDateTime = () => {
    const { currentDate, currentTime } = getCurrentDateTime();
    setFormData({
      ...formData,
      date: currentDate,
      time: currentTime,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.activity || !formData.date || !formData.time) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    setError('');
    try {
      await createActivity(formData);
      setSuccess('Actividad registrada exitosamente');
    } catch (error) {
      setError(`Error al registrar la actividad: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  return (
    <div className="container">
      <h1>Gestor de Actividades</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="activity">Actividad:</label>
          <select
            id="activity"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
          >
            <option value="">Selecciona una actividad</option>
            {activities.map((activity, index) => (
              <option key={index} value={activity}>
                {activity}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="time">Hora:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleCurrentDateTime}>
            Usar fecha y hora actual
          </button>
        </div>
        <div>
          <button type="submit">Marcar como completada</button>
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default ActivityForm;
