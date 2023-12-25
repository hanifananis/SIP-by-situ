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
  const [sortedData, setSortedData] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/forums/${_id}`)
      .then(response => {
        setData(response.data);
        setSortedData(response.data.comments || []);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      })
  }, [])

  const handleSortData = (sortedData) => {
    setSortedData(sortedData);
  }

  return (
    <Flex
      flexDirection={'column'}
      marginY={{base: 12, md: 16}}
      px={{base: 6, md: 24, xl: 52}}
      gap={6}
    >
      <Redirect title={'Post'} />
      <MainPost 
        key={data?._id}
        forumId={data?._id}
        judul={data?.judul}
        isi={data?.isi}
        namaPenulis={data.penulis?.name}
        rolePenulis={data.penulis?.roles}
        createdAt={data?.createdAt}
      />
      
      {/* <UrutanKomentar data={sortedData} onSort={handleSortData} /> */}

      {sortedData.map((val) => (
        <CommentCard key={val._id} data={val} />
      ))}
    </Flex>
  )
}

export default PostDetail