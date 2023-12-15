import { Button, Card, Flex, Heading, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import axios from 'axios';
import Cookies from 'js-cookie';

const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get(`http://localhost:5000/user-info`, {
      headers: {
        Authorization: `${Cookies.get('token')}`,
      },
    })
    .then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    .catch(error => {
      console.error('Error Fetching Data: ', error);
    });
  }, [data])

  return (
    <Flex
      display={'grid'}
      marginY={16}
      marginX={{ base: 20, xl: 48 }}
      gap={6}
    >
      <Banner title={"Profil Saya"} />
      <Flex gap={12}>
        <Flex flexDirection={'column'}>
          <Heading>Foto Profil</Heading>
          <Card maxW={'sm'} gap={4} p={8} mt={4}>
            <img src="/assets/person.png" alt="Profile" />
            <Button
              bgColor={'white'}
              color={'#4F7B58'}
              borderWidth={2}
              borderColor={'#4F7B58'}
              rounded={50}
              fontSize={'sm'}
              px={6}
              _hover={{
                color: 'white',
                bgColor: '#4F7B58',
              }}
            >
              Pilih Foto
            </Button>
          </Card>
        </Flex>
        <Flex flexDirection={'column'} flex={1}>
          <Heading>Informasi Akun</Heading>
          <Card gap={4} p={8} mt={4}>
            <Text fontWeight={'semibold'}>Nama</Text>
            <Text>{ data.name }</Text>
            <Text fontWeight={'semibold'}>Email</Text>
            <Text>{ data.email }</Text>
          </Card>

          <Heading mt={8}>Ganti Username</Heading>
          <Card gap={4} p={8} mt={4}>
            <Text fontWeight={'semibold'}>Username Baru</Text>
            <Input 
                bgColor={'#540302'}
                _placeholder={{color: 'white'}} 
                placeholder='Masukkan Username' 
                size={'sm'}
                p={6}
                rounded={'xl'}
            />
            <Button
              bgColor={'white'}
              color={'#4F7B58'}
              borderWidth={2}
              borderColor={'#4F7B58'}
              rounded={50}
              fontSize={'sm'}
              px={6}
              _hover={{
                color: 'white',
                bgColor: '#4F7B58',
              }}
            >
              Simpan
            </Button>
          </Card>

          <Heading mt={8}>Ganti Kata Sandi</Heading>
          <Card gap={4} p={8} mt={4}>
            <Text fontWeight={'semibold'}>Kata Sandi Baru</Text>
            <Input 
                bgColor={'#540302'}
                _placeholder={{color: 'white'}} 
                placeholder='Kata Sandi Baru' 
                size={'sm'}
                p={6}
                rounded={'xl'}
            />
            <Text fontWeight={'semibold'}>Konfirmasi Kata Sandi Baru</Text>
            <Input 
                bgColor={'#540302'}
                _placeholder={{color: 'white'}} 
                placeholder='Konfirmasi Kata Sandi Baru' 
                size={'sm'}
                p={6}
                rounded={'xl'}
            />
            <Button
              bgColor={'white'}
              color={'#4F7B58'}
              borderWidth={2}
              borderColor={'#4F7B58'}
              rounded={50}
              fontSize={'sm'}
              px={6}
              _hover={{
                color: 'white',
                bgColor: '#4F7B58',
              }}
            >
              Simpan
            </Button>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
