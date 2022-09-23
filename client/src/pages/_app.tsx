import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import { Head } from '@/components/parts/head'
import { WrapChakraProvider } from '@/theme'
import { TransactionProvider } from '@/lib/TransactionContext'

const globalStyle = css``

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <WrapChakraProvider>
    <Head />
    <Global styles={globalStyle} />
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  </WrapChakraProvider>
)

export default MyApp
