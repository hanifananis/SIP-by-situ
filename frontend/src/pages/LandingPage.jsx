import { Flex } from '@chakra-ui/react'
import Hero from './Home/Hero';
import PartaiCards from './Home/PartaiCards';
import PelajariPemilu from './Home/PelajariPemilu';
import CandidatesSlot from './Home/CandidatesSlot';
import Flashback from './Home/Flashback';

const LandingPage = ({data}) => {
  return (
    <Flex 
      flexDirection={'column'}
      marginY={16}
      gap={14}>
        <Hero />
        <PartaiCards />
        <PelajariPemilu />
        <CandidatesSlot data={data} />
        <Flashback />
    </Flex>
  )
}

export default LandingPage