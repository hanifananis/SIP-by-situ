import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import EditCommentModal from './Admin/Forum/EditCommentModal'
import DeleteCommentModal from './Admin/Forum/DeleteCommentModal'
import GoToForum from '../components/GoToForum'

const ProfileComment = ({ data }) => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                <Tr>
                    <Th>Isi</Th>
                    <Th>Aksi</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {data?.map((val) => (
                        <Tr key={val._id}>
                            <Td>{val.content}</Td>
                            <Td>
                                <GoToForum id={val.forum_id} />
                                <EditCommentModal commentId={val._id} />
                                <DeleteCommentModal commentId={val._id} />   
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default ProfileComment