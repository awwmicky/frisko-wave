import { FC } from 'react'
import { Typography } from '@material-tailwind/react'
import { CarouselSlider } from '@/components/shared'
import type { IProductDetail } from '@/src/@types'
import { ProductItemCard } from '../'

interface IPProductRecommend {
	list: Array<Omit<IProductDetail, 'rating' | 'description'>>
}

const content = {
	title: 'You May Also Like',
}

const ProductRecommend: FC<IPProductRecommend> = ({ list }) => (
	<div>
		<Typography variant="h3" className="mb-8 text-center font-bold">
			{ content.title }
		</Typography>

		<CarouselSlider slides={ list }>
			{ (item) => <ProductItemCard item={ item } /> }
		</CarouselSlider>
	</div>
)

export { ProductRecommend }
