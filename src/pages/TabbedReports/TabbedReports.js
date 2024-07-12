import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function TabbedReports({ activities }) {
  return (
    <div>
      <h2>Tabbed Reports</h2>
      <Tabs>
        <TabList>
          <Tab>Summary</Tab>
          <Tab>Details</Tab>
        </TabList>

        <TabPanel>
          <h3>Summary</h3>
          {/* Contenido del resumen */}
        </TabPanel>
        <TabPanel>
          <h3>Details</h3>
          {/* Contenido de los detalles */}
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabbedReports;
