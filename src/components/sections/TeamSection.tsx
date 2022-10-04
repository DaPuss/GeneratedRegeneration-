import { Heading, Stack } from '@chakra-ui/react'
import { Card } from '../'

const TeamSection = () => {
  return (
    <Stack
      margin={'0 !important'}
      flexDirection={'column'}
      width={'100%'}
      paddingX={'2rem'}
      paddingY={'2rem'}
      spacing={'2rem'}
    >
      <Heading size={{ base: '2xl', lg: '3xl', xl: '4xl' }}>Team</Heading>
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
  )
}

export default TeamSection
