import { Card, CardBody, CardHeader, Text, SkeletonText, Skeleton } from '@chakra-ui/react';
import UserForum from './UserForum';
import BerikanKomentar from './BerikanKomentar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Cookies from 'js-cookie';

const MainPost = ({ forumId, judul, isi, namaPenulis, createdAt }) => {
  const handleClick = (values) => {
    axios
      .post(`${import.meta.env.VITE_URL}/comments`, {
        forum_id: forumId,
        penulis_id: Cookies.get('user_id'),
        content: values.content,
      })
      .then(() => {
        toast.success('Add comment berhasil');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Login terlebih dahulu');
      });
  };

  return (
    <Card bgColor={'#F3EBBD'} shadow={'lg'} rounded={'2xl'}>
      <CardHeader>
        <UserForum authorName={namaPenulis} tanggal={createdAt} />
      </CardHeader>
      <CardBody pt={0}>
        {judul ? (
          <Text fontSize={'2xl'}>{judul}</Text>
        ) : (
          <SkeletonText startColor='whiteAlpha.800' endColor='whiteAlpha.600' noOfLines={1} spacing="4" skeletonHeight='4' py={4} />
        )}
        {isi ? (
          <Text pt={2} pb={4}>
            {isi}
          </Text>
        ) : (
          <Skeleton startColor='whiteAlpha.800' endColor='whiteAlpha.600'>
            <Text pt={2} pb={6} mb={4}>
              {isi}
            </Text>
          </Skeleton>
        )}
        <BerikanKomentar handleClick={handleClick} title={'Comment'} />
      </CardBody>
    </Card>
  );
};

export default MainPost;