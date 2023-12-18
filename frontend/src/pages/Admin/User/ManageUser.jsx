import React, { useEffect, useState } from 'react';
import { Container, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import AddUserModal from './AddUserModal';
import DetailUserModal from './DetailUserModal';
import EditUserModal from './EditUserModal';
import DeleteUserModal from './DeleteUserModal';
import { useUserContext } from '../../../context/UserProvider';

const ManageUser = () => {
  const [data, setData] = useState([]);
  const { users, updateUserList } = useUserContext();

  useEffect(() => {
    axios
      .get('http://localhost:5000/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, [updateUserList]);

  return (
    <Flex flexDirection={'column'}>
      <AddUserModal />
      <Container 
        maxW='container.xl' 
        bgColor={'white'} 
        py={6} 
        px={8} 
        rounded={'lg'}
        mt={4}
      >
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((user, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.roles}</Td>
                  <Td>
                    <DetailUserModal userId={user._id} />
                    <EditUserModal userId={user._id} />
                    <DeleteUserModal userId={user._id} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </Flex>
  );
};

export default ManageUser;