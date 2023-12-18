import { Button, Flex, HStack, Text } from '@chakra-ui/react'
import { Clock } from "@phosphor-icons/react";
import { useState } from 'react';

const UrutanKomentar = ({ data, onSort }) => {
    const [terbaru, setTerbaru] = useState(false);
    const [terlama, setTerlama] = useState(false);

    const handleTerbaru = () => {
        setTerbaru(true);
        setTerlama(false);

        const sortedData = [...data].sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
    
            return dateB - dateA;
        });

        onSort(sortedData);
    };

    const handleTerlama = () => {
        setTerbaru(false);
        setTerlama(true);

        const sortedData = [...data].sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
    
            return dateA - dateB;
        });

        onSort(sortedData);
    };

    return (
        <Flex gap={4} alignItems={'center'} fontWeight={'semibold'}>
            <Text>Urutan Komentar</Text>
            <HStack>
                <Button
                    leftIcon={<Clock />}
                    borderWidth={3} 
                    borderColor={'#4F7B58'}
                    py={5}
                    px={4}
                    rounded={'full'}
                    alignItems={'center'}
                    gap={2}
                    bgColor={'white'}
                    onClick={handleTerbaru}
                >
                    <Text>Terbaru</Text>
                </Button>
                <Button
                    leftIcon={<Clock />}
                    borderWidth={3} 
                    borderColor={'#4F7B58'}
                    py={5}
                    px={4}
                    rounded={'full'}
                    alignItems={'center'}
                    gap={2}
                    bgColor={'white'}
                    onClick={handleTerlama}
                >
                    <Text>Terlama</Text>
                </Button>
            </HStack>
        </Flex>
    );
}

export default UrutanKomentar;