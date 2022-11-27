import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Children } from 'react'
import { Typography, IconButton } from '@material-tailwind/react'
import { Icon } from '@/components/blocks'
import { headerContent } from '@/src/constants'
import { PATHS_ROOT, PATHS_NAV } from '@/src/routes'
import { useGlobalStore } from '@/src/store'

const Branding = () => (
	<NextLink href={ PATHS_ROOT.home.path } className="flex gap-2 place-items-center">
		{/* <Icon.BrandLogo /> */}
		<img src="/favicon.png" alt="brand-logo" className="w-6" />
		<Typography variant="h5" color="black">
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

const CartMenu = () => {
	const toggleCart = useGlobalStore((state) => state.toggleCart)
	const totalQuantities = useGlobalStore((state) => state.totalQuantities)

	return (
		<div className="relative">
			<IconButton onClick={ toggleCart } variant="outlined" color="red" size="sm">
				<Icon.Shopping />
			</IconButton>
			{ (totalQuantities > 0) && (
				<span onClick={ toggleCart } className={`\
				${ (totalQuantities < 100) ? 'w-6' : 'w-min-6' }\
				cursor-pointer absolute bg-red-500 text-white border-white p-1 h-min-6\
				border-2 rounded-full text-center text-xs leading-[1] top-[70%] left-[-30%]\
				`}>{ totalQuantities }
				</span>
			)}
		</div>
	)
}

export {
	Branding,
	NavBar,
	CartMenu,
}
