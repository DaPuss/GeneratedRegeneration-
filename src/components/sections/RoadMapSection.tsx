import React from 'react'
import { Center, Text, Heading, AspectRatio } from '@chakra-ui/react'
import Stack from '../Stack'
import ChakraImage from '../ChakraImage'
import { content } from '../../data/content'
import SectionWrapper from '../SectionWrapper'
const RoadMapSection = () => {
  return (
    <SectionWrapper fill="white">
      <Stack>
        <Center
          display={'flex'}
          margin={'0 !important'}
          flexDirection={'column'}
          width={{ base: '100%', md: '50%' }}
          padding={'5rem'}
          textAlign={'left'}
        >
          <Heading
            size={{ base: '2xl', lg: '3xl', xl: '4xl' }}
            marginBottom={'2rem'}
          >
            {content.roadmapSection.title}
          </Heading>
          <Text>{content.roadmapSection.content}</Text>
        </Center>
        <AspectRatio ratio={1 / 1} width={{ base: '100%', md: '50%' }}>
          <ChakraImage priority layout={'fill'} src={'/288.png'} />
        </AspectRatio>
      </Stack>
    </SectionWrapper>
  )
}

export default RoadMapSection
