import React, { useState } from 'react'
import {
  Box,
  Text,
  Button,
  Heading,
  Container,
  Stack,
  Select,
  useMediaQuery,
} from '@chakra-ui/react'
import { content } from '../../data/content'
import SectionDivider from '../SectionDivider/Divider'

const SelectButton = ({
  onClick,
  label,
}: {
  onClick: () => void
  label: string
}) => (
  <Button
    onClick={onClick}
    variant={'link'}
    display={{ base: 'hidden', sm: 'flex' }}
  >
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
        minW={'60%'}
        minH={'500px'}
        margin={'0 !important'}
        flexDirection={'column'}
        padding={'4rem'}
        bg={color}
      >
        <Heading
          size={{ base: '2xl', lg: '3xl', xl: '4xl' }}
          marginBottom={'2rem'}
        >
          {title}
        </Heading>
        <Text>{content}</Text>
      </Container>
    ) : null
  }
}

const GamePlanSection = () => {
  const [currentIndex, setcurrentIndex] = useState(0)
  const [isLargerThan30em] = useMediaQuery('(min-width: 48em)')
  //I did this in the dumbest way for my portfolio - BIG TODO:// reaftor this in prot project
  return (
    <section style={{ position: 'relative' }}>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        minWidth={'100%'}
        alignItems={'start'}
      >
        <Box
          margin={'0 !important'}
          flexDirection={'column'}
          minW={'40%'}
          w={{ base: '100%', md: '40%' }}
          padding={'4rem'}
        >
          <Heading
            size={{ base: '2xl', lg: '3xl', xl: '4xl' }}
            marginBottom={'2rem'}
          >
            {content.visionSection.title}
          </Heading>
          <Stack
            hidden={!isLargerThan30em}
            direction={{ base: 'column', sm: 'column' }}
            alignItems={'start'}
            spacing={6}
          >
            {content.gamePlanSection.map((tab, index) => (
              <SelectButton
                key={`tabbedDisplay_${index}`}
                onClick={() => setcurrentIndex(index)}
                label={tab.title}
              />
            ))}
          </Stack>

          <Select w={'100%'} hidden={isLargerThan30em}>
            {content.gamePlanSection.map((tab, index) => (
              <option
                key={`tabbedDisplay_${index}`}
                value={tab.title}
                onClick={() => setcurrentIndex(index)}
              >
                {tab.title}
              </option>
            ))}
          </Select>
        </Box>
        {content.gamePlanSection.map((tab, index) => (
          <ContentDisplay
            key={`contentDisplay_${index}`}
            isVisible={currentIndex === index}
            color={tab.color}
            content={tab.content}
            title={tab.title}
          />
        ))}
      </Stack>
      <SectionDivider fill={'white'} />
    </section>
  )
}

export default GamePlanSection
