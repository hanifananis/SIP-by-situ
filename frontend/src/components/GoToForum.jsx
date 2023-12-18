import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const GoToForum = ({id}) => {
  return (
    <Link to={`/forum/${id}`}>
        <Button colorScheme='yellow' mr={2}>
            <i class="ph-bold ph-arrow-square-out"></i>
        </Button>
    </Link>
  )
}

export default GoToForum