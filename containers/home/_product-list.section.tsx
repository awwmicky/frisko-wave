import { Typography } from '@material-tailwind/react'
import { CarouselSlider, ProductItemCard } from '@/components/shared'
import { productList } from '@/src/constants'

const content = {
	title: 'Best Seller Products',
	subtitle: 'There is a variety of top quality sound',
}

const ProductList = () => {
	return (
		<div className="flex flex-col gap-4">
			<div className="text-center">
				<Typography variant="h2" className="font-bold">{ content.title }</Typography>
				<Typography variant="paragraph">{ content.subtitle }</Typography>
			</div>

			<CarouselSlider slides={ productList }>
				{ (item) => <ProductItemCard item={ item } /> }
			</CarouselSlider>
		</div>
	)
}

export { ProductList }
// TODO: set data here
