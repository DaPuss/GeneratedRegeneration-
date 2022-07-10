import { Flex, VStack, Heading, Text, Stack } from '@chakra-ui/react'

const KeyDateCard = ({
  date,
  time,
  group,
  maxMint,
}: {
  date: string
  time: string
  group: string
  maxMint?: number
}) => {
  const mintPrice = 0.09
  const totalSupply = 6000
  const currentSupply = 1703

  return (
    <VStack
      borderRadius={'10px'}
      spacing={'1rem'}
      padding={'3rem'}
      marginLeft={'1rem !important'}
      marginRight={'1rem !important'}
      bg={'#FFFFF0'}
    >
      <Heading>{date}</Heading>
      <Text>{time}</Text>
      <Text>{group}</Text>
      <Heading color={'brand.lightMalachite'} size={'lg'}>
        {currentSupply}/{totalSupply}
      </Heading>
      <Text>Price: {mintPrice} ETH</Text>
      {maxMint && <Text>Max Mint: {maxMint}</Text>}
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
        padding={{ base: '0', md: '5rem' }}
        width={'100%'}
        direction={{ base: 'column', md: 'row' }}
        justifyContent={'space-evenly'}
      >
        <KeyDateCard
          date={'November 1'}
          time={'11:00 AM PST / 24 hrs'}
          group={'Partners & Founders'}
          maxMint={2}
        />
        <KeyDateCard
          date={'November 2'}
          time={'11:00 AM PST / 24 hrs'}
          group={'Raffle Winners'}
          maxMint={2}
        />
        <KeyDateCard
          date={'November 3'}
          time={'11:00 AM PST / 24 hrs'}
          group={'Public Sale'}
        />
      </Stack>
    </Flex>
  )
}

export default KeyDateSection
