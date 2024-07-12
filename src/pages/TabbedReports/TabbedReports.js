import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Asegúrate de que esta línea está presente
import './TabbedReports.css';

const TabbedReports = ({ activities }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Reporte 1</Tab>
        <Tab>Reporte 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Reporte 1</h2>
        <ul>
          {activities.map((activity) => (
            <li key={activity._id}>{activity.name}</li>
          ))}
        </ul>
      </TabPanel>
      <TabPanel>
        <h2>Reporte 2</h2>
        <p>Contenido del reporte 2</p>
      </TabPanel>
    </Tabs>
  );
};

export default TabbedReports;
