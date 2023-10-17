import '@/styles/globals.css'
import '@/styles/common.scss'
import 'my-react-component/dist/style.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/LandingPage.scss'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme, mixins } from '@/styles/theme'
import { useBreakPoints } from '@/hooks'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  const { breakPointsClass } = useBreakPoints()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>next boiler</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedProps}>
          <ThemeProvider theme={theme}>
            <div className={`main-container ${breakPointsClass}`}>
              <Component {...pageProps} />
            </div>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}
