import { Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import BerikanKomentar from './BerikanKomentar'
import UserForum from './UserForum'

const Replies = ({disclosureProps, data}) => {
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
                <BerikanKomentar />
            </Flex>
        </>
    )
}

export default Replies