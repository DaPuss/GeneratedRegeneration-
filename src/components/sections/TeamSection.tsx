import { Center } from '@chakra-ui/react'
import { Team } from '../'

const TeamSection = () => {
  return (
    <Center
      margin={'0 !important'}
      flexDirection={'column'}
      width={'100%'}
      padding={'5rem'}
    >
      <Team />
    </Center>
  )
}

export default TeamSection
