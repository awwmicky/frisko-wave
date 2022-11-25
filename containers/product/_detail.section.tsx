import { useRouter } from 'next/router'
import { FC, useState, useEffect } from 'react'
import { Typography, Button } from '@material-tailwind/react'
import { QuantityCounter, StarRatings } from '@/components/shared'
import type { IProductDetail } from '@/src/@types'
import { useGlobalStore } from '@/src/store'

interface IPProductDetail {
	item: Omit<IProductDetail, 'model' | 'category'>
	className?: string
}

const content = {
	btnText1: 'Add To Cart',
	btnText2: 'Buy Now',
}

const ProductDetail: FC<IPProductDetail> = ({ item, className="" }) => {
	const [ cartQty, setCartQty ] = useState(1)
	const showCart = useGlobalStore((state) => state.showCart)
	const onAddToCart = useGlobalStore((state) => state.onAddToCart)
	const { modelId } = useRouter().query
	const isInStock = Boolean(item.qty)
	const product = {	...item, model: { current: modelId }, } as IProductDetail

	const updateCartItemQty = (qty=1, val="") => {
		if (val === 'increment') return setCartQty((prev) => prev+1)
		if (val === 'decrement') return setCartQty((prev) => prev-1)

		setCartQty(qty)
	}

	const handleAddCartItem = () => {
		console.debug('[add to cart]', cartQty)
		onAddToCart(product, cartQty)
	}

	const handleBuyItem = () => {
		console.debug('[buy now]', cartQty)
		onAddToCart(product, cartQty)
		showCart()
	}

	useEffect(() => setCartQty(1), [ modelId ])

	return (
		<div className={`flex flex-col gap-4 ${ className }`}>
			<Typography variant="h2" className="font-bold">{ item.name }</Typography>

			{ (item.rating) && (
				<div className="flex gap-2 place-items-center">
					<StarRatings totalStars={ item.rating.totalStars } />
					<Typography variant="small" className="cursor-default translate-y-[-2px]">{ `(${ item.rating.totalReviews })` }</Typography>
				</div>
			)}

			<div>
				<Typography variant="lead" className="font-bold">Details</Typography>
				<Typography variant="paragraph">{ item.description }</Typography>
			</div>

			<Typography variant="h3" color="red" className="font-bold">${ item.price }</Typography>

			{ (!isInStock) ? (
				<Typography variant="lead" className="font-bold">Sold Out</Typography>
			) : (
				<>
					<div>
						<Typography variant="lead" className="mb-2 font-bold">Quantity</Typography>
						<QuantityCounter productQty={ item.qty } cartQty={ cartQty } updateCartItemQty={ updateCartItemQty } />
					</div>

					<div className="flex gap-4">
						<Button onClick={ handleAddCartItem } variant="outlined" color="red">{ content.btnText1 }</Button>
						<Button onClick={ handleBuyItem } color="red">{ content.btnText2 }</Button>
					</div>
				</>
			)}

			<Typography variant="small" color="gray">product model id : <code>{ modelId }</code></Typography>
		</div>
	)
}

export { ProductDetail }
