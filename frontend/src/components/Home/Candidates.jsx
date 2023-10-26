import { Flex, Text, Box, Image, Card, Heading, Button, Grid, GridItem } from '@chakra-ui/react'

const Candidates = () => {
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
                Calon 1
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
                      Nama Capres 1
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
                      Nama Cawapres 1
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
                    Lihat Profil Calon 1
                </Button>
            </GridItem>
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
                Calon 2
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
                      Nama Capres 2
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
                      Nama Cawapres 2
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
                    Lihat Profil Calon 2
                </Button>
            </GridItem>
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
                Calon 3
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
                      Nama Capres 3
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
                      Nama Cawapres 3
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
                    Lihat Profil Calon 3
                </Button>
            </GridItem>
        </Grid>
    </Flex>
  )
}

export default Candidates