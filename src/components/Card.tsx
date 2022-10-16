import React from 'react'
import { Heading, Box, useBreakpointValue, Text } from '@chakra-ui/react'
import ChakraImage from './ChakraImage'

type CardProps = {
  role: string
  name: string
  twitter: string
  image: string
}

const Card = ({ role, name, twitter, image }: CardProps) => {
  const size = useBreakpointValue({ base: '150', md: '250' })
  return (
    <Box textAlign={'center'}>
      <Box>
        <ChakraImage
          priority
          borderRadius={10}
          src={image}
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
