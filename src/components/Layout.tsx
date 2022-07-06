import Head from 'next/head'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

const Layout = ({ children }:{children: React.ReactNode}) => {
  return (
    <>
      <Head>
        <title>Generated Regeneration</title>
        <meta name="description" content="Generated Regeneration - AI Generated NFTs supporting forrest regeneration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;