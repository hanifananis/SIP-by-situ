import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { EnvelopeSimple, Phone } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <Flex
      bg='#5D1416' 
      maxW={"100vw"}
      px={24} 
      py={10}
      color='white' 
      flexDirection={'column'}>
      <img src='/assets/logo-green 1.png' alt='SIP' width={120} />
      <Flex
      mt={4}
      mb={8}
      justify={'space-between'}
      textAlign={'start'}>
        <Flex
          flexDirection={'column'}
          gap={6}>
          <p>Funding freemium long tail hypotheses first mover advantage assets ownership</p>
          <Flex
            gap={4}>
            <EnvelopeSimple size={24} /> 
            sip@gmail.com
          </Flex>
          <Flex
            gap={4}>
            <Phone size={24} /> 
            + 12 3456 7890
          </Flex>
        </Flex>
        <Flex
          flexDirection={'column'}
          gap={4}>
          <h1><b>Contact Us</b></h1>
          <p>contact@sip.id</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </Flex>
      </Flex>
      <hr />
      <Text
      mx={'auto'}
      pt={6}>
        Copyright © 2023 <b>Sistem Informasi Pemilu (SIP)</b>
      </Text>
    </Flex>
  )
}

export default Footer