import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
// import { useColorMode } from '@chakra-ui/react'
import Accordian from '../components/Accordian'
import RoadMap from '../components/RoadMap'
import Team from '../components/Team'

const Home: NextPage = () => {
  // const { colorMode } = useColorMode()
  // const colorSecondary = {
  //   light: 'gray.700',
  //   dark: 'gray.400',
  // }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <RoadMap />
        <Team />
        <Accordian />
      </main>
    </div>
  )
}

export default Home
