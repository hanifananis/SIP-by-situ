import { Input, InputGroup, InputRightElement, Button, FormControl, FormErrorMessage } from '@chakra-ui/react'
import { Formik } from 'formik'
import { contentSchema } from '../schemas/contentSchema'

const BerikanKomentar = ({ handleClick }) => {
  return (
    <Formik
      initialValues={{
        content: ''
      }}
      validationSchema={contentSchema}
      onSubmit={handleClick}
    >
      {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            <InputGroup size={'md'} mt={2}>
              <FormControl
                id='content'
                isInvalid={errors.content && touched.content}
                mb={4}
              >
                <Input
                  name="content"
                  _placeholder='Berikan Komentar'
                  fontSize="sm"
                  bg={'whiteAlpha.800'}
                  focusBorderColor='#F3EBBD'
                  border={0}
                  rounded={'xl'}
                  type="text"
                  autoComplete="off"
                  value={values.content}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.content}</FormErrorMessage>
              </FormControl>
              <InputRightElement width='4.5rem'>
                <Button type='submit' h='1.75rem' size='sm' colorScheme='teal' rounded={'xl'}>
                  Reply
                </Button>
              </InputRightElement>
            </InputGroup>
        </form>
      )}
    </Formik>
  )
}

export default BerikanKomentar