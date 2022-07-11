import { Center } from '@chakra-ui/react'
import { Accordian } from '../'
import { content } from '../../data/content'

const FaqSection = () => {
  return (
    <Center
      margin={'0 !important'}
      flexDirection={'column'}
      width={'100%'}
      padding={'5rem'}
    >
      <Accordian content={content.faq} />
    </Center>
  )
}

export default FaqSection
