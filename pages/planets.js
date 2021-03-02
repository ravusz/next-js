import React from 'react';
import planetsService from '../src/api/services/planetsService';

import { useQuery } from 'react-query'

const PlanetsPage = () => {
  const { data, status } = useQuery('planets', async () => {
    const { data } = await planetsService.getPlanets();
    return data
  })


  return (
    <div>
      PlanetsPage
    </div>
  );
};

export default PlanetsPage;
