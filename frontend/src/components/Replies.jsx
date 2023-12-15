import { Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import BerikanKomentar from './BerikanKomentar'
import UserForum from './UserForum'
import Cookies from 'js-cookie'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Replies = ({disclosureProps, data, commentId}) => {
    const handleClick = (values) => {
        axios
        .post(`http://localhost:5000/comments/${commentId}/replies`, {
            penulis_id: Cookies.get('user_id'),
            content: values.content
        })
        .then(() => {
            toast.success('Add reply berhasil')
        })
        .catch(() => {
            toast.error('Login terlebih dahulu')
        })
    }

    return (
        <>
            <Flex flexDir={'column'} {...disclosureProps}>
                {
                    data.map((val) => (
                        <>
                            <UserForum authorName={val.user.name} tanggal={val.created_at} />
                            <Text py={2}>
                                { val.content }
                            </Text>
                            <Divider borderColor={'#540302'} mt={2} mb={4} />
                        </>
                    ))
                }
                <BerikanKomentar handleClick={handleClick} />
            </Flex>
        </>
    )
}

export default Replies