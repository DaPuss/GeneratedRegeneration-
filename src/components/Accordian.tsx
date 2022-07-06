import React from 'react'
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from '@chakra-ui/react'

const Accordian = () => {
  const title = 'Title'
  const content =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  const accList = [
    acordianItem(title, content),
    acordianItem(title, content),
    acordianItem(title, content),
    acordianItem(title, content),
  ]

  return (
    <Box width="100%" m="10" p="10">
      <Heading mb="5">Frequently Asked Questions</Heading>
      <ChakraAccordion width="100%" allowMultiple>
        {accList.map((item) => item)}
      </ChakraAccordion>
    </Box>
  )
}

export default Accordian

const acordianItem = (sectionTitle: string, sectionContent: string) => (
  <AccordionItem border="none">
    <AccordionButton
      _focus={{
        border: '0',
        borderBottom: '2px',
        borderColor: '#FCA311',
      }}
      _active={{
        border: '0',
        borderBottom: '2px',
        borderColor: '#FCA311',
      }}
      _hover={{
        border: '0',
        borderBottom: '2px',
      }}
      mb="5"
      border="0"
      borderBottom="2px"
      borderColor="#FCA311"
    >
      <Box flex="1" textAlign="left">
        {sectionTitle}
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>{sectionContent}</AccordionPanel>
  </AccordionItem>
)
