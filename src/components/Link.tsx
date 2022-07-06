import React from 'react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const LinkComponent = ({
  href,
  display,
  children,
}: {
  href: string
  display?: string | { [key: string]: string }
  children: React.ReactNode
}) => {
  return (
    <NextLink href={href} passHref>
      <Link
        display={display}
        _hover={{
          textDecoration: 'none',
        }}
        href={href}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default LinkComponent
