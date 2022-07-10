import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Input,
  Container,
  useNumberInput,
  Text,
  Divider,
} from '@chakra-ui/react'

const Mint = () => {
  const { getInputProps } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 5,
  })

  const input = getInputProps()

  return (
    <Center>
      <Flex
        width={'50%'}
        alignItems={'center'}
        margin={'3rem'}
        direction={'column'}
      >
        <Heading size={'2xl'} marginTop={'3rem'} marginBottom={'3rem'}>
          Mint your Tree
        </Heading>
        <HStack>
          <Input
            borderRightRadius={0}
            borderLeftRadius={20}
            border={'none'}
            width={'15%'}
            bg="#fafafa"
            borderColor="black"
            {...input}
          />
          <Button
            border={'none'}
            marginLeft={'0 !important'}
            borderLeftRadius={0}
            borderRightRadius={20}
            bg={'brand.lightMalachite'}
            width={'85%'}
          >
            Connect Wallet
          </Button>
        </HStack>
        <Container
          marginTop={5}
          padding={0}
          paddingLeft={'1rem'}
          paddingRight={'1rem'}
        >
          <HStack>
            <Text width={'100%'}>1 x Tree</Text>
            <Text width={'100%'} textAlign={'right'}>
              0.58eth
            </Text>
          </HStack>
          <Divider borderColor={'black'} />
          <HStack width={'100%'}>
            <Text width={'100%'}>Total</Text>
            <Text width={'100%'} textAlign={'right'}>
              0.58eth
            </Text>
          </HStack>
        </Container>
      </Flex>
    </Center>
  )
}

export default Mint
