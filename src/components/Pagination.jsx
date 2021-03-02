import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
    list-style: none;
 
    li {
      padding: 0.5rem;
    }
    a {
      cursor: pointer;
    }
  }
  .break-me {
    cursor: pointer;
  }
  .active {
    border-color: transparent;
    background-color: #0366d6;
    color: white;
  }
`;

const Pagination = ({ ...restProps }) => {
  return (
    <StyledPaginateContainer>
      <ReactPaginate {...restProps} />
    </StyledPaginateContainer>
  );
};

export default Pagination;
