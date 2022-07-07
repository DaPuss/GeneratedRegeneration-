import type { NextPage } from 'next'
// import { useColorMode } from '@chakra-ui/react'
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  Container,
  useNumberInput,
  Text,
  Divider,
  AspectRatio,
} from '@chakra-ui/react'
import { BsTwitter, BsDiscord } from 'react-icons/bs'

import Team from '../components/Team'
import Link from '../components/Link'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import ChakraImage from '../components/ChakraImage'
import DoubleStack from '../components/DoubleStack'
const Home: NextPage = () => {
  const { getInputProps } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 5,
  })
  const input = getInputProps()

  return (
    <Flex direction={'column'}>
      {/** Header && Mint Stack  */}
      <Stack width={'100%'} direction={{ base: 'column', md: 'row' }}>
        <Flex
          flexDirection={'row'}
          width={{ base: '100%', md: '50%' }}
          bg={'brand.ateneo'}
          alignItems={{ base: 'center', md: 'start' }}
        >
          <Logo />
          <Heading size={{ base: '4xl', md: '2xl' }} color={'white'} ml={5}>
            GeneratedRegeneration
          </Heading>
        </Flex>
        <Box ml={'0 !important'} width={{ base: '100%', md: '50%' }}>
          <HStack ml={'5rem'} pt={'1rem'}>
            <Flex
              bg={'brand.ateneo'}
              width={'2.5rem'}
              height={'2.5rem'}
              borderRadius={'1.5rem'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Link href="/discord">
                <BsDiscord fill={'white'} size={'1.5rem'} />
              </Link>
            </Flex>
            <Flex
              bg={'brand.ateneo'}
              width={'2.5rem'}
              height={'2.5rem'}
              borderRadius={'1.5rem'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Link href="/twitter">
                <BsTwitter fill={'white'} size={'1.5rem'} />
              </Link>
            </Flex>
            <Box display={'flex'} flexGrow={1}></Box>
            <Button
              borderRadius={20}
              mr={'5rem !important'}
              bg={'brand.lightMalachite'}
            >
              Connect Wallet
            </Button>
          </HStack>
          <Center>
            <Flex
              width={'50%'}
              alignItems={'center'}
              margin={'3rem'}
              direction={'column'}
            >
              <Heading size={'2xl'} margin={'3rem'}>
                Mint your Tree
              </Heading>
              <HStack>
                <Input
                  borderRightRadius={0}
                  borderLeftRadius={20}
                  border={'none'}
                  width={'15%'}
                  bg="#fafafa"
                  borderColor="black"
                  {...input}
                />
                <Button
                  border={'none'}
                  marginLeft={'0 !important'}
                  borderLeftRadius={0}
                  borderRightRadius={20}
                  bg={'brand.lightMalachite'}
                  width={'85%'}
                >
                  Connect Wallet
                </Button>
              </HStack>
              <Container
                marginTop={5}
                padding={0}
                paddingLeft={'1rem'}
                paddingRight={'1rem'}
              >
                <HStack>
                  <Text width={'100%'}>1 x Tree</Text>
                  <Text width={'100%'} textAlign={'right'}>
                    0.58eth
                  </Text>
                </HStack>
                <Divider borderColor={'black'} />
                <HStack width={'100%'}>
                  <Text width={'100%'}>Total</Text>
                  <Text width={'100%'} textAlign={'right'}>
                    0.58eth
                  </Text>
                </HStack>
              </Container>
            </Flex>
          </Center>
        </Box>
      </Stack>

      {/** Launch Info Stack  */}
      <Stack>
        <Flex
          minHeight={200}
          flexDirection={'row'}
          width={{ base: '100%', md: '50%' }}
          bg={'brand.ateneo'}
          alignItems={{ base: 'center', md: 'start' }}
        ></Flex>
      </Stack>

      {/** About stack #1  */}
      <Stack width={'100%'} direction={{ base: 'column', md: 'row' }}>
        <AspectRatio ratio={1 / 1} width={{ base: '100%', md: '50%' }}>
          <ChakraImage layout={'fill'} src={'/trees1.jpg'} />
        </AspectRatio>
        <Center
          margin={'0 !important'}
          flexDirection={'column'}
          width={{ base: '100%', md: '50%' }}
          bg={'brand.emerald'}
          padding={'5rem'}
        >
          <Heading marginBottom={'2rem'}>Generated Regeneration</Heading>
          <Text fontSize={'1.5rem'}>
            But I must explain to you how all this mistaken idea of denouncing
            <br /> <br />
            pleasure and praising pain was born pleasure, but because those who
            do not know how to pursue pleasure rationally encounter consequences
            <br /> <br />
            pleasure and praising pain was born pleasure, but because those who
            do not know how to pursue pleasure rationally encounter consequences
            <br /> <br />
          </Text>
        </Center>
      </Stack>

      {/** About stack #2  */}
      <Stack width={'100%'} direction={{ base: 'column', md: 'row' }}>
        <Center
          flexDirection={'column'}
          width={{ base: '100%', md: '50%' }}
          bg={'brand.tealDeer'}
          padding={'5rem'}
        >
          <Heading marginBottom={'2rem'}>Generated Regeneration</Heading>
          <Text fontSize={'1.5rem'}>
            But I must explain to you how all this mistaken idea of denouncing
            <br /> <br />
            pleasure and praising pain was born pleasure, but because those who
            do not know how to pursue pleasure rationally encounter consequences
            <br /> <br />
            pleasure and praising pain was born pleasure, but because those who
            do not know how to pursue pleasure rationally encounter consequences
            <br /> <br />
          </Text>
        </Center>
        <AspectRatio
          margin={'0 !important'}
          ratio={1 / 1}
          width={{ base: '100%', md: '50%' }}
        >
          <ChakraImage layout={'fill'} src={'/trees1.jpg'} />
        </AspectRatio>
      </Stack>
      {/** About stack #3  */}
      <Stack width={'100%'} direction={{ base: 'column', md: 'row' }}>
        <AspectRatio ratio={1 / 1} width={{ base: '100%', md: '50%' }}>
          <ChakraImage layout={'fill'} src={'/trees1.jpg'} />
        </AspectRatio>
        <Center
          margin={'0 !important'}
          flexDirection={'column'}
          width={{ base: '100%', md: '50%' }}
          bg={'brand.alabaster'}
          padding={'5rem'}
        >
          <Heading marginBottom={'2rem'}>Generated Regeneration</Heading>
          <Text fontSize={'1.5rem'}>
            But I must explain to you how all this mistaken idea of denouncing
            <br /> <br />
            pleasure and praising pain was born pleasure, but because those who
            do not know how to pursue pleasure rationally encounter consequences
            <br /> <br />
            pleasure and praising pain was born pleasure, but because those who
            do not know how to pursue pleasure rationally encounter consequences
            <br /> <br />
          </Text>
        </Center>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        bg={'yellow'}
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box height={50}>one</Box>
        <Box height={50}>two</Box>
        <Box height={50}>three</Box>
        <Box height={50}>four</Box>
        <Box height={50}>five</Box>
      </Stack>
      <Team />
      <Footer />
    </Flex>
  )
}

export default Home
