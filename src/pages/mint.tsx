import React from 'react'
import {
  Center,
  Button,
  Box,
  Input,
  Heading,
  VStack,
  HStack,
  useNumberInput,
  Container,
} from '@chakra-ui/react'

const Mint = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 5,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  const mint = () => {
    const { value } = input
    console.log(value)
    //console.log(`Minting ${input.value}`)
  }

  //mint page with, mint button, number input with plus and minus buttons
  return (
    <Container>
      <Center height="100vh" bgImage={''} backgroundSize="cover">
        <VStack>
          <Box>
            <Heading>Mint</Heading>
          </Box>
          <HStack>
            <Button bg="#216869" borderColor="black" {...dec}>
              -
            </Button>
            <Input bg="white" borderColor="black" {...input} />
            <Button bg="#216869" borderColor="black" {...inc}>
              +
            </Button>
          </HStack>
          <Button borderColor="black" bg="#216869" onClick={() => mint()}>
            Mint
          </Button>
        </VStack>
      </Center>
    </Container>
  )
}

export default Mint
