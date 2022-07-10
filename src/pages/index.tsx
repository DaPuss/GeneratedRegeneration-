import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'
import { Stack, Footer } from '../components'
import {
  MintSection,
  TitleSection,
  AboutProjectSection,
  VisionSection,
  AboutMintSection,
  FaqSection,
  TeamSection,
  BenefitSection,
  RoadMapSection,
  KeyDateSection,
} from '../components/sections'
const Home: NextPage = () => {
  return (
    <Flex direction={'column'}>
      {/** Header && Mint Stack  */}
      <Stack>
        <TitleSection />
        <MintSection />
      </Stack>
      {/** Launch Info Stack  */}
      <KeyDateSection />
      {/** About this project Section */}
      <AboutProjectSection />
      {/** Vision Section  */}
      <VisionSection />
      {/** Roadmap Section  */}
      <RoadMapSection />
      {/** About the Mint Section  */}
      <AboutMintSection />
      {/** Benefits Section  */}
      <BenefitSection />
      {/** FAQ Section  */}
      <FaqSection />
      {/** Team Section  */}
      <TeamSection />
      <Footer />
    </Flex>
  )
}

export default Home
