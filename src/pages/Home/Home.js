import React from 'react';
import ActivityForm from '../../components/ActivityForm/ActivityForm';
import NavigationLinks from '../../components/Navigation/NavigationLinks';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <ActivityForm />
      <NavigationLinks />
    </div>
  );
};

export default Home;
