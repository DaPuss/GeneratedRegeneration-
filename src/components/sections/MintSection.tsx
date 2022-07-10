import { Box, Flex, HStack } from '@chakra-ui/react'
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import Link from '../Link'
import Mint from '../Mint'
import Web3Connect from '../Web3Connect'

const MintSection = () => {
  return (
    <Box ml={'0 !important'} width={{ base: '100%', md: '50%' }}>
      <HStack ml={{ base: '2rem', md: '5rem' }} pt={'1rem'}>
        <Flex
          bg={'brand.emerald'}
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
          bg={'brand.emerald'}
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
        <Web3Connect
          borderLeftRadius={20}
          borderRightRadius={20}
          bg={'brand.lightMalachite'}
          marginRight={'4rem !important'}
        />
      </HStack>
      <Mint />
    </Box>
  )
}

export default MintSection
