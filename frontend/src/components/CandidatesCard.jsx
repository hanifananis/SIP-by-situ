import { Button, Grid, GridItem } from '@chakra-ui/react';
import Candidates from './Candidates';
import { Link } from 'react-router-dom';

const CandidatesCard = (props) => {
  const data = props.data || []; 

  return (
    <Grid
      gap={12}
      flexDirection={{base:'column', md:'row'}}
      marginX={20}
      templateColumns={{base:'repeat(2, 1fr)', xl:'repeat(3, 1fr)'}}>
      {data.map((val) => (
        <GridItem
          key={val.id}
          border={1}
          borderColor={'red'}
          bgColor={'white'}
          p={8}
          minW={'md'}
          align={'center'}
          rounded={'2xl'}
        >
          <Candidates data={[val]} />
          <Link to={`/calon-2024/${val.id}`}>
            <Button
              onClick={''}
              mt={4}
              bgColor={'#4F7B58'}
              color={'white'}
              rounded={'3xl'}
              fontSize={'sm'}
              w={'full'}
            >
              Lihat Profil {val.title}
            </Button>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
}

export default CandidatesCard;
