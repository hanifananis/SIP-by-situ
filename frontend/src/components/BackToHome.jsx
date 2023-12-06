import { Flex, Text } from '@chakra-ui/react';
import { ArrowLeft } from '@phosphor-icons/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackToHome = () => {
    const navigate = useNavigate();

    return (
        <Flex
            alignItems={'center'}
            gap={4}
            fontWeight={'bold'}
        >
            <button onClick={() => navigate(-1)}><ArrowLeft /></button>
            <Text>Back to Home</Text>
        </Flex>
    )
}

export default BackToHome