import { FC } from 'react'
import { Typography } from '@material-tailwind/react'
import { CarouselSlider } from '@/components/shared'
import { IProductDetail } from '@/src/@types'
import { ProductItemCard } from '../'

interface IPProductList {
	list: Array<Omit<IProductDetail, 'rating' | 'description'>>
}

const content = {
	title: 'Best Seller Products',
	subtitle: 'There is a variety of top quality sound',
}

const ProductList: FC<IPProductList> = ({ list }) => {
	return (
		<div className="mb-8 flex flex-col gap-4">
			<div className="mb-8 text-center">
				<Typography variant="h2" className="font-bold">{ content.title }</Typography>
				<Typography variant="paragraph">{ content.subtitle }</Typography>
			</div>

			<CarouselSlider slides={ list }>
				{ (item) => <ProductItemCard item={ item } /> }
			</CarouselSlider>
		</div>
	)
}

export { ProductList }
