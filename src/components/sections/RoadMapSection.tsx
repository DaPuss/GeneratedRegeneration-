import { Center, Text, Heading, AspectRatio } from '@chakra-ui/react'
import Stack from '../Stack'
import ChakraImage from '../ChakraImage'

const RoadMapSection = () => {
  return (
    <Stack>
      <Center
        margin={'0 !important'}
        flexDirection={'column'}
        width={{ base: '100%', md: '50%' }}
        padding={'5rem'}
      >
        <Heading marginBottom={'2rem'}>Roadmap</Heading>
        <Text>
          But I must explain to you how all this mistaken idea of denouncing
          <br /> <br />
          pleasure and praising pain was born pleasure, but because those who do
          not know how to pursue pleasure rationally encounter consequences
          <br /> <br />
          pleasure and praising pain was born pleasure, but because those who do
          not know how to pursue pleasure rationally encounter consequences
          <br /> <br />
        </Text>
      </Center>
      <AspectRatio ratio={1 / 1} width={{ base: '100%', md: '50%' }}>
        <ChakraImage layout={'fill'} src={'/trees1.jpg'} />
      </AspectRatio>
    </Stack>
  )
}

export default RoadMapSection
