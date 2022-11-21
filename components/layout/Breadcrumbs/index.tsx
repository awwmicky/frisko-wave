import { useRouter } from 'next/router'
import { Children } from 'react'
import { Breadcrumbs as UIBreadcrumbs } from '@material-tailwind/react'
import { Layer } from '@/components/layout'
import { Icon } from '@/components/blocks'
import { PATHS_ROOT } from '@/src/routes'

const crumbsAllowed = [
	PATHS_ROOT.shop.path,
]

const Breadcrumbs = () => {
	const router = useRouter().asPath.split('/').slice(1)
	// console.info('[crumbs]', router, router.length, crumbsAllowed.includes(router[0]))

	if (!router[0].length) return null
	if (!crumbsAllowed.includes(`/${ router[0] }`)) return null

	return (
		<Layer>
			<UIBreadcrumbs separator={ <Icon.RightArrow /> } className="px-0">
				<a href={PATHS_ROOT.home.path} className="opacity-60">Home</a>
				{ Children.toArray(router.map((path, idx) => (
					<a href={`/${ path }`} className={ (router.length === (idx+1)) ? "capitalize" : "capitalize opacity-60" }>
						{ path }
					</a>
				)))}
			</UIBreadcrumbs>
		</Layer>
	)
}

export { Breadcrumbs }
