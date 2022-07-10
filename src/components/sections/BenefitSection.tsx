import { Stack, VStack, Heading, Text } from '@chakra-ui/react'
import {
  GiFruitTree,
  GiEarthAmerica,
  GiRiver,
  GiHealthPotion,
} from 'react-icons/gi'
import { BiHappyHeartEyes } from 'react-icons/bi'

const BenefitSection = () => {
  return (
    <Stack bg={'brand.lightMalachite'} padding={'5rem'}>
      <Heading marginBottom={'4rem'} size={'3xl'}>
        Benefits
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingBottom={'4rem'}
        paddingTop={'4rem'}
      >
        <VStack>
          <GiFruitTree size={150} />
          <Heading>1</Heading>
          <Text>Plant 1000s of trees around the world</Text>
        </VStack>
        <VStack>
          <GiEarthAmerica size={150} />
          <Heading>2</Heading>
          <Text>Help prevent climate change</Text>
        </VStack>
        <VStack>
          <GiRiver size={150} />
          <Heading>3</Heading>
          <Text>Restore the environment</Text>
        </VStack>
        <VStack>
          <GiHealthPotion size={150} />
          <Heading>4</Heading>
          <Text>Make the planet healthier for everyone</Text>
        </VStack>
        <VStack>
          <BiHappyHeartEyes size={150} />
          <Heading>5</Heading>
          <Text>Improve wellbeing through increased greenspace</Text>
        </VStack>
      </Stack>
    </Stack>
  )
}

export default BenefitSection
