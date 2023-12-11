import { Button, Card, CardBody, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { ChatCircle } from '@phosphor-icons/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CommentCard = ({ comment, createdAt, total }) => {
  const { getDisclosureProps, getButtonProps } = useDisclosure()

  const [data, setData] = useState([]);
  const { _id } = useParams();

  const buttonProps = getButtonProps()
  const disclosureProps = getDisclosureProps()

  useEffect(() => {
    axios.get(`http://localhost:5000/forums/${_id}`)
      .then(response => {
        setData(response.data.comments);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      })
  }, [_id])

  // Check if data.comments is defined before mapping over it
  const comments = data.comments || [];

  return (
    <Card  
      bgColor={'white'}
      borderWidth={3}
      borderColor={'#540302'}
      rounded={'2xl'}
    >
      <CardBody>
        { comment }
        <Text color={'#979797'} fontSize={'sm'} mt={2}>{ createdAt }</Text>

        <Flex alignItems={'center'} gap={2} mt={2}>
          <Button {...buttonProps} variant={'unstyled'}>
            <ChatCircle />
            <Text>{ total }</Text>
          </Button>
        </Flex>
        {data.map((val) => (
          <Text {...disclosureProps}>
            {val.content}
          </Text>
        ))}
      </CardBody>
    </Card>
  )
}

export default CommentCard