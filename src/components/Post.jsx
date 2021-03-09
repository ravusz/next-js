import React from 'react';
import styled from 'styled-components';

import { Card, Text, Heading } from 'rebass'

export const StyledCard = styled(Card)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.zircon};
`;

const Post = ({ title, content, onRemove }) => {
  return (
    <StyledCard padding="1rem 0 1rem 0">
      <Heading>
        {title}
      </Heading>
      <Text
        fontWeight='bold'
        color='primary'
      >
        {content}
      </Text>
      <button onClick={onRemove}>remove</button>
    </StyledCard>
  );
};

export default Post;
