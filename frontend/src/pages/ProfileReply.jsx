import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import GoToForum from '../components/GoToForum'
import axios from 'axios'
import Cookies from 'js-cookie'
import DeleteReplyModal from './Admin/Forum/DeleteReplyModal'
import { useReplyContext } from '../context/ForumProvider'
import EditReplyModal from './Admin/Forum/EditReplyModal'

const ProfileReply = () => {
    const [data, setData] = useState([]);
    const userId = Cookies.get('user_id');
    const { reply, updateReplyList } = useReplyContext();

    useEffect(() => {
        axios.get(`http://localhost:5000/replies-by-author/${userId}`)
        .then((response) => {
            setData(response.data);
        })
    }, [updateReplyList])
    
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
                            <Td>{val.reply.content}</Td>
                            <Td>
                                <GoToForum id={val.parentComment.forum_id} />
                                <EditReplyModal commentId={val.parentComment._id} replyId={val.reply._id} userId={userId} />
                                <DeleteReplyModal commentId={val.parentComment._id} replyId={val.reply._id} userId={userId} />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default ProfileReply