import { AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from '@chakra-ui/react'

const GreenAccordion = ({ title, desc }) => {
  return (
    <AccordionItem 
        mt={4} 
        border={'none'}
        bgColor={'#80AF85'}
        rounded={'lg'}
        color={'white'}
        p={2}>
        <h2>
            <AccordionButton
            _hover={{
            bg: 'none'
            }}>
            <Box 
                as="span" 
                flex='1' 
                textAlign='left' 
                fontWeight={'semibold'} 
                fontSize={'xl'}>
                { title }
            </Box>
            <AccordionIcon />
            </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            { desc }
        </AccordionPanel>
    </AccordionItem>
  )
}

export default GreenAccordion