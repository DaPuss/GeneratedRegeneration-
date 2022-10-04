import React from 'react'
import { Center, Text, Heading, AspectRatio } from '@chakra-ui/react'
import Stack from '../Stack'
import ChakraImage from '../ChakraImage'
import { content } from '../../data/content'

const VisionSection = () => {
  return (
    <Stack reverseColumn={true}>
      <AspectRatio ratio={1 / 1} width={{ base: '100%', md: '50%' }}>
        <ChakraImage layout={'fill'} src={'/main2.jpg'} />
      </AspectRatio>
      <Center
        margin={'0 !important'}
        flexDirection={'column'}
        width={{ base: '100%', md: '50%' }}
        padding={'5rem'}
      >
        <Heading
          size={{ base: '2xl', lg: '3xl', xl: '4xl' }}
          marginBottom={'2rem'}
        >
          {content.visionSection.title}
        </Heading>
        <Text>{content.visionSection.content}</Text>
      </Center>
    </Stack>
  )
}

export default VisionSection
