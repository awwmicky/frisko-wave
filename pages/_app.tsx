import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Meta, RootLayer } from '@/components/layout'
import { ZustandHydrate } from '@/src/store'
import { ThemeProvider } from '@/src/theme'
import 'tailwindcss/tailwind.css'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
			<Toaster />
			<ZustandHydrate>
				<ThemeProvider>
					<RootLayer>
						<Component { ...pageProps } />
					</RootLayer>
				</ThemeProvider>
			</ZustandHydrate>
    </>
  )
}
