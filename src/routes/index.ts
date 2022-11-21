type TEntry = [
	string,
	{
		path: string
		skip?: boolean
	}
]

type TPathsNav = Array<{
	label: string
	path: string
}>

export const PATHS_ROOT = {
	'home': { path: '/', },
	'shop': { path: '/product', },
	'checkout': { path: '/checkout', skip: true, },
}

export const PATHS_NAV = Object.entries(PATHS_ROOT).reduce<TPathsNav>(
	(acc, [ key, val ]: TEntry) => {
		if (val?.skip) return acc
		acc.push({label: key,	path: val.path })
		return acc
	},
	[]
)
