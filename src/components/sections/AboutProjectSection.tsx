import React from 'react'
import { Center, Text, Heading, AspectRatio } from '@chakra-ui/react'
import Stack from '../Stack'
import ChakraImage from '../ChakraImage'
import { content } from '../../data/content'
import SectionWrapper from '../SectionWrapper'
const AboutProjectSection = () => {
  return (
    <SectionWrapper fill="white">
      <Stack>
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
            {content.aboutProjectSection.title}
          </Heading>
          <Text>{content.aboutProjectSection.content}</Text>
        </Center>
        <AspectRatio ratio={1 / 1} width={{ base: '100%', md: '50%' }}>
          <ChakraImage layout={'fill'} src={'/151.png'} />
        </AspectRatio>
      </Stack>
    </SectionWrapper>
  )
}

export default AboutProjectSection
