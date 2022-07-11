import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'
import Logo from './Logo'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/terms">Terms</Link>
      <Logo />
      Powered by The Trees
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
