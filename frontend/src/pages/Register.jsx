'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Text,
  Link,
  Divider,
  AbsoluteCenter,
} from '@chakra-ui/react'

import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex
      minH={'100vh'}
      justify={'center'}
      bg={'#FFFFFF'}
      color={'white'}>
      <Box
        rounded={'2xl'}
        bg={'#5D1416'}
        p={8}
        mt={28}
        width={{base:"86%", md:"46%", lg:"36%", xl:"26%"}}>
          <Stack spacing={4}>
            <Text 
              fontSize='2xl'
              align={'center'}
              fontWeight={'bold'}>
                Register</Text>
            <FormControl id="nama">
              <FormLabel
                fontSize={'sm'}>
                  Nama Pengguna
              </FormLabel>
                <Input
                  color={'white'}
                  placeholder="Masukkan nama pengguna"
                  _placeholder={{ opacity: 1, color: 'inherit' }}
                  fontSize="sm"
                  bg="rgba(255, 255, 255, 0.12)"
                  variant='unstyled'
                  padding={4}
                  type="text"
                />
            </FormControl>
            <FormControl id="email">
              <FormLabel
                fontSize={'sm'}>
                  Email
              </FormLabel>
                <Input
                  color={'white'}
                  placeholder="Masukkan email"
                  _placeholder={{ opacity: 1, color: 'inherit' }}
                  fontSize="sm"
                  bg="rgba(255, 255, 255, 0.12)"
                  variant='unstyled'
                  padding={4}
                  type="email"
                />
            </FormControl>
            <FormControl id="no-telepon">
              <FormLabel
                fontSize={'sm'}>
                  No Telepon
              </FormLabel>
                <Input
                  color={'white'}
                  placeholder="Masukkan no telepon"
                  _placeholder={{ opacity: 1, color: 'inherit' }}
                  fontSize="sm"
                  bg="rgba(255, 255, 255, 0.12)"
                  variant='unstyled'
                  padding={4}
                  type="text"
                />
            </FormControl>
            <FormControl id="password">
              <FormLabel
                fontSize={'sm'}>
                  Kata Sandi
              </FormLabel>
              <InputGroup>
                <Input
                placeholder='Masukkan kata sandi'
                _placeholder={{ opacity: 1, color: 'inherit' }}
                  fontSize="sm"
                  bg="rgba(255, 255, 255, 0.12)"
                  variant='unstyled'
                  padding={4}
                type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant='unstyled'
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Link 
              href='#' 
              textDecorationLine={'underline'}
              fontSize={'sm'}>
              Lupa kata sandi?
            </Link>
            <Stack spacing={6} pt={2}>
              <Button
                size="lg"
                bg={'black'}
                color={'inherit'}
                rounded={'50'}
                fontSize={"sm"}
                _hover={{
                  bg: 'blue.500',
                }}>
                Masuk
              </Button>
              <Box position='relative'>
                <Divider />
                <AbsoluteCenter 
                  bg='#5D1416' 
                  px='2' 
                  fontSize={'sm'}>
                  Atau
                </AbsoluteCenter>
              </Box>
              <Button
                  size="lg"
                  bg={'white'}
                  color={'black'}
                  rounded={'50'}
                  fontSize={"sm"}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Masuk dengan Google
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text 
                fontSize={'sm'}
                align={'center'}>
                  Belum punya akun? 
                <Link 
                  href='#' 
                  textDecorationLine={'underline'}>
                    Daftar</Link>
                </Text>
            </Stack>
          </Stack>
        </Box>
    </Flex>
  )
}