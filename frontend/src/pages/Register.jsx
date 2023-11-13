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
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [no_telp, setNoTelp] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  function signUp()
  {
    let data = [name, email, no_telp, password, confirmPassword];
    
  }

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
        my={28}
        width={{base:"86%", md:"46%", lg:"36%", xl:"26%"}}>
          <Stack spacing={4}>
            <Text 
              fontSize='2xl'
              align={'center'}
              fontWeight={'bold'}>
                Register
            </Text>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={no_telp}
                  onChange={(e) => setNoTelp(e.target.value)}
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
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant='unstyled'
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel
                fontSize={'sm'}>
                  Konfirmasi Kata Sandi
              </FormLabel>
              <InputGroup>
                <Input
                placeholder='Masukkan konfirmasi kata sandi'
                _placeholder={{ opacity: 1, color: 'inherit' }}
                fontSize="sm"
                bg="rgba(255, 255, 255, 0.12)"
                variant='unstyled'
                padding={4}
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant='unstyled'
                    onClick={() => setShowConfirmPassword((showConfirmPassword) => !showConfirmPassword)}>
                    {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={6} pt={2}>
              <Button
                size="lg"
                bg={'black'}
                color={'inherit'}
                rounded={'50'}
                fontSize={"sm"}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={signUp()}
                >
                Daftar
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
                  Daftar dengan Google
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text 
                fontSize={'sm'}
                align={'center'}>
                  Sudah punya akun? 
                <Link 
                  href='/login' 
                  textDecorationLine={'underline'}>
                    Masuk</Link>
                </Text>
            </Stack>
          </Stack>
        </Box>
    </Flex>
  )
}