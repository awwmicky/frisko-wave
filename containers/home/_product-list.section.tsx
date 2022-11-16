import NextLink from 'next/link'
import { FC } from 'react'
import { Typography, Card, CardHeader, CardBody } from '@material-tailwind/react'
import { CarouselSlider } from '@/components/shared'
import type { IProductItemCard } from '@/src/@types'

interface IPProductItemCard {
	item: IProductItemCard
}

const content = {
	title: 'Best Seller Products',
	subtitle: 'There is a variety of top quality sound',
	products: [
		{ id: 1, image: '/', image_alt: 'bpp-50', category: 'speakers', name: 'Boast PartyPal 50', price: 56, },
		{ id: 2, image: '/', image_alt: 'br-451', category: 'headphones', name: 'Boast Rockerz 451', price: 49, },
		{ id: 3, image: '/', image_alt: 'bi-1000d', category: 'headphones', name: 'Boast Immortal 1000D', price: 50, },
		{ id: 4, image: '/', image_alt: 'bbh-242', category: 'earphones', name: 'Boast BassHeads 242', price: 34, },
		{ id: 5, image: '/', image_alt: 'bad-281p', category: 'earphones', name: 'Boast AirDopes 281 Pro', price: 69, },
		{ id: 6, image: '/', image_alt: 'bbh-900', category: 'headphones', name: 'Boast BassHeads 900', price: 49, },
		{ id: 7, image: '/', image_alt: 'br-333', category: 'earphones', name: 'Boast Roackerz 333', price: 55, },
	],
}

const ProductList = () => {
	return (
		<div className="flex flex-col gap-4">
			<div className="text-center">
				<Typography variant="h2" className="font-bold">{ content.title }</Typography>
				<Typography variant="paragraph">{ content.subtitle }</Typography>
			</div>

			<CarouselSlider data={ content.products }>
				{ (item) => <ProductItemCard item={ item } /> }
			</CarouselSlider>
		</div>
	)
}

const ProductItemCard: FC<IPProductItemCard> = ({ item }) => (
	<NextLink passHref href={ `/product/${ item.id }` } className="block h-full">
		<Card className="h-full">
			<CardHeader color="red" className="relative h-56">
				<img src={ item.image } alt={ item.image_alt } />
			</CardHeader>
			<CardBody className="grid grid-cols-2 grid-rows-1 flex-1">
				<Typography variant="h5" className="col-span-full mb-2 text-center">
					{ item.name }
				</Typography>
				<Typography variant="paragraph" className="text-left">
					{ item.category }
				</Typography>
				<Typography variant="paragraph" className="text-right font-bold">
					${ item.price }
				</Typography>
			</CardBody>
		</Card>
	</NextLink>
)

export { ProductList }
