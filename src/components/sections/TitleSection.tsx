import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { content } from '../../data/content'
const TitleSection = () => {
  return (
    <Flex
      flexDirection={'row'}
      width={{ base: '100%', md: '50%' }}
      bg={'section.title.background'}
      alignItems={'start'}
      paddingLeft={'2rem'}
      justifyItems={'center'}
    >
      {/* <Logo fill={'white'} /> */}
      <Heading
        size={{ base: 'lg', lg: '2xl', xl: '4xl' }}
        color={'section.title.header'}
        ml={5}
      >
        {content.title}
      </Heading>
    </Flex>
  )
}

export default TitleSection
