import { Button, Card, CardBody, CardHeader, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { ChatCircle } from '@phosphor-icons/react'
import UserForum from './UserForum';
import Replies from './Replies';

const CommentCard = (props) => {
  const { getDisclosureProps, getButtonProps } = useDisclosure()

  const data = props.data;
  const buttonProps = getButtonProps()
  const disclosureProps = getDisclosureProps()

  return (
    <Card  
      bgColor={'#F3EBBD'}
      shadow={'sm'}
      rounded={'2xl'}
    >
      <CardHeader>
        <UserForum 
          authorName={data.user.name} 
          tanggal={data.created_at} 
        />
      </CardHeader>
      <CardBody pt={0}>
        <Text>
          { data.content }
        </Text>
        <Button 
          leftIcon={<ChatCircle />} 
          variant={'unstyled'} 
          {...buttonProps}
        >
          { data.replies.length }
        </Button>

        <Replies 
          disclosureProps={disclosureProps} 
          data={data.replies}
          commentId={data._id}
        />
      </CardBody>
    </Card>
  )
}

export default CommentCard