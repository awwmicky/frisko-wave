import { FC, PropsWithChildren, useState } from 'react'
import { Header, Footer } from '@/components/layout'
import { CartDrawer } from '@/containers'
import { Breadcrumbs } from '../'

interface IPRootLayer extends PropsWithChildren { }

const RootLayer: FC<IPRootLayer> = ({ children }) => {
	const [ isOpen, setDrawer ] = useState(false)
	const toggleDrawer = () => setDrawer((prev) => !prev)

	return (
		<>
			<Header
				toggleDrawer={ toggleDrawer }
			/>
			<main>
				<Breadcrumbs />
				{ children }
			</main>
			<CartDrawer
				isOpen={ isOpen }
				toggleDrawer={ toggleDrawer }
			/>
			<Footer />
		</>
	)
}

export { RootLayer }
