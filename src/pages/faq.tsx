import type { NextPage } from 'next'
import { Flex, HStack, Box, Button } from '@chakra-ui/react'
import { Footer } from '../components'
import { FaqSection } from '../components/sections'
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import { FaQuestionCircle } from 'react-icons/fa'
import SocialButton from '../components/SocialButton'
import { content } from '../data/content'

const Faq: NextPage = () => {
  return (
    <Flex direction={'column'} h={'100vh'}>
      <HStack ml={{ base: '2rem', md: '5rem' }} padding={'1rem'}>
        <Button>Home</Button>
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
      <FaqSection />
      <Footer />
    </Flex>
  )
}

export default Faq
