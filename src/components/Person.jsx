import React from 'react';
import { Card, Text, Heading } from 'rebass'

const Person = ({ person }) => {
  return (
    <Card padding="1rem 0 1rem 0">
      <Heading>
        {person.name}
      </Heading>
      <Text
        fontWeight='bold'
        color='primary'
      >
        Gender - {person.gender}
      </Text>
      <Text
        fontWeight='bold'
        color='primary'
      >
        Birth Date - {person.birth_year}
      </Text>
    </Card>
  );
};

export default Person;
