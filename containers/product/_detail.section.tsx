// import React from 'react'
import { useRouter } from 'next/router'
import { Typography, Button } from '@material-tailwind/react'
import { QuantityCounter, StarRatings } from '@/components/shared'
import { productItem3 } from '@/src/constants'

const ProductDetail = ({ className="" }) => {
	const { productId } = useRouter().query
	const isInStock = productItem3.qty

	return (
		<div className={`flex flex-col gap-4 ${ className }`}>
			<Typography variant="h2" className="font-bold">{ productItem3.name }</Typography>

			<div className="flex gap-2 place-items-center">
				<StarRatings totalStars={ productItem3.rating.totalStars } />
				<span className="leading-[1] translate-y-[-2px] cursor-default">{ `(${ productItem3.rating.totalReviews })` }</span>
			</div>

			<div>
				<Typography variant="lead" className="font-bold">Details</Typography>
				<Typography variant="paragraph">{ productItem3.description }</Typography>
			</div>

			<Typography variant="h3" color="red" className="font-bold">${ productItem3.price }</Typography>

			{ (!isInStock) ? (
					<Typography variant="lead" className="font-bold">Sold Out</Typography>
			) : (
				<>
					<div>
						<Typography variant="lead" className="mb-2 font-bold">Quantity</Typography>
						<QuantityCounter qty={ productItem3.qty } />
					</div>

					<div className="flex gap-4">
						<Button variant="outlined" color="red">{ productItem3.btnText1 }</Button>
						<Button color="red">{ productItem3.btnText2 }</Button>
					</div>
				</>
			)}

			<Typography variant="small" color="gray">product item id : <code>{ productId }</code></Typography>
		</div>
	)
}

export { ProductDetail }
