import { Flex, Text, Image, Heading, Button, GridItem } from '@chakra-ui/react'

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
            <Flex 
                flexDirection={'column'}
                align={'center'}>
            <Image src='/assets/person.png' height={"90%"} width={"90%"}></Image>
            <Heading 
                mt={4}
                fontWeight={'medium'}
                fontSize={18}>
                { capres_name }
            </Heading>
            <Text 
                mt={1}
                fontWeight={'medium'}>
                Calon Presiden
            </Text>
            </Flex>
            <Flex 
            flexDirection={'column'}
            align={'center'}>
            <Image src='/assets/person.png' height={"90%"} width={"90%"}></Image>
            <Heading 
                mt={4}
                fontWeight={'medium'}
                fontSize={18}>
                { cawapres_name }
            </Heading>
            <Text 
                mt={1}
                fontWeight={'medium'}>
                Calon Wakil Presiden
            </Text>
            </Flex>
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

export default CandidatesCard