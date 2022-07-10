import { Stack as ChakraStack } from '@chakra-ui/react'
import React from 'react'

const Stack = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraStack
      spacing={0}
      width={'100%'}
      direction={{ base: 'column', md: 'row' }}
    >
      {children}
    </ChakraStack>
  )
}

export default Stack
