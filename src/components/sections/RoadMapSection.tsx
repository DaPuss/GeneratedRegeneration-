import { Center, Text, Heading, AspectRatio } from '@chakra-ui/react'
import Stack from '../Stack'
import ChakraImage from '../ChakraImage'
import { content } from '../../data/content'

const RoadMapSection = () => {
  return (
    <Stack>
      <Center
        margin={'0 !important'}
        flexDirection={'column'}
        width={{ base: '100%', md: '50%' }}
        padding={'5rem'}
      >
        <Heading marginBottom={'2rem'}>{content.roadmapSection.title}</Heading>
        <Text>{content.roadmapSection.content}</Text>
      </Center>
      <AspectRatio ratio={1 / 1} width={{ base: '100%', md: '50%' }}>
        <ChakraImage layout={'fill'} src={'/main3.jpg'} />
      </AspectRatio>
    </Stack>
  )
}

export default RoadMapSection
