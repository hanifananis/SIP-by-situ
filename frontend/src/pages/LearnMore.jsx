import { Flex, Heading } from '@chakra-ui/react'
import CardTransparant from '../components/CardTransparant'
import React from 'react'

const LearnMore = () => {
  const cardData = {
    title: "Ini Judul",
    value: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
  }

  return (
    <Flex
      flexDirection={'column'}
      mx={12}
    >
        <Heading
            alignItems={'center'}
            mx={'auto'}
            paddingY={28}
            fontSize={48} 
            fontWeight={'bold'}
        >Pelajari Pemilu 2024</Heading>

        <CardTransparant 
        {...cardData } />
    </Flex>
  )
}

export default LearnMore