import { Flex, Heading } from '@chakra-ui/react'
import Logo from '../Logo'

const TitleSection = () => {
  return (
    <Flex
      flexDirection={'row'}
      width={{ base: '100%', md: '50%' }}
      bg={'brand.emerald'}
      alignItems={{ base: 'center', md: 'start' }}
      paddingLeft={'2rem'}
    >
      <Logo />
      <Heading
        size={{ base: 'lg', lg: 'xl', xl: '2xl' }}
        color={'white'}
        ml={5}
      >
        GeneratedRegeneration
      </Heading>
    </Flex>
  )
}

export default TitleSection
