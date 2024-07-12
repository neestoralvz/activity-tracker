import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Summary.css';

const Summary = ({ data }) => {
  const activityCounts = data.reduce((acc, activity) => {
    acc[activity.activity] = (acc[activity.activity] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(activityCounts).map(key => ({
    activity: key,
    count: activityCounts[key]
  }));

  return (
    <div className="summary">
      <h2>Resumen General</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="activity" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Summary;
