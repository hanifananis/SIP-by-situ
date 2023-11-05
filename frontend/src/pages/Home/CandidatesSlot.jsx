import { Flex, Text } from '@chakra-ui/react'
import CandidatesCard from '../../components/CandidatesCard'

const CandidatesSlot = ({data}) => {
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
        <CandidatesCard data={data} />
    </Flex>
  )
}

export default CandidatesSlot