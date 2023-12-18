import { Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import DeleteForumModal from './Admin/Forum/DeleteForumModal'
import { Link } from 'react-router-dom'
import EditForumModal from './Admin/Forum/EditForumModal'

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
                        {/* <Link href={`/forum/${val._id}`}> */}
                            <Td>{val.judul}</Td>
                            <Td>{val.isi}</Td>
                        {/* </Link> */}
                        <Td>
                            <Flex>
                                <Link to={`/forum/${val._id}`}>
                                    <Button colorScheme='yellow' mr={2}>
                                        <i class="ph-bold ph-arrow-square-out"></i>
                                    </Button>
                                </Link>
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