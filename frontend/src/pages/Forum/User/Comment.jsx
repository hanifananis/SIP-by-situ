import { Card, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const Comment = ({data}) => {
  return (
    <>
        <Heading mt={8}>Comment</Heading>
        <Card gap={4} p={8} mt={4}>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>No</Th>
                        <Th>Content</Th>
                        <Th>Action</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {data?.map((val, index) => (
                        <Tr key={val._id}>
                        <Td>{index+1}</Td>
                        <Td>{val.content}</Td>
                        <Td>
                            
                        </Td>
                        </Tr>
                    ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    </>
  )
}

export default Comment