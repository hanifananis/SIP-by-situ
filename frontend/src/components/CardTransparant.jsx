import { Card, CardHeader, CardBody, Heading } from '@chakra-ui/react'
import React from 'react'

const CardTransparant = ({ title, value }) => {
  return (
    <Card
      bgColor={'white'}
      borderWidth={3}
      borderColor={'#540302'}
    >
      <CardHeader>
        <Heading size='md'>{title}</Heading>
      </CardHeader>

      <CardBody>
        {value}
      </CardBody>

    </Card>
  )
}

export default CardTransparant