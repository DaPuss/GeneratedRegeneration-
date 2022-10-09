import React from 'react'
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
    <Stack
      bg={'section.benefits'}
      paddingX={'4rem'}
      paddingY={'4rem'}
      fontSize={'lg'}
    >
      <Heading
        size={{ base: '2xl', lg: '3xl', xl: '4xl' }}
        marginBottom={'4rem'}
      >
        Benefits
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingBottom={'1rem'}
        paddingTop={'1rem'}
      >
        <VStack>
          <GiFruitTree size={150} />
          <Text paddingTop={'4rem'} fontWeight={'bold'} fontSize={'4xl'}>
            1.
          </Text>
          <Text mt={'1rem !important'}>{content.benefits.benefit1}</Text>
        </VStack>
        <VStack>
          <GiEarthAmerica size={150} />
          <Text paddingTop={'4rem'} fontWeight={'bold'} fontSize={'4xl'}>
            2.
          </Text>
          <Text mt={'1rem !important'}>{content.benefits.benefit2}</Text>
        </VStack>
        <VStack>
          <GiRiver size={150} />
          <Text paddingTop={'4rem'} fontWeight={'bold'} fontSize={'4xl'}>
            3.
          </Text>
          <Text mt={'1rem !important'}>{content.benefits.benefit3}</Text>
        </VStack>
        <VStack>
          <GiHealthPotion size={150} />
          <Text paddingTop={'4rem'} fontWeight={'bold'} fontSize={'4xl'}>
            4.
          </Text>
          <Text mt={'1rem !important'}>{content.benefits.benefit4}</Text>
        </VStack>
        <VStack>
          <BiHappyHeartEyes size={150} />
          <Text paddingTop={'4rem'} fontWeight={'bold'} fontSize={'4xl'}>
            5.
          </Text>
          <Text mt={'1rem !important'}>{content.benefits.benefit5}</Text>
        </VStack>
      </Stack>
    </Stack>
  )
}

export default BenefitSection
