import { Stack, VStack, Heading, Text } from '@chakra-ui/react'
import {
  GiFruitTree,
  GiEarthAmerica,
  GiRiver,
  GiHealthPotion,
} from 'react-icons/gi'
import { BiHappyHeartEyes } from 'react-icons/bi'
import { content } from '../../data/content'

const BenefitSection = () => {
  return (
    <Stack bg={'section.benefits'} padding={'5rem'}>
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
          <Text>{content.benefits.benefit1}</Text>
        </VStack>
        <VStack>
          <GiEarthAmerica size={150} />
          <Heading>2</Heading>
          <Text>{content.benefits.benefit2}</Text>
        </VStack>
        <VStack>
          <GiRiver size={150} />
          <Heading>3</Heading>
          <Text>{content.benefits.benefit3}</Text>
        </VStack>
        <VStack>
          <GiHealthPotion size={150} />
          <Heading>4</Heading>
          <Text>{content.benefits.benefit4}</Text>
        </VStack>
        <VStack>
          <BiHappyHeartEyes size={150} />
          <Heading>5</Heading>
          <Text>{content.benefits.benefit5}</Text>
        </VStack>
      </Stack>
    </Stack>
  )
}

export default BenefitSection
