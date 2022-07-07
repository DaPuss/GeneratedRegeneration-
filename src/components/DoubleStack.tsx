import { Stack, Box } from '@chakra-ui/react'
import React from 'react'

const DoubleStack = ({
  leftNode,
  rightNode,
}: {
  leftNode: React.ReactNode
  rightNode: React.ReactNode
}) => {
  return (
    <Stack
      height={400}
      width={'100%'}
      direction={{ base: 'column', md: 'row' }}
    >
      <Box width={{ base: '100%', md: '50%' }} marginRight={'0 !important'}>
        {leftNode}
      </Box>
      <Box width={{ base: '100%', md: '50%' }} marginLeft={'0 !important'}>
        {rightNode}
      </Box>
    </Stack>
  )
}

export default DoubleStack
