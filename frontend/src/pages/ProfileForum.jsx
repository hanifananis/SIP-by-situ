import { Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import DeleteForumModal from './Admin/Forum/DeleteForumModal'
import EditForumModal from './Admin/Forum/EditForumModal'
import GoToForum from '../components/GoToForum'

const ProfileForum = ({ data }) => {
  return (
    <TableContainer>
        <Table variant='simple'>
            <Thead>
            <Tr>
                <Th>Judul</Th>
                <Th>Isi</Th>
                <Th>Aksi</Th>
            </Tr>
            </Thead>
            <Tbody>
                {data?.map((val) => (
                    <Tr key={val._id}>
                        <Td>{val.judul}</Td>
                        <Td>{val.isi}</Td>
                        <Td>
                            <Flex>
                                <GoToForum id={val._id} />
                                <EditForumModal forumId={val._id} />
                                <DeleteForumModal forumId={val._id} />
                            </Flex>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </TableContainer>
  )
}

export default ProfileForum