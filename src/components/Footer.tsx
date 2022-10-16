import Link from 'next/link'
import React from 'react'
import { Stack, Text } from '@chakra-ui/react'
import { content } from '../data/content'
import { Icon } from '@chakra-ui/react'
import { BsDiscord, BsTwitter } from 'react-icons/bs'
import { FaBook, FaQuestionCircle } from 'react-icons/fa'
import { Tooltip } from '@chakra-ui/react'

function Footer() {
  return (
    <Stack
      fontWeight={600}
      alignItems={'center'}
      bg={'section.footer'}
      color={'black'}
      padding={'1rem'}
    >
      <Stack paddingY={'10px'} spacing={'4rem'} direction={'row'}>
        <Tooltip placement="top" cursor={'pointer'} label="Twitter">
          <span>
            <Link href={content.twitterLink}>
              <Icon
                _hover={{ fill: 'white' }}
                cursor={'pointer'}
                w={'35px'}
                h={'35px'}
                as={BsTwitter}
              />
            </Link>
          </span>
        </Tooltip>
        <Tooltip placement="top" cursor={'pointer'} label="Discord">
          <span>
            <Link href={content.discordLink}>
              <Icon
                _hover={{ fill: 'white' }}
                cursor={'pointer'}
                w={'35px'}
                h={'35px'}
                as={BsDiscord}
              />
            </Link>
          </span>
        </Tooltip>
        <Tooltip placement="top" label="Terms and Conditions">
          <span>
            <Link href="/terms" scroll={true}>
              <Icon
                _hover={{ fill: 'white' }}
                cursor={'pointer'}
                w={'35px'}
                h={'35px'}
                as={FaBook}
              />
            </Link>
          </span>
        </Tooltip>
        <Tooltip placement="top" label="Frequently Asked Questions">
          <span>
            <Link href={'/faq'}>
              <Icon
                _hover={{ fill: 'white' }}
                cursor={'pointer'}
                w={'35px'}
                h={'35px'}
                as={FaQuestionCircle}
              />
            </Link>
          </span>
        </Tooltip>
      </Stack>
      <Text>{'Made with ❤️ by Dylan'}</Text>
    </Stack>
  )
}

export default Footer
