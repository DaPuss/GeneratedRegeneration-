import { Flex, Heading } from '@chakra-ui/react'
import Logo from '../Logo'
import { content } from '../../data/content'
const TitleSection = () => {
  return (
    <Flex
      flexDirection={'row'}
      width={{ base: '100%', md: '50%' }}
      bg={'brand.emerald'}
      alignItems={'start'}
      paddingLeft={'2rem'}
      justifyItems={'center'}
    >
      <Logo />
      <Heading
        size={{ base: 'lg', lg: 'xl', xl: '4xl' }}
        color={'white'}
        ml={5}
      >
        {content.title}
      </Heading>
    </Flex>
  )
}

export default TitleSection
