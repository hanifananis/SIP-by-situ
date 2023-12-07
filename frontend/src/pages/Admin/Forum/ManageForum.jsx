import React, { useEffect, useState } from 'react';
import { Container, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';

const ManageForum = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/comments')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, []);

  return (
    <Container 
      maxW='container.xl' 
      bgColor={'white'} 
      py={6} 
      px={8} 
      rounded={'lg'}
    >
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Username</Th>
              <Th>Content</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((post, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{post.user.map(val => val.name)}</Td>
                <Td>{post.content}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageForum;