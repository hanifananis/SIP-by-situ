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

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import axios from 'axios'

export default function Register() {
  const navigate = useNavigate();

  const initialValues = { name: "", email: "", no_telp: "", password: "", confirmPassword: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i;

    if(!values.name) {
      errors.name = "Namanya gaada";
    }
    if(!values.email) {
      errors.email = "Emailnya gaada";
    }
    if(!values.no_telp) {
      errors.no_telp = "nomer gaada";
    }
    if(!values.password) {
      errors.password = "pass tak deu";
    }
    if(!values.confirmPassword) {
      errors.confirmPassword = "konfirmasi dl";
    }

    return errors;
  };

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [no_telp, setNoTelp] = useState("")
  // const [password, setPassword] = useState("")
  // const [confirmPassword, setConfirmPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // function signUp()
  // {
  //   axios.post(`http://localhost:5000/register`, {
  //     name: formValues.name,
  //     email: formValues.email,
  //     no_telp: no_telp,
  //     password: password,
  //     confirmPassword: confirmPassword
  //   })
  //   .then(() => {
  //     navigate('/login');
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }
  
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
            <form onSubmit={handleSubmit}> 
              <FormControl>
                <FormLabel
                  fontSize={'sm'}>
                    Nama Pengguna
                </FormLabel>
                  <Input
                    name='name'
                    color={'white'}
                    placeholder="Masukkan nama pengguna"
                    _placeholder={{ opacity: 1, color: 'inherit' }}
                    fontSize="sm"
                    bg="rgba(255, 255, 255, 0.12)"
                    variant='unstyled'
                    padding={4}
                    type="text"
                    value={formValues.name}
                    onChange={handleChange}
                  />
              </FormControl>
              <FormControl id="email">
                <FormLabel
                  fontSize={'sm'}>
                    Email
                </FormLabel>
                  <Input
                    name='email'
                    color={'white'}
                    placeholder="Masukkan email"
                    _placeholder={{ opacity: 1, color: 'inherit' }}
                    fontSize="sm"
                    bg="rgba(255, 255, 255, 0.12)"
                    variant='unstyled'
                    padding={4}
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
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
                    value={formValues.no_telp}
                    onChange={handleChange}
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
                  value={formValues.password}
                  onChange={handleChange} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant='unstyled'
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="confirmPassword">
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
                  value={formValues.confirmPassword}
                  onChange={handleChange} />
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
                  type="submit"
                  size="lg"
                  bg={'black'}
                  color={'inherit'}
                  rounded={'50'}
                  fontSize={"sm"}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  // onClick={signUp}
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
                    textDecorationLine={'underline'}
                    ml={1}>
                      Masuk</Link>
                  </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
    </Flex>
  )
}