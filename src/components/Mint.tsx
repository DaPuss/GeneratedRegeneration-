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
  const { status } = useAccount()
  const [isConnected, setIsConnected] = useState(false)
  const [value, setValue] = useState('1')
  const [mintCost, setMintCost] = useState('1')
  const { write } = useMintContract()

  useEffect(() => {
    if (status == 'connected') {
      setIsConnected(true)
    }
    if (status == 'disconnected') {
      setIsConnected(false)
    }
  }, [status])
  const mintPrice = 0.09

  useEffect(() => {
    const totalPrice = (parseInt(value) * mintPrice * 100) / 100
    isNaN(totalPrice) ? setMintCost('0.00') : setMintCost(totalPrice.toFixed(2))
  }, [value])

  const onMintClick = () => {
    console.log('minting', ethers.utils.parseEther(mintCost))
    const to = '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199'
    write({
      args: [to, value],
      overrides: {
        value: ethers.utils.parseEther(mintCost),
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
              {mintCost}
              ETH
            </Text>
          </HStack>
          <Divider borderColor={'black'} />
          <HStack width={'100%'}>
            <Text width={'100%'}>Total</Text>
            <Text width={'100%'} textAlign={'right'}>
              {mintCost}
              ETH + gas
            </Text>
          </HStack>
        </Container>
      </Flex>
    </Center>
  )
}

export default Mint
