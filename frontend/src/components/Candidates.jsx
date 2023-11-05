import { Flex, Text } from '@chakra-ui/react';
import Candidate from './Candidate';

const Candidates = (props) => {
  const data = props.data || []; // Ensure data is defined and provide a default empty array

  return (
    <div>
      {data.map((val) => (
        <Flex 
            flexDirection={'column'}
            gap={8}
            mb={6}
            mx={'auto'}>
            <Text
              fontWeight={'bold'}
              fontSize={24}
            >
              { val.title }
            </Text>
            <Flex>
                <Candidate name={ val.capres_name } position="Calon Presiden" />
                <Candidate name={ val.cawapres_name } position="Calon Wakil Presiden" />
            </Flex>
        </Flex>
      ))}
    </div>
  )
}

export default Candidates