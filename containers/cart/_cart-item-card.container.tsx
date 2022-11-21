import NextImage from 'next/image'
import NextLink from 'next/link'
import { FC } from 'react'
import { Typography, IconButton, Card, CardHeader } from '@material-tailwind/react'
import { Icon } from '@/components/blocks'
import { QuantityCounter } from '@/components/shared'
import type { IProductItem } from '@/src/@types'
import { PATHS_ROOT } from '@/src/routes'

interface IPCartItemCard {
	item: IProductItem
	removeItem: () => void
}

const sx = {
	card: 'p-4 grid gap-4 grid-cols-6 grid-row-1',
	image: 'm-0 row-start-2 [&>*]:h-full [&>*]:object-contain sm:col-span-2 sm:row-start-1 sm:row-span-2',
	link: 'col-span-5 sm:col-span-3 col-start-1 sm:col-start-3 hover:underline active:no-underline [&>*]:font-bold',
	price: 'col-start-[-2] justify-self-end font-bold',
	qty: 'col-span-4 col-start-2 sm:col-span-3 sm:col-start-3 self-end',
	removeBtn: 'col-start-[-2] place-self-end',
}

const CartItemCard: FC<IPCartItemCard> = ({ item, removeItem }) => (
	<Card className={`${ sx.card }`}>
		<CardHeader color="red" floated={false} className={`${ sx.image }`}>
			<NextImage src={ item.image } alt={ item.image_alt } />
		</CardHeader>

		<NextLink passHref href={ `${ PATHS_ROOT.shop.path }/${ item.id }` } className={`${ sx.link }`}>
			<Typography variant="h5">{ item.name }</Typography>
		</NextLink>

		<Typography variant="paragraph" className={`${ sx.price }`}>
			${ item.price }
		</Typography>

		<QuantityCounter qty={ item.qty } size="sm" className={`${ sx.qty }`} />

		<IconButton onClick={ removeItem } variant="outlined" color="red" size="sm" className={`${ sx.removeBtn }`}>
			<Icon.Remove />
		</IconButton>
	</Card>
)

export { CartItemCard }
// TODO: set data here
