import { Center, Heading } from '@chakra-ui/react'
import { Accordian } from '../'
import { content } from '../../data/content'

const FaqSection = () => {
  return (
    <Center
      margin={'0 !important'}
      flexDirection={'column'}
      width={'100%'}
      paddingX={'2rem'}
      flexGrow={1}
    >
      <Heading size={{ base: '2xl', lg: '3xl', xl: '4xl' }}>
        Frequently Asked Questions
      </Heading>

      <Accordian content={content.faq} />
    </Center>
  )
}

export default FaqSection
