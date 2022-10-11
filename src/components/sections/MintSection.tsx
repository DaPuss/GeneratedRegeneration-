import React from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import { FaQuestionCircle } from 'react-icons/fa'
import Mint from '../Mint'
import Web3Connect from '../Web3Connect'
import SocialButton from '../SocialButton'

import { content } from '../../data/content'

const MintSection = () => {
  return (
    <Box ml={'0 !important'} width={{ base: '100%', md: '50%' }}>
      <HStack ml={{ base: '2rem', md: '5rem' }} pt={'2rem'}>
        <SocialButton
          link={content.discordLink}
          icon={<BsDiscord fill={'white'} size={'1.5rem'} />}
          label="Discord"
        />
        <SocialButton
          link={content.twitterLink}
          icon={<BsTwitter fill={'white'} size={'1.5rem'} />}
          label="Twitter"
        />
        <SocialButton
          link={'/faq'}
          icon={<FaQuestionCircle fill={'white'} size={'1.5rem'} />}
          label="Frequently Asked Questions"
        />
        <Box display={'flex'} flexGrow={1}></Box>
        <Web3Connect
          borderLeftRadius={20}
          borderRightRadius={20}
          mr={{ base: '2rem !important' }}
        />
      </HStack>
      <Mint />
    </Box>
  )
}

export default MintSection
