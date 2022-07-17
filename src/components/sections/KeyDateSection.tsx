import { useState } from 'react'
import { Flex, VStack, Heading, Text, Stack } from '@chakra-ui/react'
import { content } from '../../data/content'
const KeyDateCard = ({
  date,
  time,
  group,
  maxMint,
}: {
  date: string
  time: string
  group: string
  maxMint?: string
}) => {
  const mintPrice = 0.09
  const totalSupply = 6000
  const [currentSupply] = useState(1703)

  return (
    <VStack
      boxShadow={'0px 0px 10px rgba(0, 0, 0, .5)'}
      spacing={'1rem'}
      padding={'3rem'}
      marginLeft={'1rem !important'}
      marginRight={'1rem !important'}
      bg={'#FFFFF0'}
    >
      <Heading>{date}</Heading>
      <Text>{time}</Text>
      <Text>{group}</Text>
      <Heading color={'section.keyDates.supply'} size={'lg'}>
        {currentSupply}/{totalSupply}
      </Heading>
      <Text>Price: {mintPrice} ETH</Text>
      {maxMint && <Text>Max Mint: {maxMint}</Text>}
    </VStack>
  )
}
const KeyDateSection = () => {
  const cards = [
    content.keyDateCards.card1,
    content.keyDateCards.card2,
    content.keyDateCards.card3,
  ]
  return (
    <Flex position={'relative'}>
      <Flex
        top={0}
        left={0}
        zIndex={10}
        height={'100%'}
        position={'absolute'}
        width={{ base: '0', md: '50%' }}
        bg={'section.title.background'}
        alignItems={{ base: 'center', md: 'start' }}
      ></Flex>
      <Stack
        zIndex={20}
        padding={{ base: '0', md: '5rem' }}
        width={'100%'}
        direction={{ base: 'column', md: 'row' }}
        justifyContent={'center'}
      >
        {cards.map((card, index) => (
          <KeyDateCard
            key={`keyDate-${index}`}
            date={card.date}
            time={card.time}
            group={card.group}
            maxMint={card.maxMint}
          />
        ))}
      </Stack>
    </Flex>
  )
}

export default KeyDateSection
