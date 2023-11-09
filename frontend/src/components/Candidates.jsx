import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Candidate from './Candidate';

const Candidates = (props) => {
  const data = props.data || [];
  
  return (
    <div>
      {data.map((val) => (
        <Flex
          key={val.id}
          flexDirection={'column'}
          gap={8}
          mb={6}
          mx={'auto'}
        >
          <Text
            fontWeight={'bold'}
            fontSize={24}
          >
            {val.no_urut}
          </Text>
          <Flex>
            <Candidate name={val.capres} position="Calon Presiden" />
            <Candidate name={val.cawapres} position="Calon Wakil Presiden" />
          </Flex>
        </Flex>
      ))}
    </div>
  );
}

export default Candidates;