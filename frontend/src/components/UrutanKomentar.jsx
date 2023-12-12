import { Flex, HStack, Text } from '@chakra-ui/react'
import { Clock } from "@phosphor-icons/react"

const UrutanKomentar = () => {
  return (
    <Flex gap={4} alignItems={'center'} fontWeight={'semibold'}>
        <Text>Urutan Komentar</Text>
        <HStack>
            <Flex 
                borderWidth={3} 
                borderColor={'#4F7B58'}
                py={2}
                px={4}
                rounded={'full'}
                alignItems={'center'}
                gap={2}
            >
                <Clock />
                <Text>Terbaru</Text>
            </Flex>
            <Flex 
                borderWidth={3} 
                borderColor={'#4F7B58'}
                py={2}
                px={4}
                rounded={'full'}
                alignItems={'center'}
                gap={2}
            >
                <Clock />
                <Text>Terlama</Text>
            </Flex>
        </HStack>
    </Flex>
  )
}

export default UrutanKomentar