import { Flex } from '@chakra-ui/react'
import React from 'react'
import Banner from '../components/Partai/Banner'
import Cards from '../components/Partai/Cards'
import SearchBar from '../components/Partai/SearchBar'

const PartaiPolitik = () => {
  return (
    <Flex 
      flexDirection={'column'}
      marginY={16}
      marginX={{base:20, xl:48}}
      gap={14}>
        <Banner />
        <SearchBar />
        <Cards />
    </Flex>
  )
}

export default PartaiPolitik