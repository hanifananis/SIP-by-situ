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
    .get(`${import.meta.env.VITE_URL}/user-info`, {
      headers: {
        Authorization: `${Cookies.get('token')}`,
      },
    })
    .then((response) => {
      setData(response.data);
    })
    .catch(error => {
      console.error('Error Fetching Data: ', error);
    });
  }, [updateForumList, updateCommentList])

  return (
    <Flex
      marginY={{base: 12, md: 16}}
      px={{base: 6, md: 42, xl: 52}}
      flexDir={'column'}
    >
      <Banner title={"Profil Saya"} />
      <Flex gap={8} flexDir={{base: 'column', md: 'row'}}>
          {/* <Heading>Foto Profil</Heading>
          <Card maxW={'sm'} gap={4} p={8} mt={4}>
            <img src="/assets/person.png" alt="Profile" />
            <GreenButton title={'Pilih Foto'} />
          </Card> */}
        <Card gap={4} p={8} minW={{base: '2xs', lg: 'xs'}}>
          <Text fontWeight={'semibold'}>Nama</Text>
          <Text>{ data.userinfo?.name }</Text>
          <Text fontWeight={'semibold'}>Email</Text>
          <Text>{ data.userinfo?.email }</Text>
          <EditProfileModal userId={data.userinfo?._id} />
        </Card>

        <ProfileTabs dataComment={data.userComment} dataForum={data.userforum} />
      </Flex>
    </Flex>
  );
};

export default Profile;
