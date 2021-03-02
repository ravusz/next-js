import React from 'react';
import { Card, Text, Heading } from 'rebass'

const Planet = ({ planet }) => {
  return (
    <Card padding="1rem 0 1rem 0">
      <Heading>
        {planet.name}
      </Heading>
      <Text
        fontWeight='bold'
        color='primary'
      >
        Population - {planet.population}
      </Text>
      <Text
        fontWeight='bold'
        color='primary'
      >
        Terrain - {planet.terrain}
      </Text>
    </Card>
  );
};

export default Planet;
