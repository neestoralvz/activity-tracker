import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Trends.css';

const Trends = ({ data }) => {
  const trendData = data.reduce((acc, activity) => {
    const date = activity.date;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(trendData).map(key => ({
    date: key,
    count: trendData[key]
  }));

  return (
    <div className="trends">
      <h2>Tendencia de Actividades</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Trends;
