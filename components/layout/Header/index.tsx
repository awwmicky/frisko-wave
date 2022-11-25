import { Layer } from '../'
import { Branding, NavBar, CartMenu } from './_.blocks'

const Header = () => (
  <header className="z-[11] sticky bg-white top-0 border-b">
    <Layer className="py-2 flex flex-2 place-items-center place-content-between">
			<Branding />
			<div className="flex gap-4">
				<NavBar />
				<CartMenu />
			</div>
    </Layer>
  </header>
)

export { Header }
