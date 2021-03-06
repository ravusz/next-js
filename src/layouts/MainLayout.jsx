import React from 'react';
import Navbar from '../components/Navbar'
import { Flex } from 'rebass'

const MainLayout = ({ children }) => {
  return (
    <main>
      <h1>Posts</h1>
      <Navbar />
      <Flex flexDirection="column" justifyContent="center" >
        {children}
      </Flex>
    </main>
  );
};

export default MainLayout;
