import React, { useEffect, useState } from 'react';
import { Container, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import DetailPaslonModal from './DetailPaslonModal';
import EditPaslonModal from './EditPaslonModal';

const ManagePaslon = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/paslons')
      .then(response => {
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
    mt={4}
  >
    <TableContainer>
      <Table variant={'simple'}>
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Calon Presiden</Th>
            <Th>Calon Wakil Presiden</Th>
            <Th>No Urut</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((paslon, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{paslon.capres}</Td>
              <Td>{paslon.cawapres}</Td>
              <Td>{paslon.no_urut}</Td>
              <Td>
                <DetailPaslonModal paslonId={paslon._id} />
                <EditPaslonModal paslonId={paslon._id} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  </Container>
  )
}

export default ManagePaslon