import { Flex } from '@chakra-ui/react'
import React from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Partai/Cards'
import SearchBar from '../components/SearchBar'

const PartaiPolitik = () => {
  return (
    <Flex 
      flexDirection={'column'}
      marginY={16}
      marginX={{base:20, xl:48}}
      gap={14}>
        <Banner 
          title={"Partai Politik Indonesia"}
          desc={"Menyelidiki catatan prestasi dan sejarah partai politik yang berpengaruh merupakan langkah yang penting bagi pemilih yang ingin membuat keputusan yang berdasarkan informasi yang mendalam dalam konteks pemilihan politik."}
        />
        <SearchBar />
        <Cards />
    </Flex>
  )
}

export default PartaiPolitik