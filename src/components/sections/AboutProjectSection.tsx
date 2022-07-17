import { Center, Text, Heading, AspectRatio } from '@chakra-ui/react'
import Stack from '../Stack'
import ChakraImage from '../ChakraImage'
import { content } from '../../data/content'

const AboutProjectSection = () => {
  return (
    <Stack>
      <Center
        margin={'0 !important'}
        flexDirection={'column'}
        width={{ base: '100%', md: '50%' }}
        padding={'5rem'}
      >
        <Heading marginBottom={'2rem'}>
          {content.aboutProjectSection.title}
        </Heading>
        <Text>{content.aboutProjectSection.content}</Text>
      </Center>
      <AspectRatio ratio={1 / 1} width={{ base: '100%', md: '50%' }}>
        <ChakraImage layout={'fill'} src={'/main1.jpg'} />
      </AspectRatio>
    </Stack>
  )
}

export default AboutProjectSection
