import React from 'react'
import { Heading, Box, useBreakpointValue, Text } from '@chakra-ui/react'
import ChakraImage from './ChakraImage'

type CardProps = {
  role: string
  name: string
  twitter: string
}

const Card = ({ role, name, twitter }: CardProps) => {
  const size = useBreakpointValue({ base: '150', md: '250' })
  return (
    <Box textAlign={'center'}>
      <Box>
        <ChakraImage
          borderRadius={10}
          src={'/ThePussPFP.jpg'}
          width={size}
          height={size}
          alt={`${role}-card`}
        />
      </Box>
      <Heading>{name}</Heading>
      <Text>{role}</Text>
      <Text>{twitter}</Text>
    </Box>
  )
}

export default Card