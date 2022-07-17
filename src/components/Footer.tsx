import Link from 'next/link'
import React from 'react'
import { Stack, Flex, Text } from '@chakra-ui/react'
import Logo from './Logo'
import { content } from '../data/content'

function Footer() {
  return (
    <Stack
      fontWeight={600}
      alignItems={'center'}
      bg={'section.footer'}
      color={'black'}
    >
      <Flex alignItems={'center'}>
        <Logo fill={'black'} />
        Powered by The Trees
      </Flex>
      <Stack spacing={'1rem'} direction={'row'}>
        <Link href={content.twitterLink}>
          <Text cursor={'pointer'} textDecoration={'underline'}>
            Twitter
          </Text>
        </Link>
        <Link href={content.discordLink}>
          <Text cursor={'pointer'} textDecoration={'underline'}>
            Discord
          </Text>
        </Link>
        <Link href="/terms">
          <Text cursor={'pointer'} textDecoration={'underline'}>
            Terms
          </Text>
        </Link>
      </Stack>
    </Stack>
  )
}

export default Footer
