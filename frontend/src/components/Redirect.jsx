import { Flex, Text } from '@chakra-ui/react'
import { ArrowLeft } from "@phosphor-icons/react"
import { useNavigate } from 'react-router-dom'

const Redirect = ({ title }) => {
    const navigate = useNavigate();

    return (
        <Flex
            alignItems={'center'}
            gap={4}
            fontWeight={'bold'}
        >
            <button onClick={() => navigate(-1)}><ArrowLeft /></button>
            <Text>Lihat { title } Lainnya</Text>
        </Flex>
    )
}

export default Redirect