import React, { useEffect, useContext } from 'react';
import '../styles/App.css';
import planetsAPI from '../services/planetsAPI';
import PlanetsContext from '../contexts/PlanetsContext';
import Table from '../components/Table';

const Home = () => {
  const { planetsInfo, setPlanetsInfo } = useContext(PlanetsContext);

  useEffect(() => {
    const fetchPlanets = async () => {
      const planets = await planetsAPI();
      setPlanetsInfo(planets);
    };
    fetchPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Table planetsInfo={ planetsInfo } />
    </div>
  );
};

export default Home;
