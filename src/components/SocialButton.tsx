import React from 'react'
import { Flex, Tooltip } from '@chakra-ui/react'
import Link from './Link'

const SocialButton = ({
  icon,
  label,
  link,
}: {
  icon: React.ReactNode
  label: string
  link: string
}) => (
  <Flex
    bg={'buttons.social'}
    width={'2.5rem'}
    height={'2.5rem'}
    borderRadius={'1.5rem'}
    justifyContent={'center'}
    alignItems={'center'}
    boxShadow={'0px 0px 10px rgba(0, 0, 0, .2)'}
    _hover={{
      boxShadow: '0px 0px 10px rgba(0, 0, 0, .5)',
    }}
  >
    <Link href={link}>
      <Tooltip cursor={'pointer'} label={label}>
        <span>{icon}</span>
      </Tooltip>
    </Link>
  </Flex>
)

export default SocialButton
