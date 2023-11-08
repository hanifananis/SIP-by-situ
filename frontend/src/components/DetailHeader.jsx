import { Container, Heading } from '@chakra-ui/react'

const DetailHeader = ({ title, img }) => {
  return (
    <Container
        centerContent
        maxW='container.sm'>  
        <Heading
          my={8}
          fontSize={48}> {title}
        </Heading>
        <img src={img}></img>
    </Container>
  )
}

export default DetailHeader