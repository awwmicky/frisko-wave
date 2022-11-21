import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { FC, Children } from 'react'
import { Typography, IconButton } from '@material-tailwind/react'
import { Icon } from '@/components/blocks'
import type { IDrawer } from '@/src/@types'
import { headerContent } from '@/src/constants'
import { PATHS_ROOT, PATHS_NAV } from '@/src/routes'

interface IPCartMenu extends Omit<IDrawer, 'isOpen'> {
	totalCartItems?: number
}

const Branding = () => (
	<NextLink href={ PATHS_ROOT.home.path } className="flex gap-2 place-items-center">
		<headerContent.brand_logo />
		<Typography variant="h5" color="red" textGradient>
			<code>{ headerContent.brand_name }</code>
		</Typography>
	</NextLink>
)

const NavBar = () => {
	const activeRoute = '/' + useRouter().pathname.split('/')[1]
	const activePage = (path="") => activeRoute === path ? 'text-red-500 font-bold capitalize underline underline-offset-4' : 'font-bold capitalize text-gray-400'

	return (
		<nav className="flex gap-2 place-items-center place-content-center">
			{ Children.toArray(PATHS_NAV.map((item) => (
				<NextLink href={ item.path } className={ activePage(item.path) }>{ item.label }</NextLink>
			))) }
		</nav>
	)
}

const CartMenu: FC<IPCartMenu> = ({ toggleDrawer, totalCartItems=0 }) => (
	<div className="relative">
		<IconButton onClick={ toggleDrawer } variant="outlined" color="red" size="sm">
			<Icon.Shopping />
		</IconButton>
		{ (totalCartItems > 0) && (
			<span onClick={ toggleDrawer } className={`\
			${ (totalCartItems < 100) ? 'w-6' : 'w-min-6' }\
			cursor-pointer absolute bg-red-500 text-white border-white p-1 h-min-6\
			border-2 rounded-full text-center text-xs leading-[1]
			top-[70%] left-[-30%]
			`}>{ totalCartItems }
			</span>
		)}
	</div>
)

export {
	Branding,
	NavBar,
	CartMenu,
}
