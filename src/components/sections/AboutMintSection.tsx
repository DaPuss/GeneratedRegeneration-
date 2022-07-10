import { Center, Text, Heading, AspectRatio } from '@chakra-ui/react'
import Stack from '../Stack'
import ChakraImage from '../ChakraImage'

const AboutMintSection = () => {
  return (
    <Stack reverseColumn={true}>
      <AspectRatio ratio={1 / 1} width={{ base: '100%', md: '50%' }}>
        <ChakraImage layout={'fill'} src={'/trees1.jpg'} />
      </AspectRatio>
      <Center
        margin={'0 !important'}
        flexDirection={'column'}
        width={{ base: '100%', md: '50%' }}
        padding={'5rem'}
      >
        <Heading marginBottom={'2rem'}>Generated Regeneration Mint</Heading>
        <Text>
          Supply: 6000 Price: 0.09 ETH Max Mint: 2 for DadListed 2 for Premint
          Mint dates: July 1–3 July 1 — DadList & Partners July 2 — Premint
          raffle July 3 — Public DadList members will also have the option to
          mint a Fount Gallery Patron I Card for free as they mint their Dads
          NFTs.
        </Text>
      </Center>
    </Stack>
  )
}

export default AboutMintSection
