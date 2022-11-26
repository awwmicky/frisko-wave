import { FC, PropsWithChildren } from 'react'
import { Header, Footer } from '@/components/layout'
import { CartDrawer } from '@/containers'
import { Breadcrumbs } from '../'

interface IPRootLayer extends PropsWithChildren { }

const RootLayer: FC<IPRootLayer> = ({ children }) => (
	<>
		<Header	/>
		<main>
			<Breadcrumbs />
			{ children }
		</main>
		<CartDrawer	/>
		<Footer />
	</>
)

export { RootLayer }
