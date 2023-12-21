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
      px={{base: 6, md: 10}}
      color={'black'}
    >
      <Text 
        fontSize={{base: 32, md: 48}}
        fontWeight={'bold'}
        mb={8}
        color={'white'}
        textAlign={'center'}
      >
        Capres dan Cawapres 2024
      </Text>
      <CandidatesCard />
    </Flex>
  )
}

export default CandidatesSlot