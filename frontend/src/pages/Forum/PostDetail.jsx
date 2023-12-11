import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import CommentCard from '../../components/CommentCard'
import UrutanKomentar from '../../components/UrutanKomentar'
import Redirect from '../../components/Redirect'
import MainPost from '../../components/MainPost';

const PostDetail = () => {
  const [data, setData] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/forums/${_id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      })
  }, [_id])

  // Check if data.comments is defined before mapping over it
  const comments = data.comments || [];

  return (
    <Flex
      flexDirection={'column'}
      marginY={16}
      marginX={{base:20, xl:48}}
      gap={6}
    >
      <Redirect title={'Post'} />
      <MainPost 
        key={data._id}
        judul={data.judul}
        isi={data.isi}
        namaPenulis={data.penulis?.name}
        rolePenulis={data.penulis?.roles}
        createdAt={data.createdAt}
      />
      <UrutanKomentar />
      
      {comments.map((val) => (
        <CommentCard 
          key={val._id} 
          comment={val.content} 
          createdAt={val.created_at}
        />
      ))}
    </Flex>
  )
}

export default PostDetail