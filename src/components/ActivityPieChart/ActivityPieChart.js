import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';
import './ActivityPieChart.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF00FF'];

const ActivityPieChart = ({ data }) => {
  const activityCounts = data.reduce((acc, activity) => {
    acc[activity.activity] = (acc[activity.activity] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(activityCounts).map(key => ({
    name: key,
    value: activityCounts[key]
  }));

  return (
    <div className="activity-pie-chart">
      <h2>Distribución de Tipos de Actividades</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityPieChart;
