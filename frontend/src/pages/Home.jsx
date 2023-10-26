import { Flex } from '@chakra-ui/react'
import Hero from '../components/Home/Hero';
import PartaiCards from '../components/Home/PartaiCards';
import LearnMore from '../components/Home/LearnMore';
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
        <LearnMore />
        <Candidates />
        <Flashback />
    </Flex>
  )
}

export default Home