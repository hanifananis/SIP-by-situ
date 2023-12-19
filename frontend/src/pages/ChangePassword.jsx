import React from 'react'
import { Card, Heading, Text } from '@chakra-ui/react';
import RedInput from '../components/RedInput';
import GreenTransparentButton from '../components/GreenTransparentButton';

const ChangePassword = () => {
  return (
    <>
        <Heading fontSize={'2xl'} fontWeight={'semibold'} mt={8}>Ganti Kata Sandi</Heading>
        <Card gap={4} p={8} mt={4}>
            <Text fontWeight={'semibold'}>Kata Sandi Baru</Text>
            <RedInput isi={'Kata Sandi Baru'} />
            <Text fontWeight={'semibold'}>Konfirmasi Kata Sandi Baru</Text>
            <RedInput isi={'Konfirmasi Kata Sandi Baru'} />
            <GreenTransparentButton title={'Simpan'} />
        </Card>
    </>
  )
}

export default ChangePassword