import React from 'react'
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

interface AccordianProps {
  content: AccordianItemProps[]
}
interface AccordianItemProps {
  title: string
  content: string
}

const Accordian = ({ content }: AccordianProps) => {
  return (
    <Box width="100%" m={'1rem'} padding={{ base: '0', md: '1rem' }}>
      <ChakraAccordion width="100%" allowMultiple>
        {content.map((item, index) => (
          <AcordianItem
            key={`āi-${index}`}
            title={item.title}
            content={item.content}
          />
        ))}
      </ChakraAccordion>
    </Box>
  )
}

export default Accordian

const AcordianItem = ({ title, content }: AccordianItemProps) => (
  <AccordionItem border="none">
    <AccordionButton
      _focus={{
        border: '0',
        borderBottom: '4px',
        borderColor: 'section.accordian',
      }}
      _focusVisible={{
        border: '0',
        borderBottom: '4px',
        borderColor: 'section.accordian',
      }}
      _active={{
        border: '0',
        borderBottom: '4px',
        borderColor: 'section.accordian',
      }}
      _hover={{
        border: '0',
        borderBottom: '4px',
        borderColor: 'section.accordian',
      }}
      mb="5"
      border="0"
      borderBottom="4px"
      borderColor="section.accordian"
    >
      <Box flex="1" textAlign="left">
        {title}
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>{content}</AccordionPanel>
  </AccordionItem>
)
