import { Stack as ChakraStack } from '@chakra-ui/react'
import React from 'react'

type props = {
  children: React.ReactNode
  reverseColumn?: boolean
}
const Stack = ({ children, reverseColumn = false }: props) => {
  const direction = reverseColumn ? 'column-reverse' : 'column'
  return (
    <ChakraStack
      spacing={0}
      width={'100%'}
      direction={{ base: direction, md: 'row' }}
      fontSize={'lg'}
    >
      {children}
    </ChakraStack>
  )
}

export default Stack
