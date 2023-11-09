import { Flex, Text } from '@chakra-ui/react'
import CandidatesCard from '../../components/CandidatesCard'

const CandidatesSlot = () => {
  return (
    <Flex 
        flexDirection={'column'}
        align={'center'}
        backgroundColor={'#540302'}
        pt={10}
        pb={16}
        color={'black'}>
        <Text 
          fontSize={42} 
          fontWeight={'bold'}
          mb={8}
          color={'white'}>
            Capres dan Cawapres 2024
        </Text>
        <CandidatesCard />
    </Flex>
  )
}

export default CandidatesSlot