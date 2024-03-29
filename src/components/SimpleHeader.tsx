import React from 'react'
import { HStack, Box, Button } from '@chakra-ui/react'
import SocialButton from '../components/SocialButton'
import { content } from '../data/content'
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import { FaQuestionCircle } from 'react-icons/fa'
import Link from 'next/link'

const SimpleHeader = () => {
  return (
    <HStack mx={{ base: '2rem' }} padding={'1rem'}>
      <Link href={'/'}>
        <Button>Home</Button>
      </Link>
      <Box display={'flex'} flexGrow={1}></Box>

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
    </HStack>
  )
}

export default SimpleHeader
