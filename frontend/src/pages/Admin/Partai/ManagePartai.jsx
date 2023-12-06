import React, { useEffect, useState } from 'react';
import { Container, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import DetailPartaiModal from './DetailPartaiModal';
import EditPartaiModal from './EditPartaiModal';
import DeletePartaiModal from './DeletePartaiModal';
import AddPartaiModal from './AddPartaiModal';
import { usePartaiContext } from '../../../context/PartaiProvider';

const ManagePartai = () => {
  const [data, setData] = useState([]);
  const { partai, updatePartaiList } = usePartaiContext();

  useEffect(() => {
    axios
      .get('http://localhost:5000/partaiInfos')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error)
      });
  }, [updatePartaiList])

  return (
    <Flex flexDir={'column'}>
      <AddPartaiModal />
      <Container 
        maxW='container.xl' 
        bgColor={'white'} 
        py={6} 
        px={8} 
        rounded={'lg'}
      >
        <TableContainer>
        <Table variant={'simple'}>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Name</Th>
              <Th>No Urut</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((partai, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{partai.name}</Td>
                <Td>{partai.no_urut}</Td>
                <Td>
                  <DetailPartaiModal partaiId={partai._id} />
                  <EditPartaiModal partaiId={partai._id} />
                  <DeletePartaiModal partaiId={partai._id} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      </Container>
    </Flex>
  )
}

export default ManagePartai