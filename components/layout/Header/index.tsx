import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Children } from 'react'
import { Typography, IconButton } from '@material-tailwind/react'
import { Icon } from '@/components/blocks'
import { Layer } from '../Layer'

const PATHS_ROOT = [
	{ label: 'Home', path: '/', },
	{ label: 'Products', path: '/product', },
]

const content = {
	brand_name: 'Frisco Wave',
	nav_links: PATHS_ROOT,
	icon: () => <Icon.Shopping size={20} />,
}

const Header = () => (
  <header>
    <Layer className="py-2 flex place-items-center place-content-between">
      <Typography variant="h5" color="red" textGradient>
				<NextLink href={ content.nav_links[0].path }>
					<code>{ content.brand_name }</code>
				</NextLink>
			</Typography>
			<NavBar />
    </Layer>
  </header>
)

const NavBar = () => {
	const activeRoute = '/' + useRouter().pathname.split('/')[1]
	const activePage = (path="") => activeRoute === path ? 'font-bold text-red-500 underline underline-offset-4' : 'font-bold'

	return (
		<div className="flex gap-2">
			<nav className="flex gap-2 place-items-center place-content-center">
				{ Children.toArray(content.nav_links.map((item) => (
					<NextLink href={ item.path } className={ activePage(item.path) }>{ item.label }</NextLink>
				))) }
			</nav>
			<IconButton variant="outlined" color="red"><content.icon /></IconButton>
		</div>
	)
}

export { Header }
