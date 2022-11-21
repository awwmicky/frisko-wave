// import React from 'react'
import { Typography } from '@material-tailwind/react'
import { CarouselSlider, ProductItemCard } from '@/components/shared'
import { productList } from '@/src/constants'

const content = {
	title: 'You May Also Like',
}

const ProductRecommend = ({ className="" }) => {
	return (
		<div>
			<Typography variant="h3" className={`mb-8 text-center font-bold ${ className }`}>{ content.title }</Typography>
			<CarouselSlider slides={ productList }>
				{ (item) => <ProductItemCard item={ item } /> }
			</CarouselSlider>
		</div>
	)
}

export { ProductRecommend }
