import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Summary from '../../components/Summary/Summary';
import Trends from '../../components/Trends/Trends';
import ActivityPieChart from '../../components/ActivityPieChart/ActivityPieChart';
import NavigationLinks from '../../components/Navigation/NavigationLinks';
import './TabbedReports.css';

const TabbedReports = ({ activities }) => {
  return (
    <div className="tabbed-reports">
      <h2>Reportes en Pestañas</h2>
      <Tabs>
        <TabList>
          <Tab>Resumen General</Tab>
          <Tab>Tendencias</Tab>
          <Tab>Distribución de Actividades</Tab>
        </TabList>

        <TabPanel>
          <Summary data={activities} />
        </TabPanel>
        <TabPanel>
          <Trends data={activities} />
        </TabPanel>
        <TabPanel>
          <ActivityPieChart data={activities} />
        </TabPanel>
      </Tabs>
      <NavigationLinks />
    </div>
  );
};

export default TabbedReports;
