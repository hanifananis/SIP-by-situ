import { Container, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EditForumModal from './EditForumModal';
import DeleteForumModal from './DeleteForumModal';
import { useForumContext } from '../../../context/ForumProvider';

const ManageForum = () => {
    const [data, setData] = useState([]);
    const { forum, updateForumList } = useForumContext();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL}/forums`)
        .then((response) => {
            setData(response.data)
        })
    }, [updateForumList])
    
    return (
        <Flex flexDirection={'column'}>
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
                            <Th>Username</Th>
                            <Th>Judul</Th>
                            <Th>Isi</Th>
                            <Th>Action</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        {data.map((post, index) => (
                            <Tr key={index}>
                                <Td>{index + 1}</Td>
                                <Td>{post.penulis.name}</Td>
                                <Td>{post.judul}</Td>
                                <Td>{post.isi}</Td>
                                <Td>
                                    <EditForumModal forumId={post._id} />
                                    <DeleteForumModal forumId={post._id} />
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

export default ManageForum