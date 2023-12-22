import { Container, Heading } from '@chakra-ui/react'

const DetailHeader = ({ title, img }) => {
  return (
    <Container
      centerContent
      maxW='container.sm'
    >  
      <Heading
        fontSize={{base: 32, md: 48}} 
        fontWeight={'bold'}
        my={{base: 6, md: 10}}
        align={'center'}
      > 
        {title}
      </Heading>
      <img src={img}></img>
    </Container>
  )
}

export default DetailHeader