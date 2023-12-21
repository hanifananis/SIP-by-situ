import { Flex } from '@chakra-ui/react'
import Hero from './Home/Hero'
import PartaiCards from './Home/PartaiCards'
import PelajariPemilu from './Home/PelajariPemilu'
import CandidatesSlot from './Home/CandidatesSlot'
import Flashback from './Home/Flashback'

const LandingPage = () => {
  return (
    <Flex
      flexDirection={'column'}
      marginY={{base: 12, md: 16}}
      gap={14}
    >
      <Hero />
      <PartaiCards />
      <PelajariPemilu />
      <CandidatesSlot />
      <Flashback />
    </Flex>
  )
}

export default LandingPage