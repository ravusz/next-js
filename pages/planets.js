import React, { useState } from 'react';
import planetsService from '../src/api/services/planetsService';
import Loader from "../src/components/Loader";
import Error from "../src/components/Error";
import Planet from "../src/components/Planet";
import { Flex } from 'rebass'
import MainLayout from "../src/layouts/MainLayout";
import Pagination from '../src/components/Pagination';
import { useQuery } from 'react-query'

const PlanetsPage = () => {
  const [pageNumber, setPageNumber] = useState(1)

  const { data, status } = useQuery(['planets', pageNumber], async () => {
    const { data } = await planetsService.getPlanets(pageNumber);

    return data
  })

  if (status === 'loading') return (<Loader />);
  if (status === 'error') return (<Error />);

  return (
    <MainLayout>
      <Flex flexDirection="column">
        {data.results.map((planet) => <Planet key={planet.name} planet={planet} />)}
      </Flex>
      <Pagination
        initialPage={pageNumber}
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={data.count / data.results.length}
        marginPagesDisplayed={data.count / data.results.length}
        pageRangeDisplayed={data.count}
        onPageChange={({ selected }) => setPageNumber(selected + 1)}
        containerClassName="pagination"
        activeClassName="active"
      />
    </MainLayout>
  );
};

export default PlanetsPage;
