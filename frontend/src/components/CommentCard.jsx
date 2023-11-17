import { Card, CardBody, Text } from '@chakra-ui/react'
import React from 'react'

const CommentCard = () => {
  return (
    <Card  
      bgColor={'white'}
      borderWidth={3}
      borderColor={'#540302'}
      rounded={'2xl'}
    >
      <CardBody>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus itaque corporis velit accusamus vero asperiores, blanditiis quidem qui quis eligendi! Consequatur dicta quisquam at porro! Quibusdam explicabo iusto distinctio corporis?
        <Text color={'#979797'} fontSize={'sm'} mt={2}>02-10-2023 14.30</Text>
      </CardBody>
    </Card>
  )
}

export default CommentCard