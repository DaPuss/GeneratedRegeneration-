import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import { ChakraProvider } from '@chakra-ui/react'
import { WagmiConfig } from 'wagmi'

import customTheme from '../styles/theme'
import { client } from '../config/Web3Config'

const GlobalStyle = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 356px;
            scroll-behavior: smooth;
            font-family: 'Maitree', serif;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: '#edf0e9';
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalStyle>
        <WagmiConfig client={client}>
          <Component {...pageProps} />
        </WagmiConfig>
      </GlobalStyle>
    </ChakraProvider>
  )
}

export default MyApp
