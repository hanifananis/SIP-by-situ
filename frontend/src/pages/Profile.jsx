import { Button, Card, Flex, Heading, Input, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import axios from 'axios';
import Cookies from 'js-cookie';
import RedInput from '../components/RedInput';
import GreenTransparentButton from '../components/GreenTransparentButton';

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
  }, [])

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
            <GreenTransparentButton title={'Pilih Foto'} />
          </Card>
          <Heading mt={8}>Informasi Akun</Heading>
          <Card gap={4} p={8} mt={4}>
            <Text fontWeight={'semibold'}>Nama</Text>
            <Text>{ data.userinfo?.name }</Text>
            <Text fontWeight={'semibold'}>Email</Text>
            <Text>{ data.userinfo?.email }</Text>
          </Card>
        </Flex>

        <Flex flexDirection={'column'} flex={1}>
          <Heading>Ganti Username</Heading>
          <Card gap={4} p={8} mt={4}>
            <Text fontWeight={'semibold'}>Username Baru</Text>
            <RedInput val={'Masukkan Username'} />
            <GreenTransparentButton title={'Simpan'} />
          </Card>

          <Heading mt={8}>Ganti Kata Sandi</Heading>
          <Card gap={4} p={8} mt={4}>
            <Text fontWeight={'semibold'}>Kata Sandi Baru</Text>
            <RedInput val={'Kata Sandi Baru'} />
            <Text fontWeight={'semibold'}>Konfirmasi Kata Sandi Baru</Text>
            <RedInput val={'Konfirmasi Kata Sandi Baru'} />
            <GreenTransparentButton title={'Simpan'} />
          </Card>

          <Heading mt={8}>Comment</Heading>
          <Card gap={4} p={8} mt={4}>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Content</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.userComment?.map((val) => (
                  <Tr key={val._id}>
                    <Td>{val.content}</Td>
                    <Td>
                      
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          </Card>
          {data.userforum?.map((val) => (
            <Text key={val._id}>{val.isi}</Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
