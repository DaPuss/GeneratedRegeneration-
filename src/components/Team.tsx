import React from 'react'
import {
  Container,
  Heading,
  Box,
  Stack,
  useBreakpointValue,
  Text,
} from '@chakra-ui/react'
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

const Team = () => {
  return (
    <Container minWidth="100%">
      <Stack spacing={10} alignItems={'center'}>
        <Heading>Team</Heading>
        <Stack
          wrap={'wrap'}
          justifyContent={'space-evenly'}
          direction={'row'}
          minWidth="100%"
        >
          <Card role={'The Code Monkey'} name={'DaPuss'} twitter={'@DaPuss'} />
          <Card role={'All Round Guru'} name={'DaPuss'} twitter={'@DaPuss'} />
          <Card role={'The AI Guy'} name={'DaPuss'} twitter={'@DaPuss'} />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Team
