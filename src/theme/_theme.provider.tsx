import { FC, PropsWithChildren } from 'react'
import { ThemeProvider as MTRProvider } from '@material-tailwind/react'

interface IPThemeProvider extends PropsWithChildren {}

const ThemeProvider: FC<IPThemeProvider> = ({ children }) => (
  <MTRProvider>{ children }</MTRProvider>
)

export { ThemeProvider }
