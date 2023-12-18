import { Container, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EditForumModal from './EditForumModal';
import DeleteForumModal from './DeleteForumModal';
import { useCommentContext } from '../../../context/ForumProvider';

const ManageComment = () => {
    const [data, setData] = useState([]);
    const { comment, updateCommentList } = useCommentContext();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL}/comments`)
        .then((response) => {
            setData(response.data)
        })
    }, [updateCommentList])
    
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
                            <Th>Comment</Th>
                            <Th>Action</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        {data.map((post, index) => (
                            <Tr key={index}>
                                <Td>{index + 1}</Td>
                                <Td>{post.user.name}</Td>
                                <Td>{post.content}</Td>
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

export default ManageComment