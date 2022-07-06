import React from 'react'
import {
  Container,
  Heading,
  Stack,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

const MapItem = ({
  title,
  listItems,
  align,
}: {
  title: string
  listItems: string[]
  align: 'left' | 'right'
}) => {
  return (
    <Stack textAlign={align}>
      <Heading>{title}</Heading>
      <List spacing={3}>
        {listItems.map((item, index) => (
          <ListItem ml={'auto'} key={`rm-${title}-${index}`}>
            <ListIcon as={ArrowRightIcon} color="green.500" />
            {item}
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}

const RoadMap = () => {
  const phase1 = ['One', 'Two', 'Three', 'Four']
  const phase2 = ['One', 'Two', 'Three', 'Four']
  const phase3 = ['One', 'Two', 'Three', 'Four']

  return (
    <Container textAlign={'center'}>
      <Heading mb={10}>RoadMap</Heading>
      <MapItem title={'Phase 1'} listItems={phase1} align={'left'} />
      <MapItem title={'Phase 2'} listItems={phase2} align={'right'} />
      <MapItem title={'Phase 3'} listItems={phase3} align={'left'} />
    </Container>
  )
}

export default RoadMap
