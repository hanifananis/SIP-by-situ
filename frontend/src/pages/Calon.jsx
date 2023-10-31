import React from 'react'
import RedirectPage from '../components/RedirectPage'
import { Flex } from '@chakra-ui/react'
import DetailHeader from '../components/DetailHeader'

const Calon = () => {
    
  return (
    <Flex
      flexDirection={'column'}
      marginY={16}
      marginX={{base:20, xl:48}}>
        <RedirectPage title={'Calon'} />
        <DetailHeader 
          title={'Calon 1'}
          img={'../assets/person.png'}
      />
    </Flex>
  )
}

export default Calon