import { Flex, Link, Text } from '@chakra-ui/react'
import { Globe, InstagramLogo, FacebookLogo } from "@phosphor-icons/react"
import React from 'react'

const SocialMedia = (props) => {
  return (
    <Flex
        mx={'auto'}
        mt={4}
        gap={4}
    >
        <Flex gap={2} alignItems={'center'}>
            <Globe size={24} />
            <Link fontSize={'xs'}>
                { props.website }
            </Link>
        </Flex>
        <Flex gap={2} alignItems={'center'}>
            <InstagramLogo size={24} />
            <Link fontSize={'xs'}>
                { props.instagram }
            </Link>
        </Flex>
        <Flex gap={2} alignItems={'center'}>
            <FacebookLogo size={24} />
            <Link fontSize={'xs'}>
                { props.facebook }
            </Link>
        </Flex>
    </Flex>
  )
}

export default SocialMedia