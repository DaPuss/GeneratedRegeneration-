import React, { useEffect, useState } from 'react'
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
import { useAccount, useNetwork } from 'wagmi'
import { useWeb3 } from '../hooks/useWeb3'
import Web3Connect from './Web3Connect'
const Mint = () => {
  const { chain } = useNetwork()
  const { status } = useAccount()
  const [isConnected, setIsConnected] = useState(false)
  const [value, setValue] = useState(1)
  const [mintCost, setMintCost] = useState('1')
  const { mintNft, getMintPrice } = useWeb3()

  useEffect(() => {
    if (status == 'connected') {
      setIsConnected(true)
    }
    if (status == 'disconnected') {
      setIsConnected(false)
    }
  }, [status])

  useEffect(() => {
    setMintCost(() => getMintPrice(value))
    //eslint-disable-next-line
  }, [value])

  const isConnectToMumbai = chain?.name == 'Polygon Mumbai'
  return (
    <Center>
      <Flex alignItems={'center'} margin={'6rem'} direction={'column'}>
        <Heading
          size={{ base: '2xl', lg: '3xl', xl: '4xl' }}
          marginTop={'6rem'}
          marginBottom={'6rem'}
        >
          Mint a NFT!
        </Heading>

        {!isConnectToMumbai && (
          <Text textColor={'red'} color={'red'}>
            Connect to the Mumbai Network
          </Text>
        )}
        <HStack>
          <NumberInput
            onChange={(value) => setValue(parseInt(value))}
            keepWithinRange={true}
            defaultValue={1}
            min={0}
            max={10}
          >
            <NumberInputField
              height={'55px'}
              borderRightRadius={0}
              borderLeftRadius={10}
              paddingRight={0}
              border={'1px solid #ffff'}
              bg="#fafafa"
            />
          </NumberInput>
          {isConnected ? (
            <Button
              disabled={!isConnectToMumbai}
              height={'55px'}
              borderLeftRadius={0}
              marginLeft={'0 !important'}
              onClick={() => mintNft(value)}
            >
              Mint
            </Button>
          ) : (
            <Web3Connect
              height={'55px'}
              width={'100%'}
              borderLeftRadius={0}
              borderRightRadius={10}
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
            <Text width={'100%'}>{value} x NFT</Text>
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
