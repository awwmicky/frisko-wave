import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Children } from 'react'
import { Breadcrumbs as UIBreadcrumbs } from '@material-tailwind/react'
import { Layer } from '@/components/layout'
import { Icon } from '@/components/blocks'
import { PATHS_ROOT } from '@/src/routes'

const allowedRoutes = {
	'product': PATHS_ROOT.shop.path,
}

const Breadcrumbs = () => {
	const router = useRouter().asPath.split('/').slice(1)

	if (!router[0]?.length) return null
	if (!allowedRoutes[ router[0] as keyof typeof allowedRoutes ]) return null

	const lastRoute = router.at(-1)
	const lastPath = router.join('/')

	return (
		<Layer>
			<UIBreadcrumbs separator={ <Icon.RightArrow /> } className="px-0">
				<NextLink href={PATHS_ROOT.home.path} className="capitalize opacity-60">Home</NextLink>

				{ Children.toArray(router.map((path, idx) => (router.length-1 !== idx) && (
					<NextLink href={`/${ path }`} className="capitalize opacity-60">{ path }</NextLink>
				)))}

				<NextLink href={`/${ lastPath }`} className="uppercase">{ lastRoute }</NextLink>
			</UIBreadcrumbs>
		</Layer>
	)
}

export { Breadcrumbs }
