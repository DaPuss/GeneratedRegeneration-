import React from 'react'
import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { useMediaQuery } from '@chakra-ui/react'
const TitleSection = () => {
  const [isLargerThan52em] = useMediaQuery('(min-width: 52em)')

  return (
    <Flex
      flexDirection={'row'}
      width={{ base: '100%', md: '50%' }}
      bg={'section.title.background'}
      alignItems={'start'}
      padding={'1rem'}
      justifyContent={'start'}
      minHeight={{ sm: '0', md: '50vh' }}
    >
      <Image
        loader={() => 'Brand.png'}
        src="Brand.png"
        alt="Picture of the author"
        width={isLargerThan52em ? 538 : 269}
        height={isLargerThan52em ? 66 : 33}
      />
    </Flex>
  )
}

export default TitleSection
