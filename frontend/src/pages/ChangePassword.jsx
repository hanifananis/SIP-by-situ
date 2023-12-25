import React from 'react'
import { Card, Flex, Heading, Text } from '@chakra-ui/react';
import RedInput from '../components/RedInput';
import GreenTransparentButton from '../components/GreenTransparentButton';

const ChangePassword = () => {
  return (
    <Flex
      flexDir={'column'}
      gap={4}
    >
        <Heading fontSize={'2xl'} fontWeight={'semibold'} mt={8}>Ganti Kata Sandi</Heading>
          <RedInput isi={'Kata Sandi Lama'} />
          <RedInput isi={'Kata Sandi Baru'} />
          <RedInput isi={'Konfirmasi Kata Sandi Baru'} />
          <GreenTransparentButton title={'Simpan'} />
    </Flex>
  )
}

export default ChangePassword