import React, { useRef } from 'react'
import {
  Button,
  Flex,
  Box,
  Heading,
  useDisclosure,
  HStack,
  Stack,
} from '@chakra-ui/react'
import { IoMdMenu } from 'react-icons/io'
import { BsTwitter, BsDiscord } from 'react-icons/bs'
// import { WalletButton } from './WalletButton'
import NavigationDrawer from './NavigationDrawer'
import Link from './Link'
import Logo from './Logo'
// import { useMetaMaskAccount } from "../../context/AccountContext";

const NavigationBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ref = useRef(null)

  const navLinks = (direction: 'column' | 'row', spacing: number) => (
    <Stack direction={direction} spacing={spacing} alignItems="center">
      <Link display={{ base: 'flex', md: 'none' }} href="/">
        <Heading as="h2" size="md">
          Home
        </Heading>
      </Link>
      <Link href="/mint">
        <Heading as="h2" size="md">
          Mint
        </Heading>
      </Link>
      <Link href="/discord">
        <Box display={'flex'} alignItems="center">
          <BsDiscord size={25} />
          <Heading
            as="h2"
            size="md"
            display={{ base: 'flex', md: 'none' }}
            ml={10}
          >
            Discord
          </Heading>
        </Box>
      </Link>
      <Link href="/twitter">
        <Box display={'flex'} alignItems="center">
          <BsTwitter size={25} />
          <Heading
            as="h2"
            size="md"
            display={{ base: 'flex', md: 'none' }}
            ml={10}
          >
            Twitter
          </Heading>
        </Box>
      </Link>
    </Stack>
  )

  return (
    <Flex minWidth="100%">
      <Box mt="5" ml="10">
        <Link href="/">
          <Logo />
        </Link>
      </Box>
      <HStack spacing={50} alignItems="center" ml="auto" mt="5" mr="10">
        <Box display={{ base: 'flex', md: 'none' }}>
          <Button
            _focus={{
              bgColor: 'transparent',
            }}
            _active={{
              bgColor: 'transparent',
            }}
            _hover={{
              bgColor: 'transparent',
              color: 'red',
            }}
            bgColor="transparent"
            onClick={onOpen}
            ref={ref}
          >
            <IoMdMenu size="30" />
          </Button>
          <NavigationDrawer
            isOpen={isOpen}
            placement={'right'}
            onClose={onClose}
            btnRef={ref}
          >
            {navLinks('column', 5)}
          </NavigationDrawer>
        </Box>
        <Box display={{ base: 'none', md: 'flex' }}>{navLinks('row', 10)}</Box>
      </HStack>
    </Flex>
  )
}

export default NavigationBar
