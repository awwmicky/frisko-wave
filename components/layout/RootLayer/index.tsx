import { FC, PropsWithChildren } from 'react'
import { Header, Footer } from '@/components/layout'

interface IPRootLayer extends PropsWithChildren {}

const RootLayer: FC<IPRootLayer> = ({ children }) => (
  <>
    <Header />
    <main>{ children }</main>
    <Footer />
  </>
)

export { RootLayer }
