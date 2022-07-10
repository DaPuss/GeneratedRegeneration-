import { Flex, VStack, Heading, Text, Stack } from '@chakra-ui/react'

const KeyDateCard = () => {
  return (
    <VStack
      borderRadius={'10px'}
      spacing={'1rem'}
      padding={'3rem'}
      bg={'#FFFFF0'}
    >
      <Heading>Key Date 1</Heading>
      <Text>11:00 AM PST / 24 hrs</Text>
      <Text>Partners & Founders</Text>
      <Heading color={'brand.lightMalachite'} size={'lg'}>
        1703/6000
      </Heading>
      <Text>Price: 0.09 ETH</Text>
      <Text>Max Mint: 2</Text>
    </VStack>
  )
}
const KeyDateSection = () => {
  return (
    <Flex position={'relative'}>
      <Flex
        top={0}
        left={0}
        zIndex={10}
        height={'100%'}
        position={'absolute'}
        width={{ base: '0', md: '50%' }}
        bg={'brand.emerald'}
        alignItems={{ base: 'center', md: 'start' }}
      ></Flex>
      <Stack
        zIndex={20}
        padding={'5rem'}
        width={'100%'}
        direction={{ base: 'column', md: 'row' }}
        justifyContent={'space-evenly'}
      >
        <KeyDateCard />
        <KeyDateCard />
        <KeyDateCard />
      </Stack>
    </Flex>
  )
}

export default KeyDateSection
