import { Card, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import axios from 'axios';
import Cookies from 'js-cookie';
import GreenButton from '../components/GreenButton';
import ProfileTabs from './ProfileTabs';
import { useCommentContext, useForumContext } from '../context/ForumProvider';
import EditProfileModal from './EditProfileModal';
import AddTopikModal from './Forum/AddTopikModal';

const Profile = () => {
  const [data, setData] = useState([]);
  const { forum, updateForumList } = useForumContext();
  const { comment, updateCommentList } = useCommentContext();
  
  useEffect(() => {
    axios
    .get(`http://localhost:5000/user-info`, {
      headers: {
        Authorization: `${Cookies.get('token')}`,
      },
    })
    .then((response) => {
      setData(response.data)
    })
    .catch(error => {
      console.error('Error Fetching Data: ', error);
    });
  }, [updateForumList, updateCommentList])

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
            <GreenButton title={'Pilih Foto'} />
          </Card>
          <Heading mt={8}>Informasi Akun</Heading>
          <Card gap={4} p={8} mt={4}>
            <Text fontWeight={'semibold'}>Nama</Text>
            <Text>{ data.userinfo?.name }</Text>
            <Text fontWeight={'semibold'}>Email</Text>
            <Text>{ data.userinfo?.email }</Text>
            <EditProfileModal />
          </Card>
        </Flex>

        <Flex flexDirection={'column'} flex={1}>
          <AddTopikModal />
          <ProfileTabs dataComment={data.userComment} dataForum={data.userforum} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
