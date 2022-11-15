import type { AppProps } from 'next/app'
import { Meta, RootLayer } from '@/components/layout'
import { ThemeProvider } from '@/src/context/index'
import 'tailwindcss/tailwind.css'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <ThemeProvider>
        <RootLayer>
          <Component { ...pageProps } />
        </RootLayer>
      </ThemeProvider>
    </>
  )
}
