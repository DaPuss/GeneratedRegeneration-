import React from 'react'
import styles from '../styles/Home.module.css'
import Logo from './Logo'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      Powered by The Trees
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
