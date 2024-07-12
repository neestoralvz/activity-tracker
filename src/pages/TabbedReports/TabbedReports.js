import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function TabbedReports() {
    return (
        <div>
            <h1>Tabbed Reports</h1>
            <Tabs>
                <TabList>
                    <Tab>Report 1</Tab>
                    <Tab>Report 2</Tab>
                </TabList>
                <TabPanel>
                    <h2>Report 1 Content</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Report 2 Content</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default TabbedReports;
