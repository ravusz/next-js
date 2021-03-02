import React from 'react';
import peopleService from '../src/api/services/peopleService';
import Loader from "../src/components/Loader";
import Error from "../src/components/Error";
import MainLayout from "../src/layouts/MainLayout";

import Person from "../src/components/Person";
import { Flex } from 'rebass'

import { useQuery } from 'react-query'
const PeoplePage = () => {
  const { data, status } = useQuery('people', async () => {
    const { data } = await peopleService.getPeople();
    return data
  })

  if (status === 'loading') return (<Loader />);
  if (status === 'error') return (<Error />);

  return (
    <MainLayout>
      <Flex flexDirection="column">
        {data.results.map((person) => <Person key={person.name} person={person} />)}
      </Flex>
    </MainLayout>
  );
};

export default PeoplePage;
