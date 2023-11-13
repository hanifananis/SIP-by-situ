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
  FormErrorMessage,
} from '@chakra-ui/react'

import { useState } from 'react'
import { Formik, useFormik } from 'formik'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { loginSchema } from '../schemas/loginSchema'
import axios from 'axios'

export default function Login() {

  const [showPassword, setShowPassword] = useState(false)

  function onSubmit() 
  {
    axios.post(`http://localhost:5000/login`, {
      email: email,
      password: password
    })
    .then(() => {
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
    })
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
                Login
            </Text>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              validationSchema={loginSchema}
              onSubmit={onSubmit}
            >
              {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <FormControl 
                    id="email" 
                    isInvalid={errors.email && touched.email} 
                    mb={4}
                  >
                    <FormLabel fontSize={'sm'}>
                      Email
                    </FormLabel>
                    <Input
                      name="email"
                      color={'white'}
                      placeholder="Masukkan email"
                      _placeholder={{ opacity: 1, color: 'inherit' }}
                      fontSize="sm"
                      bg="rgba(255, 255, 255, 0.12)"
                      variant='unstyled'
                      padding={4}
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl 
                    id="password"
                    isInvalid={errors.password && touched.password} 
                    mb={4}
                  >
                    <FormLabel
                      fontSize={'sm'}
                    >
                      Kata Sandi
                    </FormLabel>
                    <InputGroup>
                      <Input
                        name="password"
                        placeholder='Masukkan kata sandi'
                        _placeholder={{ opacity: 1, color: 'inherit' }}
                        fontSize="sm"
                        bg="rgba(255, 255, 255, 0.12)"
                        variant='unstyled'
                        padding={4}
                        type={showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <InputRightElement h={'full'}>
                        <Button
                          variant='unstyled'
                          onClick={() => setShowPassword((showPassword) => !showPassword)}>
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <Link 
                    href='#' 
                    textDecorationLine={'underline'}
                    fontSize={'sm'}
                  >
                    Lupa kata sandi?
                  </Link>
                  <Stack spacing={6} pt={6}>
                    <Button
                      type="submit"
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
                        href='/register' 
                        textDecorationLine={'underline'}
                        ml={1}>
                          Daftar</Link>
                      </Text>
                  </Stack>
                </form>
              )}
            </Formik>
          </Stack>
        </Box>
    </Flex>
  )
}