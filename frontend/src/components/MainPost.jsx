import { Card, CardBody, CardFooter, CardHeader, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

const MainPost = ({ judul, isi, namaPenulis, rolePenulis, createdAt}) => {
  return (
    <Card  
      bgColor={'#F3EBBD'}
      borderColor={'#540302'}
      rounded={'2xl'}
    >
      <CardHeader>
        <Heading>
          { judul }
        </Heading>
      </CardHeader>
      <CardBody pt={0}>
        { isi }
        <Text color={'#979797'} fontSize={'sm'} mt={2}>{ createdAt }</Text>
        <Heading fontSize={'md'} mt={4}>Berikan Komentar</Heading>
        <Input
          name="comment"
          fontSize="sm"
          mt={2}
          borderWidth={1}
          borderColor={'#540302'}
          rounded={'2xl'}
          type="text"
          autoComplete="off"
        />
      </CardBody>
      <CardFooter pt={0}>
        <Text>{ namaPenulis }</Text>
        <Text>{ rolePenulis }</Text>
      </CardFooter>
    </Card>
  )
}

export default MainPost