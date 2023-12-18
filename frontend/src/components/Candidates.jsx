import React from 'react';
import { Flex } from '@chakra-ui/react';
import Candidate from './Candidate';

const Candidates = (props) => {
  const data = props.data || [];
  
  return (
    <div>
      {data.map((val) => (
        <Flex
          key={val._id}
          flexDirection={'column'}
          gap={8}
          mb={6}
          mx={'auto'}
          alignItems={'center'}
        >
          <Flex gap={6}>
            <Candidate name={val.capres} position="Calon Presiden" img={val.capres_img_url} height={props.height} width={props.width} />
            <Candidate name={val.cawapres} position="Calon Wakil Presiden" img={val.cawapres_img_url} height={props.height} width={props.width} />
          </Flex>
        </Flex>
      ))}
    </div>
  );
}

export default Candidates;