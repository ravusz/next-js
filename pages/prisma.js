import React, { useState } from 'react';
import prismaService from '../src/api/services/prismaService';
import Loader from "../src/components/Loader";
import Error from "../src/components/Error";
import { Flex } from 'rebass'
import MainLayout from "../src/layouts/MainLayout";
import { useQuery } from 'react-query'

const PrismaPage = () => {

  const { data, status } = useQuery('prisma', async () => {
    const { data } = await prismaService.getPosts();

    return data
  })


  console.log('data ===>', data)

  if (status === 'loading') return (<Loader />);
  if (status === 'error') return (<Error />);

  return (
    <MainLayout>
      Test
    </MainLayout>
  );
};

export default PrismaPage;
