import { Flex, Text, Grid } from '@chakra-ui/react'
import CandidatesCard from '../CandidatesCard'

const Candidates = () => {
  const posts = [
    {
      id: 1,
      title: "Calon 1",
      capres_name: "Anies",
      cawapres_name: "Nanda"
    },
    {
      id: 2,
      title: "Calon 2",
      capres_name: "Rafa",
      cawapres_name: "Karis"
    },
    {
      id: 3,
      title: "Calon 3",
      capres_name: "Ganjar",
      cawapres_name: "Prabowo"
    }
  ]
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
        <Grid
          gap={12}
          flexDirection={{base:'column', md:'row'}}
          marginX={20}
          templateColumns={{base:'repeat(2, 1fr)', xl:'repeat(3, 1fr)'}}>
          {posts.map(post => (
            <CandidatesCard 
              key={post.id}
              title={post.title}
              capres_name={post.capres_name}
              cawapres_name={post.cawapres_name}
            />
          ))}
        </Grid>
    </Flex>
  )
}

export default Candidates