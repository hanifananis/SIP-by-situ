import { Button, Flex, HStack, Text } from '@chakra-ui/react'
import { Clock } from "@phosphor-icons/react"

const UrutanKomentar = () => {
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
            >
                <Text>Terlama</Text>
            </Button>
        </HStack>
    </Flex>
  )
}

export default UrutanKomentar