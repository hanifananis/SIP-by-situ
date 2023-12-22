import { Card, CardHeader, CardBody, Heading } from '@chakra-ui/react'
import React from 'react'

const CardTransparent = ({ title, value }) => {
  return (
    <Card
      bgColor={'white'}
      borderWidth={3}
      borderColor={'#540302'}
    >
      <CardHeader>
        <Heading
          fontSize={28}
          fontWeight={'semibold'}
        >
          {title}
        </Heading>
      </CardHeader>

      <CardBody>
        {value}
      </CardBody>

    </Card>
  )
}

export default CardTransparent