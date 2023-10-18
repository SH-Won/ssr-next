import '@/styles/globals.css'
import '@/styles/common.scss'
import 'my-react-component/dist/style.css'
import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import '@/styles/LandingPage.scss'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme, mixins } from '@/styles/theme'
import ResponsiveWindow from '@/layout/ResponsiveWindow'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>next boiler</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedProps}>
          <ThemeProvider theme={theme}>
            <ResponsiveWindow>
              <Component {...pageProps} />
            </ResponsiveWindow>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}
