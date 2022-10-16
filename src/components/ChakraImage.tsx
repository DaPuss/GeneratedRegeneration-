import Image from 'next/image'
import { chakra } from '@chakra-ui/react'

const ChakraImage = chakra(Image, {
  shouldForwardProp: (prop: string) =>
    ['width', 'height', 'layout', 'src', 'alt', 'priority'].includes(prop),
})

export default ChakraImage
