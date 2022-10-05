import React, { useState } from 'react'
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Heading,
  Container,
} from '@chakra-ui/react'
import Stack from '../Stack'
import { content } from '../../data/content'

const SelectButton = ({
  onClick,
  label,
}: {
  onClick: () => void
  label: string
}) => (
  <Button onClick={onClick} variant={'link'}>
    <Text>{label}</Text>
  </Button>
)

const ContentDisplay = ({
  isVisible,
  content,
  title,
  color,
}: {
  isVisible: boolean
  content: string
  title: string
  color: string
}) => {
  {
    return isVisible ? (
      <Container
        flexGrow={1}
        flexDirection={'column'}
        padding={'2rem'}
        bg={color}
      >
        <Heading size={'xl'} marginBottom={'4rem'}>
          {title}
        </Heading>
        <Text>{content}</Text>
      </Container>
    ) : null
  }
}

const tabContent = {
  buttonTitle: 'Impact',
  color: '#ffb2d3',
  contentTitle: 'Impact',
  content: `one`,
}
const tabContent2 = {
  buttonTitle: 'Art',
  color: '#ffb2d3',
  contentTitle: 'Art',
  content: `Two`,
}
const tabs = [tabContent, tabContent2, tabContent, tabContent]
const GamePlanSection = () => {
  const [currentIndex, setcurrentIndex] = useState(0)

  return (
    <HStack>
      <Box
        margin={'0 !important'}
        flexDirection={'column'}
        width={{ base: '100%', md: '50%' }}
        padding={'2rem'}
      >
        <Heading
          size={{ base: '2xl', lg: '3xl', xl: '4xl' }}
          marginBottom={'2rem'}
        >
          {content.visionSection.title}
        </Heading>

        <VStack alignItems={'start'}>
          {tabs.map((tab, index) => (
            <SelectButton
              key={`tabbedDisplay_${index}`}
              onClick={() => setcurrentIndex(index)}
              label={tab.buttonTitle}
            />
          ))}
        </VStack>
      </Box>

      <Container
        flexDirection={'column'}
        flexGrow={1}
        maxWidth={'100%'}
        height={'100%'}
        paddingX={0}
      >
        {tabs.map((tab, index) => (
          <ContentDisplay
            key={`contentDisplay_${index}`}
            isVisible={currentIndex === index}
            color={tab.color}
            content={tab.content}
            title={tab.contentTitle}
          />
        ))}
      </Container>
    </HStack>
  )
}

export default GamePlanSection
