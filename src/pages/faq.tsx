import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'
import { Footer } from '../components'
import { FaqSection } from '../components/sections'
import SimpleHeader from '../components/SimpleHeader'
const Faq: NextPage = () => {
  return (
    <Flex direction={'column'} h={'100vh'}>
      <SimpleHeader />
      <FaqSection />
      <Footer />
    </Flex>
  )
}

export default Faq
