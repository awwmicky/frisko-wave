// import NextImage from 'next/image'
import NextLink from 'next/link'
import { FC, MouseEvent } from 'react'
import { Typography, Button, Card, CardHeader, CardBody, CardFooter } from '@material-tailwind/react'
import type { IProductDetail } from '@/src/@types'
import { PATHS_ROOT } from '@/src/routes'
import { useGlobalStore } from '@/src/store'
import { urlSrc } from '@/src/lib'

interface IPProductItemCard {
	item: Omit<IProductDetail, 'rating' | 'description'>
	className?: string
}

const content = {
	btnText: 'Add To Cart',
}

const sx = {
	card: 'block h-full transition duration-100 hover:-translate-y-2 active:translate-y-0',
	header: {
		wrapper: 'relative h-56',
		image: 'h-full w-full object-contain pointer-events-none',
	},
	body: {
		wrapper: 'grid grid-cols-2 grid-rows-1 flex-1',
		name: 'col-span-full mb-2 text-center',
		category: 'text-left',
		price: 'text-right font-bold',
	},
	footer: {
		wrapper: 'py-2 flex place-content-between',
	},
}

const ProductItemCard: FC<IPProductItemCard> = ({ item, className="" }) => {
	const onAddToCart = useGlobalStore((state) => state.onAddToCart)
	const isInStock = Boolean(item.qty)

	const onAddCartItem = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		console.info('[remove from cart]')
		onAddToCart(item as IProductDetail)
	}

	return (
		<NextLink passHref href={`${ PATHS_ROOT.shop.path }/${ item.model.current }`}	className={ `${ sx.card } ${ className }`}>
			<Card className="h-full">
				<CardHeader color="red" className={`${ sx.header.wrapper }`}>
					<img src={ urlSrc(item.images).url() } alt={ item.model.current } className={`${ sx.header.image }`} />
				</CardHeader>

				<CardBody className={`${ sx.body.wrapper }`}>
					<Typography variant="h5" className={`${ sx.body.name }`}>{ item.name }</Typography>
					<Typography variant="paragraph" className={`${ sx.body.category }`}>{ item.category }</Typography>
					<Typography variant="paragraph" className={`${ sx.body.price }`}>${ item.price }</Typography>
				</CardBody>

				<CardFooter divider className="py-2 flex place-content-between">
					{ (!isInStock) ? (
						<Typography variant="paragraph" className="text-red-500">Out of Stock</Typography>
					) : (
						<Typography variant="paragraph" className="text-green-500">Available</Typography>
					)}
					<Button onClick={ onAddCartItem } disabled={ !isInStock } color="red" size="sm" className="capitalize">{ content.btnText }</Button>
				</CardFooter>
			</Card>
		</NextLink>
	)
}

export { ProductItemCard }
