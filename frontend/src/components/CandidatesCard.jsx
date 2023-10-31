import { Flex, Text, Image, Heading, Button, GridItem } from '@chakra-ui/react';
import Candidate from './Candidate';

const CandidatesCard = ({ title, capres_name, cawapres_name }) => {
  return (
    <GridItem
        border={1}
        borderColor={'red'}
        bgColor={'white'}
        p={8}
        minW={'md'}
        align={'center'}
        gap={8}
        rounded={'2xl'}>
        <Text
            fontWeight={'bold'}
            fontSize={24}>
        { title }
        </Text>
        <Flex>
            <Candidate name={ capres_name } position="Calon Presiden" />
            <Candidate name={ cawapres_name } position="Calon Wakil Presiden" />
        </Flex>
        <Button
            mt={4}
            bgColor={'#4F7B58'}
            color={'white'}
            rounded={'3xl'}
            fontSize={'sm'}
            w={'full'}>
            Lihat Profil { title }
        </Button>
    </GridItem>
  )
}

export default CandidatesCard;