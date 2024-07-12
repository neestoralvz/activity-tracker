import React from 'react';
import './ActivityList.css';

const ActivityList = ({ activities }) => {
  return (
    <ul className="activity-list">
      {activities.map(activity => (
        <li key={activity._id} className="activity-list-item">
          {activity.date} - {activity.time} - {activity.activity}
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
