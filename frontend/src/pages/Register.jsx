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
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { registerSchema } from '../schemas/registerSchema'

import axios from 'axios'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  function onSubmit(values)
  {
    axios.post(`http://localhost:5000/register`, {
      name: values.name,
      email: values.email,
      no_telp: values.no_telp,
      password: values.password,
      confirmPassword: values.confirmPassword
    })
    .then(() => {
      toast.success('Register berhasil', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      navigate('/login');
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
                Register
            </Text>
            <Formik
              initialValues={{
                name: '',
                email: '',
                no_telp: '',
                password: '',
                confirmPassword: ''
              }}
              validationSchema={registerSchema}
              onSubmit={onSubmit}
            >
              {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                <form onSubmit={handleSubmit}> 
                  <FormControl
                    id="name"
                    isInvalid={errors.name && touched.name}
                    mb={4}
                  >
                    <FormLabel fontSize={'sm'}>
                      Nama Pengguna
                    </FormLabel>
                    <Input
                      name="name"
                      color={'white'}
                      placeholder="Masukkan nama pengguna"
                      _placeholder={{ opacity: 1, color: 'inherit' }}
                      fontSize="sm"
                      bg="rgba(255, 255, 255, 0.12)"
                      variant='unstyled'
                      padding={4}
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
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
                    id="no_telp"
                    isInvalid={errors.no_telp && touched.no_telp}
                    mb={4}
                  >
                    <FormLabel fontSize={'sm'}>
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
                      value={values.no_telp}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormErrorMessage>{errors.no_telp}</FormErrorMessage>
                  </FormControl>
                  <FormControl 
                    id="password"
                    isInvalid={errors.password && touched.password}
                    mb={4}
                  >
                    <FormLabel fontSize={'sm'}>
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
                  <FormControl 
                    id="confirmPassword"
                    isInvalid={errors.confirmPassword && touched.confirmPassword}
                    mb={4}
                  >
                    <FormLabel fontSize={'sm'}>
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
                      value={values.confirmPassword}
                      onChange={handleChange} 
                      onBlur={handleBlur}
                    />
                      <InputRightElement h={'full'}>
                        <Button
                          variant='unstyled'
                          onClick={() => setShowConfirmPassword((showConfirmPassword) => !showConfirmPassword)}>
                          {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                  </FormControl>
                  <Stack spacing={6} pt={2}>
                    <Button
                      type="submit"
                      size="lg"
                      bg={'black'}
                      color={'inherit'}
                      rounded={'50'}
                      fontSize={"sm"}
                      _hover={{
                        bg: 'blue.500',
                      }}
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
                      }}
                    >
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
                        textDecorationLine={'underline'}
                        ml={1}>
                          Masuk</Link>
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