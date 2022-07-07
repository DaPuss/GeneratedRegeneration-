import React from 'react'
import { Container, Heading, Box, Stack } from '@chakra-ui/react'
import ChakraImage from './ChakraImage'

type CardProps = {
  role: string
  name: string
}

const Card = ({ role, name }: CardProps) => {
  return (
    <Box textAlign={'center'}>
      <Box>
        <ChakraImage
          borderRadius={10}
          src={'/ThePussPFP.jpg'}
          width={250}
          height={250}
          alt={`${role}-card`}
        />
      </Box>
      <Heading>{role}</Heading>
      <Heading size={'md'}>{name}</Heading>
    </Box>
  )
}

const Team = () => {
  return (
    <Container minWidth="100%">
      <Stack spacing={10} alignItems={'center'}>
        <Heading>Team</Heading>
        <Stack
          minWidth="100%"
          margin={5}
          justifyContent="space-evenly"
          alignItems={'Center'}
          spacing={{ base: 10, md: 5 }}
          direction={{ base: 'column', sm: 'row' }}
        >
          <Card role={'The Code Monkey'} name={'DaPuss'} />
          <Card role={'All Round Guru'} name={'DaPuss'} />
          <Card role={'The AI Guy'} name={'DaPuss'} />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Team
