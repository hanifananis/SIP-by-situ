import { Flex } from '@chakra-ui/react';
import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <Flex mx={'auto'}>
    <ReactLoading type={type} color={color} height={60} width={80} />
  </Flex>
);

export default Loading;