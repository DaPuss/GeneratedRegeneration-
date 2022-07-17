import { Center } from '@chakra-ui/react'
import { Team } from '../'

const TeamSection = () => {
  return (
    <Center
      margin={'0 !important'}
      flexDirection={'column'}
      width={'100%'}
      paddingLeft={{ md: '5rem', base: '2rem' }}
      paddingRight={{ md: '5rem', base: '2rem' }}
      paddingBottom={'5rem'}
    >
      <Team />
    </Center>
  )
}

export default TeamSection
