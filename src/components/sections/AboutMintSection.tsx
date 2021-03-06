import { Center, Text, Heading, AspectRatio } from '@chakra-ui/react'
import Stack from '../Stack'
import ChakraImage from '../ChakraImage'
import { content } from '../../data/content'
const AboutMintSection = () => {
  return (
    <Stack reverseColumn={true}>
      <AspectRatio ratio={1 / 1} width={{ base: '100%', md: '50%' }}>
        <ChakraImage layout={'fill'} src={'/main4.jpg'} />
      </AspectRatio>
      <Center
        margin={'0 !important'}
        flexDirection={'column'}
        width={{ base: '100%', md: '50%' }}
        padding={'5rem'}
      >
        <Heading marginBottom={'2rem'}>
          {content.aboutMintSection.title}
        </Heading>
        <Text>{content.aboutMintSection.content}</Text>
      </Center>
    </Stack>
  )
}

export default AboutMintSection
