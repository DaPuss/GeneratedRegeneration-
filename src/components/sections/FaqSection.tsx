import { Center } from '@chakra-ui/react'
import { Accordian } from '../'
import { content } from '../../data/content'

const FaqSection = () => {
  return (
    <Center
      margin={'0 !important'}
      flexDirection={'column'}
      width={'100%'}
      paddingLeft={{ md: '5rem', base: '2rem' }}
      paddingRight={{ md: '5rem', base: '2rem' }}
    >
      <Accordian content={content.faq} />
    </Center>
  )
}

export default FaqSection
