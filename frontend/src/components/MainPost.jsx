import { Card, CardBody, CardHeader, Input, Text } from '@chakra-ui/react'
import React from 'react'
import UserForum from './UserForum'
import BerikanKomentar from './BerikanKomentar'

const MainPost = ({ judul, isi, namaPenulis, rolePenulis, createdAt}) => {
  return (
    <Card  
      bgColor={'#F3EBBD'}
      shadow={'lg'}
      rounded={'2xl'}
    >
      <CardHeader>
        <UserForum authorName={namaPenulis} tanggal={createdAt} />
      </CardHeader>
      <CardBody pt={0}>
        <Text fontSize={'2xl'}>
          { judul }
        </Text>
        <Text pt={2} pb={4}>
          { isi }
        </Text>
        <BerikanKomentar />
      </CardBody>
    </Card>
  )
}

export default MainPost