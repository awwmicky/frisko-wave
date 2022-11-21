import { FC } from 'react'
import type { IDrawer } from '@/src/@types'
import { cartList } from '@/src/constants'
import { Layer } from '../'
import { Branding, NavBar, CartMenu } from './_.blocks'

interface IPHeader extends Omit<IDrawer, 'isOpen'> { }

const Header: FC<IPHeader> = ({ toggleDrawer }) => (
  <header className="z-[11] sticky bg-white top-0 border-b">
    <Layer className="py-2 flex flex-2 place-items-center place-content-between">
			<Branding />
			<div className="flex gap-4">
				<NavBar />
				<CartMenu
					toggleDrawer={ toggleDrawer }
					totalCartItems={ cartList.length }
				/>
			</div>
    </Layer>
  </header>
)

export { Header }
// TODO: set data here
