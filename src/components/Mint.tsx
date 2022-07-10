import { useState } from 'react'
import {
  Center,
  Flex,
  Heading,
  HStack,
  Container,
  Text,
  Button,
  Divider,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react'

import { useAccount } from 'wagmi'
import Web3Connect from './Web3Connect'
const Mint = () => {
  const { isConnected } = useAccount()

  const [value, setValue] = useState(1)

  const onMintClick = () => {
    console.log('minting')
  }

  const mintPrice = 0.09

  return (
    <Center>
      <Flex
        width={'50%'}
        alignItems={'center'}
        margin={'3rem'}
        direction={'column'}
      >
        <Heading size={'2xl'} marginTop={'3rem'} marginBottom={'3rem'}>
          Mint a Tree
        </Heading>
        <HStack>
          <NumberInput
            onChange={(value) => setValue(parseInt(value))}
            keepWithinRange={true}
            defaultValue={1}
            min={0}
            max={10}
          >
            <NumberInputField
              borderRightRadius={0}
              borderLeftRadius={20}
              paddingRight={0}
              border={'1px solid #ffff'}
              bg="#fafafa"
            />
          </NumberInput>
          {isConnected ? (
            <Button
              width={'100%'}
              borderLeftRadius={0}
              borderRightRadius={20}
              bg={'brand.lightMalachite'}
              marginLeft={'0 !important'}
              onClick={onMintClick}
            >
              Mint
            </Button>
          ) : (
            <Web3Connect
              width={'100%'}
              borderLeftRadius={0}
              borderRightRadius={20}
              bg={'brand.lightMalachite'}
              marginLeft={'0 !important'}
            />
          )}
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
              {(Math.round(value * mintPrice * 100) / 100).toFixed(2)}
              ETH
            </Text>
          </HStack>
          <Divider borderColor={'black'} />
          <HStack width={'100%'}>
            <Text width={'100%'}>Total</Text>
            <Text width={'100%'} textAlign={'right'}>
              {(Math.round(value * mintPrice * 100) / 100).toFixed(2)}
              ETH + gas
            </Text>
          </HStack>
        </Container>
      </Flex>
    </Center>
  )
}

export default Mint
