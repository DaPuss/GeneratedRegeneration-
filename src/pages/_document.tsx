import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { useEffect } from 'react'

export default class MyDocument extends NextDocument {
  render() {
    function handleState() {
      window.splitbee.track('Button Click')
    }

    useEffect(() => {
      window.addEventListener('load', handleState)
      return () => {
        window.removeEventListener('load', handleState)
      }
    })
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Maitree:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
            rel="stylesheet"
          />
          <script async src="https://cdn.splitbee.io/sb.js"></script>
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
