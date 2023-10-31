import { Flex } from '@chakra-ui/react'
import Hero from '../components/Home/Hero';
import PartaiCards from '../components/Home/PartaiCards';
import PelajariPemilu from '../components/Home/PelajariPemilu';
import Candidates from '../components/Home/Candidates';
import Flashback from '../components/Home/Flashback';

const Home = () => {
  return (
    <Flex 
      flexDirection={'column'}
      marginY={16}
      gap={14}>
        <Hero />
        <PartaiCards />
        <PelajariPemilu />
        <Candidates />
        <Flashback />
    </Flex>
  )
}

export default Home