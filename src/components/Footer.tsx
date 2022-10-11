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
        <Link href={content.twitterLink}>
          <Tooltip placement="top" cursor={'pointer'} label="Twitter">
            <span>
              <Icon
                _hover={{ fill: 'white' }}
                cursor={'pointer'}
                w={'35px'}
                h={'35px'}
                as={BsTwitter}
              />
            </span>
          </Tooltip>
        </Link>
        <Link href={content.discordLink}>
          <Tooltip placement="top" cursor={'pointer'} label="Discord">
            <span>
              <Icon
                _hover={{ fill: 'white' }}
                cursor={'pointer'}
                w={'35px'}
                h={'35px'}
                as={BsDiscord}
              />
            </span>
          </Tooltip>
        </Link>
        <Link href="/terms">
          <Tooltip placement="top" label="Terms and Conditions">
            <span>
              <Icon
                _hover={{ fill: 'white' }}
                cursor={'pointer'}
                w={'35px'}
                h={'35px'}
                as={FaBook}
              />
            </span>
          </Tooltip>
        </Link>
        <Link href={'/faq'}>
          <Tooltip placement="top" label="Frequently Asked Questions">
            <span>
              <Icon
                _hover={{ fill: 'white' }}
                cursor={'pointer'}
                w={'35px'}
                h={'35px'}
                as={FaQuestionCircle}
              />
            </span>
          </Tooltip>
        </Link>
      </Stack>
      <Text>{'Made with ❤️ by Dylan'}</Text>
    </Stack>
  )
}

export default Footer
