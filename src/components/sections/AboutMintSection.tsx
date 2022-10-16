import React from 'react'
import { Center, Text, Heading, AspectRatio } from '@chakra-ui/react'
import Stack from '../Stack'
import ChakraImage from '../ChakraImage'
import { content } from '../../data/content'
import SectionWrapper from '../SectionWrapper'
const AboutMintSection = () => {
  return (
    <SectionWrapper fill="#cb95e7">
      <Stack reverseColumn={true}>
        <AspectRatio ratio={1 / 1} width={{ base: '100%', md: '50%' }}>
          <ChakraImage priority layout={'fill'} src={'/quad.png'} />
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
            {content.aboutMintSection.title}
          </Heading>
          <Text>{content.aboutMintSection.content}</Text>
        </Center>
      </Stack>
    </SectionWrapper>
  )
}

export default AboutMintSection
