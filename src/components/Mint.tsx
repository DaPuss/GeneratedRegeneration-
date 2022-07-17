import { useEffect, useState } from 'react'
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
import { ethers } from 'ethers'
import { useAccount } from 'wagmi'
import { useMintContract } from '../hooks/useMintContract'
import Web3Connect from './Web3Connect'
const Mint = () => {
  const { isConnected } = useAccount()
  const { write } = useMintContract()
  const [value, setValue] = useState('1')
  const mintPrice = 0.09

  useEffect(() => {
    const mintAmount = parseInt(value)
    const totalPrice = mintAmount * mintPrice
    const cost = ethers.utils.parseEther(totalPrice.toString())
    ethers.utils.formatEther(cost)
  }, [value])

  const onMintClick = () => {
    console.log('minting')
    write({
      args: [value],
      overrides: {
        value: ethers.utils.parseEther(value),
      },
    })
  }

  return (
    <Center>
      <Flex alignItems={'center'} margin={'3rem'} direction={'column'}>
        <Heading size={'2xl'} marginTop={'3rem'} marginBottom={'3rem'}>
          Mint your Tree
        </Heading>
        <HStack>
          <NumberInput
            onChange={(value) => setValue(value)}
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
              borderLeftRadius={0}
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
              {(Math.round(parseInt(value) * mintPrice * 100) / 100).toFixed(2)}
              ETH
            </Text>
          </HStack>
          <Divider borderColor={'black'} />
          <HStack width={'100%'}>
            <Text width={'100%'}>Total</Text>
            <Text width={'100%'} textAlign={'right'}>
              {(Math.round(parseInt(value) * mintPrice * 100) / 100).toFixed(2)}
              ETH + gas
            </Text>
          </HStack>
        </Container>
      </Flex>
    </Center>
  )
}

export default Mint
